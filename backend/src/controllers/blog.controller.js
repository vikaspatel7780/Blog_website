import { asyncHandler } from "../utils/asyncHandler.js";
import { Blog } from "../models/BlogPost.model.js";
import { errorHandler } from "../utils/errorHandler.js";

const PostBlog = asyncHandler(async (req, res) => {
  const { title, content, userId } = req.body;

  // Validate input
  console.warn(title, content, userId);
  if (!title || !content || !userId) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  // Create new blog post
  const author = await Blog.findById(userId);
  const blog = await Blog.create({
    title,
    content,
    author: userId, // Store the user's ObjectId as author
    userId: userId,
  });

  // Return success response
  res.status(201).json({
    message: "Blog post created successfully.",
    success: true,
    blog, // Return the created blog post object
  });
});

const AllPost = asyncHandler(async (req, res) => {
  const blog = await Blog.find().populate('author');
  if (blog.length > 0) {
    res.status(201).json({
      message: "Post retrieved successfully",
      success: true,
      blog, // Return the created blog post object
    });
  } else {
    res.status(404).json({
      message: "No post found",
      success: false,
    });
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (blog) {
    
    res.status(201).json({
      message: "Blog post retrieved successfully",
      success: true,
      blog, // Return the created blog post object
    });
  } else {
    res.status(404).json({
      message: "Blog post not found",
      success: false,
    });
  }
});

const deleteBlog = asyncHandler( async(req, res) =>{
  const {id} = req.params;
  const blog = await Blog.findByIdAndDelete(id)
  if(!blog){
    return errorHandler(res, "Blog Post Does not Find")
  }
  else{
    res.status(200)
    .json({
      success: true,
      message: 'Blog post deleted successfully',
    })
  }
})

const UpdateBlog = asyncHandler( async(req, res) =>{
  const {id} = req.params;
  const {title , content} = req.body;
  const blog = await Blog.findByIdAndUpdate(id, {title , content}, {new: true})
  if(!blog){
    return errorHandler(res, "Blog Post Does not Find")
  }
  else{
    res.status(200)
    .json({
      success: true,
      message: "Blog post Successfully Updated",
      blog
    })
  }
})
export { PostBlog, AllPost , getBlog, UpdateBlog, deleteBlog};
