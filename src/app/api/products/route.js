import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function GET() {
  try {
    const productCollection = dbConnect(collectionNamesObj.productCollection);
    const products = await productCollection.find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const productsCollection = dbConnect("products");
    const data = await req.json();
    const result = await productsCollection.insertOne(data);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to add product", { status: 500 });
  }
}
