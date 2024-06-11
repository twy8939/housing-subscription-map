import Link from "next/link";
import React from "react";

export default function Header({ rightContent }: IHeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full h-12 px-3 flex justify-between z-50 border-b items-center">
      <div className="flex">
        <Link href="/">Home</Link>
      </div>
      {rightContent && <div>{rightContent}</div>}
    </header>
  );
}
