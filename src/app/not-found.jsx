import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NotFound;