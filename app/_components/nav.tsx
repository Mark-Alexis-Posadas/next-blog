import { navbarData } from "../_data/navbar";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-3 flex items-center justify-center border-b border-slate-300">
      <ul className="flex items-center gap-3">
        {navbarData.map((data) => (
          <li key={data.id}>
            <Link href={data.path}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
