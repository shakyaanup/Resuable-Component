import React from "react";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all duration-200 ";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;
