"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          
          {/* About / Brand */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Next<span className="text-indigo-600 dark:text-indigo-400">Shop</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-xs">
              NextShop is your one-stop online store for the latest products, tech, and gadgets. Discover, shop, and enjoy!
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</Link>
              <Link href="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Products</Link>
              <Link href="/login" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Login</Link>
              <Link href="/dashboard/add-product" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Add Product</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h4>
            <p className="flex items-center gap-2">
              <HiOutlineMail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> 
              <a href="mailto:support@nextshop.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">support@nextshop.com</a>
            </p>
            <p className="flex items-center gap-2">
              <HiOutlinePhone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> 
              <a href="tel:+1234567890" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">+1 234 567 890</a>
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-300 dark:border-neutral-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} NextShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
