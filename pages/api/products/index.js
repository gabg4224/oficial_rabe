import { connectDB } from "@/utils/db";
import Products from "@/models/products";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  try {
    console.log("CONNECTING TO MONGO");
    await connectDB();
    console.log("CONNECTED TO MONGO");
    if (method === "GET") {
      return handleGetRequest(res);
    } else if (method === "POST") {
      return handlePostRequest(body, res);
    } else {
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

async function handleGetRequest(res) {
  try {
    const productList = await Products.find();
    (productList);
    return res.status(200).json(productList);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function handlePostRequest(body, res) {
  try {
    const newProduct = new Products(body);
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
}
