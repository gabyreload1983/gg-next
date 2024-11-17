import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <div></div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h2>MY PROJECTS</h2>
        <h3>This page is building..</h3>
        <Link
          href="/"
          className="bg-pink-800 py-3 px-10 rounded-md text-center hover:bg-pink-700 hover:text-black"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
