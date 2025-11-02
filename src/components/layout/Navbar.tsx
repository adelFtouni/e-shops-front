import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";
import classNames from "classnames";

/**
 * Navbar - sticky, responsive. Shows points for logged-in user.
 */
export const Navbar: React.FC = () => {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();
  const [sellerMode, setSellerMode] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" className={({isActive})=>classNames("px-3 py-2 rounded-md text-sm font-medium", { "text-gray-900 dark:text-white": !isActive, "bg-eshopyellow/20": isActive })}>Home</NavLink>
              <NavLink to="/about" className={({isActive})=>classNames("px-3 py-2 rounded-md text-sm font-medium", { "text-gray-900 dark:text-white": !isActive, "bg-eshopyellow/20": isActive })}>About</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={sellerMode} onChange={() => setSellerMode((s) => !s)} />
                <span className="text-sm text-gray-700 dark:text-gray-200">Seller view</span>
              </label>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="p-2 rounded-md border dark:border-gray-700"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>

              {user ? (
                <>
                  <div className="hidden sm:flex flex-col items-end text-right">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{user.points} pts</span>
                  </div>
                  <button className="px-3 py-2 rounded-md bg-eshopyellow text-black font-medium" onClick={() => navigate("/profile")}>Profile</button>
                  <button className="px-3 py-2 rounded-md border" onClick={onLogout}>Logout</button>
                </>
              ) : (
                <Link to="/auth" className="px-3 py-2 rounded-md bg-eshopyellow text-black font-medium">Login / Register</Link>
              )}

              {/* mobile menu toggle */}
              <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)}>☰</button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-2">
            <NavLink to="/" className="block px-3 py-2 rounded-md">Home</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md">About</NavLink>
            <div className="px-3 py-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={sellerMode} onChange={() => setSellerMode((s) => !s)} />
                <span>Seller view</span>
              </label>
            </div>
          </div>
        )}
      </nav>
    </header>
);
};
