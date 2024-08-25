import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
       
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    },
},
{
    timestamps: true
}
);

export const Blog = mongoose.model("Blog", blogPostSchema);