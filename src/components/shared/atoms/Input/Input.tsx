import { useState } from "react";

export const Input = ({ setValue, placeholder }: any) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
      onKeyDown={({ code }) => {
        if (code === "Enter") setValue(inputValue);
      }}
      className="text-center font-medium w-full p-4 bg-gray-100 border border-gray-400/50 shadow-lg shadow-gray-300/25 outline-none"
    />
  );
};
