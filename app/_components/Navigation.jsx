import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-10 text-2xl font-semibold">
        <li>
          <Link
            href="/"
            className="hover:text-[#1e3a8a] transition-all duration-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-[#1e3a8a] transition-all duration-100"
          >
            Support Circle
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-[#1e3a8a] transition-all duration-100"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-[#1e3a8a] transition-all duration-100"
          >
            Professional Network
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/"
            className="hover:text-[#1e3a8a] transition-all duration-100"
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-[#1e3a8a] transition-all duration-100"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
