// import Link from "next/link";
// import { AiOutlineArrowRight } from "react-icons/ai";
// // import { useEffect, useState } from "react";
// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// export default async function Product() {
// const productCollection = dbConnect(collectionNamesObj.productCollection);
// const products = await productCollection.find({}).toArray();

//   return (
//     <section className="bg-indigo-50 dark:bg-neutral-900 py-16">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Featured Products</h2>
//         <p className="mt-2 text-gray-700 dark:text-gray-300 text-center text-sm sm:text-base">
//           Our latest Awesome products.
//         </p>

//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <div
//               key={p._id}
//               className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1"
//             >
//               <img src={p.image} alt={p.name} className="w-full h-52 object-cover" />
//               <div className="p-5 flex flex-col gap-2">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
//                 {/* <p className="text-gray-700 dark:text-gray-300 text-sm">{p.desc}</p> */}
//                 <p className="font-bold text-indigo-600 dark:text-indigo-400">{p.price}</p>
//                 <Link
//                   href={`/products/${p._id}`}
//                   className="inline-flex items-center gap-1 mt-2 text-indigo-600 dark:text-indigo-400 text-sm hover:underline"
//                 >
//                   View Details <AiOutlineArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export const dynamic = "force-dynamic"; // disable caching

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="bg-indigo-50 dark:bg-neutral-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Featured Products
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-center text-sm sm:text-base">
          Our latest awesome products.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="font-bold text-indigo-600 dark:text-indigo-400">
                  {p.price}
                </p>
                <Link
                  href={`/products/${p._id}`}
                  className="inline-flex items-center gap-1 mt-2 text-indigo-600 dark:text-indigo-400 text-sm hover:underline"
                >
                  View Details <AiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
