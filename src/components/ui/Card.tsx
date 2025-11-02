import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg shadow-sm border dark:border-gray-800 p-4 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
};
