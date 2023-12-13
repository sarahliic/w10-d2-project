import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formValues, setFormValues] = useState({});
  const api_url = `https://6570e58909586eff66421604.mockapi.io/redister`;
  const admins = {
    name: "sarahAdmin",
    email: "sarahAdmin@tuwaiq.com",
    password: "123123Sa@",
  };

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
            Join our Project Management System paltform today and get ready to
            share your ideas.
          </p>
          {/* Fields inputs forms */}
          <div className="mt-6">
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

            <button
              type="submit"
              className="bg-blue-900 text-white font-bold text-sm py-3 mt-6 rounded-lg w-full"
            >
              Login
            </button>
          </div>
        </div>
        {/* form image */}
        <div className="flex relative items-center justify-center">
          <img
            src="https://i.pinimg.com/564x/8c/81/b8/8c81b879e690f315a68c6958814354c9.jpg"
            alt="form-img"
            className="object-cover rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
