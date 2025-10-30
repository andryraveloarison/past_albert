import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
