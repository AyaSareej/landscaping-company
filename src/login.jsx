// src/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96 relative">
        <img
          src="https://via.placeholder.com/150" // Replace with your logo
          alt="Logo"
          className="absolute top-5 left-5 w-12"
        />
        <h1 className="text-3xl font-bold text-center mb-4">WELCOME</h1>
        <h2 className="text-lg text-center mb-6">REINVENT YOUR SPACE WITH US</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          DON'T HAVE AN ACCOUNT? <a href="#" className="text-green-500 hover:underline">SIGN UP</a>
        </p>
        <p className="text-center text-sm text-gray-600">
          FORGOT PASSWORD? <a href="#" className="text-green-500 hover:underline">CHANGE PASSWORD</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
