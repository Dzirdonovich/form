import React from "react";

interface ButtonProps {
  text: string;
  disabled: boolean;
}
function Button({ text, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={
        disabled
          ? "bg-gray-500 rounded-xl px-4 py-1 mt-2"
          : "bg-blue-500 rounded-xl px-4 py-1 mt-2"
      }
    >
      {text}
    </button>
  );
}

export default Button;
