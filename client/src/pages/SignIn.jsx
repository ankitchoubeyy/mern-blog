import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle change
  const handleChange = (e) => {
    setFormData({
      ...formData, // keep other fields
      [e.target.name]: e.target.value, // update the current field only
    });
  };

  // Function to handle the Sbumit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    dispatch(signInStart()); // call it properly

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        formData, 
        {withCredentials: true}
      );

      console.log("Login successful:", res.data);

      // Show toast
      toast.success(res.data.message || "Login successful!");

      // Pass only user data
      dispatch(signInSuccess(res.data.user));

      // Redirect to homepage
      navigate("/");

      // Reset form
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error while Login:", error);

      // Pass error message
      dispatch(signInFailure(error.response?.data?.error || error.message));

      // Show error toast
      toast.error(error.response?.data?.error || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-evenly mx-10">
      {/* Left container - Image */}
      <div className="min-h-[70vh] w-[48%]">
        <img src="/register.jpg" alt="" />
      </div>

      {/* Left container - Form */}
      <div className="min-h-[70vh] flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700 ">
            Login
          </h2>

          <div className="h-1 bg-blue-400 mb-3 max-w-[60%] mx-auto w-32"></div>

          {/* Email */}
          <input
            type="email"
            name="email"
            required
            placeholder="abc@example.com"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          <p className="text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
