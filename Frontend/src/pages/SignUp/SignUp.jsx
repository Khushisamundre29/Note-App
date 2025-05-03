import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/input/passwordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance"; // ✅ Ensure axiosInstance is imported

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Name validation
    if (name.trim() === "") {
      setError("Name is required.");
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); 

    //singUp API Call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard"); 
      } else if (response.data?.message) {
        setError(response.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSubmit}>
            <h4 className="text-2xl mb-7">Signup</h4>

            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Input */}
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 mt-3"
              placeholder="Password"
            />

            {/* Confirm Password Input */}
            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-4"
              placeholder="Confirm Password"
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            {/* Submit Button */}
            <button type="submit" className="btn-primary">
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
