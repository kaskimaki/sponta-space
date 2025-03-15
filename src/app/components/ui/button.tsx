"use client"; // Ensures it works in the App Router

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    backgroundColor: '#2563eb',
    color: 'white',
    borderRadius: '0.75rem',
    transition: 'background-color 0.3s',
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '#1d4ed8',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        const target = e.target as HTMLElement;
        target.style.backgroundColor = hoverStyle.backgroundColor as string;
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLElement;
        target.style.backgroundColor = buttonStyle.backgroundColor as string;
      }}
    >
      {children}
    </button>
  );
};