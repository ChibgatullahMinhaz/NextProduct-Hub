import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductDetailsPage({params}) {
const p = await params;
const productCollection = dbConnect(collectionNamesObj.productCollection);
const data = await productCollection.findOne({_id: new ObjectId(p.id)});
  return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <img
        src={data.image}
        alt={data.name}
        className="w-full object-cover h-64  mb-6 rounded-lg border"
      />
      <h1 className="text-3xl font-bold mb-3">{data.name}</h1>
      <p className="text-gray-600 mb-4">{data.desc}</p>
      <p className="text-lg font-semibold text-green-600 mb-6">
        Price: {data.price}
      </p>

      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Buy Now
      </button>
    </div>
  )
}
