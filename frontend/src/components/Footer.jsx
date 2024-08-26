import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to="https://vscoder-portfolio.netlify.app/"
              className="flex items-center text-2xl font-bold text-gray-800"
            >
              Vikas Patel
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-base font-semibold text-gray-800 uppercase">
                Resources
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="hover:text-gray-900 transition-colors">
                    Upload
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold text-gray-800 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a
                    href="https://github.com/vikaspatel7780"
                    className="hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-900 transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold text-gray-800 uppercase">
                Legal
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <Link to="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-900 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500">
            © 2024
            <a
              href="https://vscoder-portfolio.netlify.app/"
              className="hover:underline ml-1"
            >
              vscoder
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              {/* Example Icon: Replace with a real icon or SVG */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Replace with actual path data */}
                <path d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Z" />
              </svg>
            </a>
            {/* Add other social icons similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
}
