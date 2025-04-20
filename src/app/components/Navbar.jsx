"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); 



  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    setUserMenuOpen(false);
  };

  if (pathname === "/login") return null;

  return (
    <header className="bg-[#FFFAFA] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center space-x-2 text-xl font-bold font-[Playfair] text-gray-800">
            <span>LUSH</span>
            <Image src="/cafe-cake.png" alt="cake" width={20} height={20} />
            <span>LAYERS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link href="/" className="text-sm font-medium hover:text-[#A66CFF]">
            Home
          </Link>
          <Link
            href="/our-story"
            className="text-sm font-medium hover:text-[#A66CFF]"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-[#A66CFF]"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-[#A66CFF]"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-gray-800 hover:text-[#A66CFF]"
          >
            <Search className="w-5 h-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="text-gray-800 hover:text-[#A66CFF]"
            >
              <User className="w-5 h-5" />
            </button>

            {userMenuOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
    {user ? (
      <>
        <div className="px-4 py-2 text-sm text-gray-700">
          Hello, <span className="font-semibold">{user.name}</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
        >
          Logout
        </button>
      </>
    ) : (
      <Link
        href="/login"
        className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
        onClick={() => setUserMenuOpen(false)}
      >
        Login
      </Link>
    )}
  </div>
)}

          </div>

          <Link
            href="/cart"
            className="relative text-gray-800 hover:text-[#A66CFF]"
          >
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden bg-white shadow-lg overflow-hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-gray-800">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/our-story" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex items-center gap-4 pt-2 border-t mt-2">
            <button aria-label="Search" className="text-gray-800">
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Account"
              className="text-gray-800 hover:text-[#A66CFF]"
            >
              <User className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative text-gray-800">
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
