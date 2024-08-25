// utils/errorHandler.js

const errorHandler = (res, message, statusCode = 400) => {
    return res.status(statusCode).json({
      message,
      success: false,
    });
  };
  
  export  {errorHandler};
  