"use client"; // Ensures it works in the App Router

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // ✅ Accepts className as a prop
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
