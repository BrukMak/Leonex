"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/",         label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about_us", label: "ABOUT US" },
  { href: "/our_team", label: "OUR TEAM" },
  { href: "/insights", label: "INSIGHTS" },
  { href: "/career",   label: "CAREER" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="navbar ml-auto flex gap-4 text-sm lg:text-md font-bold ">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "relative px-1 py-1",
            /* the underline */
            "after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-colors",
            pathname === href
              ? "after:bg-blue-800"
              : "after:bg-transparent hover:after:bg-blue-300"
          )}
        >
          {label}
        </Link>
      ))}

      {/* CTA button stays visually separate */}
      <Link
        href="/contact"
        className="ml-6 rounded-md bg-blue-900 px-4 py-2 text-white transition-colors hover:bg-blue-800"
      >
        CONTACT US
      </Link>
    </nav>
  );
}
