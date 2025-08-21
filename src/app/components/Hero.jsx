"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Discover the Best Products",
    description:
      "Browse our curated collection and find the products you love. Fast delivery, trusted brands, and amazing deals.",
    image: "https://akns-images.eonline.com/eol_images/Entire_Site/202472/rs_1024x759-240802143133-The_Best_Tatcha_Products__.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
  },
  {
    id: 2,
    title: "Exclusive Deals Everyday",
    description:
      "Save big on your favorite items with our daily offers. Don’t miss out on limited-time discounts.",
    image: "https://www.shutterstock.com/image-vector/daily-deals-banner-template-design-600nw-2485939283.jpg",
  },
  {
    id: 3,
    title: "Trusted by Thousands",
    description:
      "Join our happy customers who enjoy seamless shopping experiences with us.",
    image: "/product3.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-indigo-50 dark:bg-neutral-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10 transition-all duration-700">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {slides[current].title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {slides[current].title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            {slides[current].description}
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium text-sm sm:text-base hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-indigo-600 px-6 py-3 text-indigo-600 font-medium text-sm sm:text-base hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-neutral-800 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={slides[current].image}
            alt="Hero Banner"
            className="w-full max-w-md rounded-xl shadow-lg transition-all duration-700"
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index
                ? "bg-indigo-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
