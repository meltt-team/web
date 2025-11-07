// React-related imports
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-gray-50 border border-gray-200 p-6 ${className}`}
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      {children}
    </div>
  );
}

export default Card;

