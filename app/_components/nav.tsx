import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="p-3 flex items-center justify-center border-b border-slate-300">
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
