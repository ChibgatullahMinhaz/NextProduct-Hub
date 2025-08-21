"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={[
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105",
          active
            ? "bg-gray-200 text-gray-900 dark:bg-neutral-700 dark:text-white"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800",
        ].join(" ")}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg shadow-lg dark:bg-neutral-900/30">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 animate-pulse" />
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Next
              <span className="text-indigo-500 dark:text-indigo-400">
                Product Hub
              </span>
            </span>
          </Link>
        </div>

        {/* Center: NavLinks */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            {session && (
              <NavLink href="/dashboard/add-product">Add Product</NavLink>
            )}
          </nav>
        </div>

        {/* Right: Auth */}
        <div className="flex items-center gap-3">
          {status === "loading" ? (
            <div className="h-9 w-28 animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-800" />
          ) : session ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border px-3 py-1.5 shadow-sm bg-gray-50 dark:bg-neutral-800">
                <img
                  src={session.user?.image || "/avatar.png"}
                  alt={session.user?.name || "User"}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="hidden max-w-[180px] truncate text-sm font-medium md:inline text-gray-900 dark:text-gray-100">
                  {session.user?.name || "User"}
                </span>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-700 transition hover:scale-105 hidden sm:block"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-medium text-white hover:from-indigo-600 hover:to-purple-700 transition hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition absolute right-6"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`fixed top-16 left-0 w-full transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-neutral-900 border-t shadow-lg`}
      >
        <div className="mx-auto flex w-11/12 flex-col gap-2 px-4 py-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          {session && (
            <NavLink href="/dashboard/add-product">Add Product</NavLink>
          )}
          {!session ? (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-medium text-white hover:from-indigo-600 hover:to-purple-700 transition hover:scale-105"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                signOut({ callbackUrl: "/" });
              }}
              className="mt-2 w-fit rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-700 transition hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
