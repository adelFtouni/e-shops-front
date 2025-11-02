import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`px-3 py-2 rounded-md text-sm font-medium ${rest.className ?? ""}`}
    >
      {children}
    </button>
  );
};
