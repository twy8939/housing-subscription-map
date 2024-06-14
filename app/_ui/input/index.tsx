import React from "react";

export default function Input({
  label,
  leftContent,
  rightContent,
  ...props
}: InputProps) {
  return (
    <>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex justify-between items-center bg-gray-50 border border-blue-500 rounded-lg dark:bg-gray-700 dark:border-gray-600">
        {leftContent && <span className="pl-4">{leftContent}</span>}
        <input
          type="text"
          {...props}
          className={`text-gray-900 text-sm  focus:ring-blue-500 focus:outline-none block w-full p-2.5 rounded-lg dark:placeholder-gray-400 dark:text-white ${props.className}`}
        />
        {rightContent && <span className="pr-4">{rightContent}</span>}
      </div>
    </>
  );
}
