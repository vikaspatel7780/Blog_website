import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'
import {errorHandler} from "../utils/errorHandler.js"; // Adjusting import, assuming default export

const loginUser = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;

  // Check if username or email is provided
  if (!username && !email) {
    return errorHandler(res, "Please provide either username or email", 400);
  }

  // Find the user by username or email
  const user = await User.findOne({ $or: [{ username }, { email }] });

  // Check if the user exists
  if (!user) {
    return errorHandler(res, "User does not exist", 400);
  }

  // Verify the password
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return errorHandler(res, "Invalid password.", 401);
  }

  // Fetch the logged-in user details without the password field
  const loggedInUser = await User.findById(user._id).select("-password");

  // Return the success response
  const tokenData = {
    userId: user._id
}
const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

  return res.status(200)
  .cookie("token", token, { expiresIn: "1d", httpOnly: true })
  .json({
    message: "User logged in successfully.",
    success: true,
    user: loggedInUser,
  });
});


const registerUser = asyncHandler( async (req, res) =>{
    const { username, email, password,fullName, role} = req.body;
    if(!username || !email || !password || !fullName ){
        return errorHandler(res, "Please provide all required fields", 400);
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if(existingUser){
        return errorHandler(res, "User already exists", 400);
    }
    
    const user = await User.create({
        fullName,
        email,
        password,
        username: username.toLowerCase(),
    })
    const createdUser = await User.findById(user._id).select("-password")
    if(!createdUser){
        return errorHandler(res, "Failed to create user", 500);
    }
    return res.status(201).json({
        message: "User created successfully",
        success: true,
        user: createdUser
        })
})
const logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
      message: "user logged out successfully.",
      success: true
  })
}

export {
  logout,
  loginUser
  ,registerUser
};
