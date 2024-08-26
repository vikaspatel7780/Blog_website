import express from 'express';
import cors from 'cors'; // Import the cors middleware
import dotenv from 'dotenv'; // To load environment variables
import cookieParser from 'cookie-parser';
import blogRouter from './routes/blog.route.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Define CORS options
const allowedOrigins = process.env.CORS_ORIGIN.split(',');

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        }
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
    },
    credentials: true
}));

// Optional: Log each request to help with debugging CORS issues
app.use((req, res, next) => {
    // console.log(`Incoming request: ${req.method} ${req.path}, Origin: ${req.headers.origin}`);
    next();
});

// Use cookie-parser middleware
app.use(cookieParser());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount blogRouter for user-related routes
app.use('/api/v1/users', blogRouter);

// Handle preflight requests for CORS
// app.options('*', cors(corsOptions)); // Ensures preflight requests are handled with CORS options

export default app;
