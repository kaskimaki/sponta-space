"use client"; // Ensures it works in the App Router

import React from "react";

type footerProps = {
  children?: React.ReactNode;
  className?: string; 
};

export const Footer: React.FC<footerProps> = ({ children }) => {
  return (
    <footer className="mt-8 text-gray-500 text-sm pb-6">
      {children}
      <p>&copy; {new Date().getFullYear()} Sponta. All rights reserved.</p>
    </footer>
  );
};
