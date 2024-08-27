import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token =
            req.cookies?.token || // Attempt to retrieve token from cookies
            req.headers["authorization"]?.replace("Bearer ", ""); // Or from Authorization header
            console.log(token);
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated.",
                success: false
            });
        }

        // Synchronously verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded.userId; // Assuming the token contains a `userId` field
        return next();
        
    } catch (error) {
        console.error("Authentication error:", error.message); // Log the error message
        return res.status(401).json({
            message: "Invalid or expired token.",
            success: false
        });
    }
};

export { isAuthenticated };
