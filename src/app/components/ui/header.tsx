"use client";

import React from "react";

type headerProps = {
  children?: React.ReactNode;
};

export const Header: React.FC<headerProps> = ({ children }) => {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </header>
  );
};