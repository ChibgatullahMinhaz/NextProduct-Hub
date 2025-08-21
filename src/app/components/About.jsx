"use client";

import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

export default function About() {
  const features = [
    { icon: <FaShippingFast className="w-6 h-6 text-indigo-600" />, title: "Fast Delivery", desc: "Quick and safe delivery for all orders." },
    { icon: <FaLock className="w-6 h-6 text-indigo-600" />, title: "Secure Payment", desc: "All transactions are encrypted and safe." },
    { icon: <FaHeadset className="w-6 h-6 text-indigo-600" />, title: "24/7 Support", desc: "Always here to help with your queries." },
  ];

  return (
    <section className="bg-indigo-50 dark:bg-neutral-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Next Product Hub?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Providing top quality products and services for your best shopping experience.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-3 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              {f.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
