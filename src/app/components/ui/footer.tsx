"use client"; // Ensures it works in the App Router

import React from "react";

type footerProps = {
  children?: React.ReactNode;
  className?: string; 
};

export const Footer: React.FC<footerProps> = ({ children }) => {
  return (
    <footer
      style={{
        marginTop: "2rem",
        color: "#6b7280",
        fontSize: "0.875rem",
      }}
    >
      {children}
      <p>&copy; {new Date().getFullYear()} Sponta. All rights reserved.</p>
    </footer>
  );
};
