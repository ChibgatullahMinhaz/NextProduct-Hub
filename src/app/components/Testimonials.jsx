"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  { name: "Alice Johnson", feedback: "Amazing products and fast delivery. Highly recommend!", rating: 5 },
  { name: "Mark Smith", feedback: "Great service and smooth checkout.", rating: 4 },
  { name: "Sophie Lee", feedback: "Quality products at reasonable price. Will shop again!", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="bg-indigo-50 dark:bg-neutral-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">What Our Customers Say</h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 text-lg sm:text-xl">Real feedback from our happy shoppers.</p>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <FaQuoteLeft className="w-8 h-8 text-indigo-500" />
              <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg">{t.feedback}</p>

              {/* Stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Customer Name */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mt-2">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
