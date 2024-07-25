"use client";
import Link from "next/link";
import { useToggle } from "../_hooks/useToggle";
import { navbarData } from "../_data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { toggle, handleSetToggle } = useToggle();
  const router = usePathname;
  return (
    <nav className="p-3 flex items-center justify-center border-b border-slate-300 bg-slate-50 dark:bg-black">
      <ul className="flex items-center gap-3">
        <button onClick={handleSetToggle}>
          <FontAwesomeIcon
            icon={toggle ? faSun : faMoon}
            className="text-2xl cursor-pointer dark:text-yellow-400"
          />
        </button>
        {navbarData.map((data) => (
          <li
            key={data.id}
            className={`${
              router() === data.path
                ? "text-purple-600 dark:text-purple-600"
                : ""
            } dark:text-white`}
          >
            <Link href={data.path}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
