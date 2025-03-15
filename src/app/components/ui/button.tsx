"use client"; // Ensures it works in the App Router

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {


  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};