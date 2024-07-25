"use client";
import Link from "next/link";
import { useToggle } from "../_hooks/useToggle";
import { navbarData } from "../_data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { toggle, handleSetToggle } = useToggle();
  return (
    <nav className="p-3 flex items-center justify-center border-b border-slate-300">
      <ul className="flex items-center gap-3">
        <button onClick={handleSetToggle}>
          <FontAwesomeIcon
            icon={toggle ? faSun : faMoon}
            className="text-2xl cursor-pointer"
          />
        </button>
        {navbarData.map((data) => (
          <li key={data.id}>
            <Link href={data.path}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
