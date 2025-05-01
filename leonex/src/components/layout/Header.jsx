"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import leonex_logo from "../../../public/images/leonex_logo.svg";
import logo_line from "../../../public/images/logo_line.svg";

const links = [
  { href: "/",         label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about_us", label: "ABOUT US" },
  { href: "/our_team", label: "OUR TEAM" },
  { href: "/insights", label: "INSIGHTS" },
  { href: "/career",   label: "CAREER" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="ml-auto flex w-full items-center px-4 ">
        {/* Logo */}
        <div>
          <Link href="/" >
            <Image
              src={leonex_logo}
              alt="Leonex logo"
              width={200}
              height={36}
              priority
            />
          </Link>

        </div>

        <div className="">
          <Image
            src={logo_line}
            alt="Leonex logo line"
            className="hidden md:block"
            width={100}

          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden ml-auto gap-6 text-sm font-bold md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "relative px-1 py-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:transition-colors",
                pathname === href
                  ? "after:bg-blue-900 text-[#1631C5] " 
                  : "after:bg-transparent hover:after:bg-blue-300"
              )}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-6 mr-4 rounded-sm bg-[#1631C5] px-4 py-2 text-white transition-colors hover:bg-blue-600"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Hamburger – visible only on mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto"
          aria-label="Toggle navigation"
        >
          {open ? (
            <XMarkIcon className="h-8 w-8 text-blue-900" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-blue-900" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden">
          <ul className="flex flex-col gap-4 px-6 pb-6 text-sm font-bold">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block py-1",
                    pathname === href && "text-blue-900"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-sm bg-[#1631C5] px-4 py-2 text-white"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
