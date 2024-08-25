import React from "react";
import { CiUser } from "react-icons/ci";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogCard({ title, content, author, date, Id, userId, mainUserId }) {
  // Truncate content to the first 40 words
  const truncatedContent = content.split(" ").slice(0, 40).join(" ") + (content.split(" ").length > 40 ? "..." : "");

  return (
    <div className="bg-white border-t border-gray-200 shadow-lg rounded-t-lg p-3 w-[600px] h-[355px] transition-transform transform hover:scale-105 flex flex-col justify-between">
      <div>
        <Link to={`/blog/${Id}`} className="block">
          <p className="text-2xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors duration-300">
            {title}
          </p>
        </Link>
        <Link to={`/blog/${Id}`} className="block">
          <p className="text-gray-800 mb-2 text-justify leading-relaxed">
            {truncatedContent}
          </p>
        </Link>
      </div>

      <div className="flex flex-row justify-between items-start">
        <div>
          <div className="flex items-center text-gray-600 mb-2">
            <CiUser className="text-gray-500 mr-2" size={24} />
            <span className="font-medium text-lg text-gray-800">{author}</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Published: <span className="font-medium text-gray-800">{date}</span>
          </p>
        </div>

        {/* Conditional rendering for edit and delete buttons */}
        {userId === mainUserId && (
          <div className="flex space-x-4">
            <Link to={`/delete/${Id}`}>
              <button
                className="text-red-500 hover:text-red-700 transition-colors duration-300 focus:outline-none"
                title="Delete"
              >
                <FaTrash size={22} />
              </button>
            </Link>
            <Link to={`/update/${Id}`}>
              <button
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300 focus:outline-none"
                title="Edit"
              >
                <FaEdit size={22} />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogCard;
