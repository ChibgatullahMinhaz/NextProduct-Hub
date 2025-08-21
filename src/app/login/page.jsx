"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="my-30 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          LogIn 👋
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Sign in to continue to <span className="font-semibold">NextShop</span>
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-white hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 border text-gray-700 dark:text-gray-200 font-medium transition-all duration-200 shadow-md hover:scale-105"
        >
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          By signing in, you agree to our Terms and Privacy Policy.
        </div>
      </div>
    </div>
  );
}