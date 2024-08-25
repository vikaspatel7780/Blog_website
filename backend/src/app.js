import express from 'express';
import cors from 'cors'; // Import the cors middleware
import dotenv from 'dotenv'; // To load environment variables
import cookieParser from 'cookie-parser';
import blogRouter from './routes/blog.route.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Define CORS options
const corsOptions = {
    origin: ['http://localhost:5173'], // Allow this origin only
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS middleware with the defined options
app.use(cors(corsOptions));

// Optional: Log each request to help with debugging CORS issues
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}, Origin: ${req.headers.origin}`);
    next();
});

// Use cookie-parser middleware
app.use(cookieParser());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount blogRouter for user-related routes
app.use('/api/v1/users', blogRouter);

// Handle preflight requests for CORS
app.options('*', cors(corsOptions)); // Ensures preflight requests are handled with CORS options

export default app;
