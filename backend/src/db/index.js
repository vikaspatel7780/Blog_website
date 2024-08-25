import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const startServer = async () => {
  try {
    const dbURI = `${process.env.MONGODB_URL}/blog-website`;
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

export default startServer;
