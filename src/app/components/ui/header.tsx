"use client";

import React from "react";

type headerProps = {
  children?: React.ReactNode;
};

export const Header: React.FC<headerProps> = ({ children }) => {
  return (
    <header className="w-full bg-black py-6 flex justify-center">
      {children}
    </header>
  );
};