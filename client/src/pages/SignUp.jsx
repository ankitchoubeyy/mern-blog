import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    console.log(`Form Data: ${formData}`);

    // Loading True
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/register",
        formData
      );
      if (res) {
        console.log(`Registration successfull: ${res.message}`);

        // Showing Toast Message
        toast.success(res.data.message || "Registration successful!");

        // Stpp loading
        setLoading(false);

        // Removing the data from the form
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(`Error while Registration: ${error}`);

      // Error toast
      toast.error(
        error.response?.data?.message || "Registration failed. Try again."
      );
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
            Create an Account
          </h2>

          <div className="h-1 bg-blue-400 mb-3 max-w-[60%] mx-auto w-32"></div>

          {/* Username */}
          <input
            type="text"
            name="username"
            required
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

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
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Saving..." : "Register"}
          </button>

          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link to={"/singin"} className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
