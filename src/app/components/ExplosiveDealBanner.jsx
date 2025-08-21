"use client";
import Link from "next/link";

export default function ExplosiveDealBanner({
  title = "Explosive Deal!",
  subtitle = "Limited time mega offer!",
  image = "https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg",
  price = 129.99,
  oldPrice = 199.99,
  ctaHref = "/products",
  badge = "🔥 Hot Deal",
}) {
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <section className=" overflow-hidden bg-indigo-50 dark:bg-neutral-900 p-10 md:p-16 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left text */}
      <div className="md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 text-red-700 dark:bg-red-900/30 dark:text-red-200 mb-4">
          {badge}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          {subtitle}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            ${price}
          </span>
          <span className="text-gray-500 line-through dark:text-gray-400">
            ${oldPrice}
          </span>
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-200">
            -{discount}%
          </span>
        </div>

        <div className="mt-6 flex gap-3 justify-center md:justify-start">
          <Link
            href={ctaHref}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
          >
            Grab Deal
          </Link>
          <Link
            href="/products"
            className="rounded-xl border px-5 py-2.5 font-medium border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-neutral-800 transition"
          >
            View Products
          </Link>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
