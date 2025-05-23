import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <a href="/"><h1 className="font-medium">
        Free<span className="text-blue-400 bold">Scribe</span>
      </h1></a>
      <a href="/" className="flex items-center gap-3 rounded-lg bg-white p-2 text-blue-400 cursor-pointer hover:text-blue-600">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </div>
  );
}
