import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(prev => !prev);
  };

  return (
    <div className="flex items-center h-12 border border-gray-300 px-4 rounded-md mt-4 w-full mb-4">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent outline-none"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        aria-label={isShowPassword ? "Hide password" : "Show password"}
        className="ml-2 focus:outline-none"
      >
        {isShowPassword ? (
          <FaRegEye size={22} className="text-primary" />
        ) : (
          <FaRegEyeSlash size={22} className="text-slate-400" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
