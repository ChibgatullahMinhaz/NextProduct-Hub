"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-indigo-50 dark:bg-neutral-900 py-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Start Shopping Today!</h2>
      <p className="mt-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        Join thousands of happy customers and explore our products.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-block rounded-lg bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
      >
        Browse Products
      </Link>
    </section>
  );
}
