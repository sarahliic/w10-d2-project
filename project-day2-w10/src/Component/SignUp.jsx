import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formValues, setFormValues] = useState({});

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <form
        className="bg-white flex rounded-lg w-full font-serif"
        onSubmit={formik.handleSubmit}
      >
        {/* form content */}
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-bold">
            Let's get started &#128075;
          </h1>
          <p className="text-lg text-gray-500">
            Join our Project Management System platform today and get ready to
            share your ideas.
          </p>
          {/* Fields inputs forms */}
          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="name"
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="email"
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* password input field */}
            ```jsx
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.password && formik.errors.password
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="password"
              >
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : "Password"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* confirm password input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="confirmPassword"
              >
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : "Confirm Password"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          {/* Submit button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
