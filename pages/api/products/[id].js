
import Products from "@/models/products";
import { connectDB } from "@/utils/db";
connectDB();

/**
 * A function that handles HTTP requests and returns a response based on the method used.
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @return {object} a JSON response containing the product data or an error message and a status code
 */
export default async function handler(req, res) {
  // Destructure method, body and id from the request object
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        // Find a product by ID
        const product = await Products.findById(id);
        // If the product is not found, return a 400 status code and a JSON response with an error message
        if (!product) return res.status(400).json({ msg: "Id not found" });
        // If the product is found, return a 200 status code and a JSON response with the product data
        return res.status(200).json(product);
      } catch (error) {
        // If there is an error, return a 400 status code and a JSON response with the error message
        return res.status(400).json(error);
      }

    case "DELETE":
      try {
        // Delete a product by ID
        const deletedProduct = await Products.findByIdAndDelete(id);
        // If the product is not found, return a 404 status code and a JSON response with an error message
        if (!deletedProduct)
          return res.status(404).json({ msg: "Id not found" });
        // If the product is found and deleted, return a 200 status code and a JSON response with the deleted product data
        return res.status(200).json(deletedProduct);
      } catch (error) {
        // If there is an error, return a 500 status code and a JSON response with the error message
        return res.status(500).json(error);
      }

    case "PUT":
      try {
        // Update a product by ID using the request body
        const updatedProduct = await Products.findByIdAndUpdate(id, body, {
          new: true,
        });
        // If the product is not found, return a 404 status code and a JSON response with an error message
        if (!updatedProduct)
          return res.status(404).json({ msg: "Id not found" });
        // If the product is found and updated, return a 200 status code and a JSON response with the updated product data
        return res.status(200).json(updatedProduct);
      } catch (error) {
        // If there is an error, return a 500 status code and a JSON response with the error message
        return res.status(500).json(error);
      }

    default:
      // If the request method is not GET, DELETE, or PUT, return a 405 status code and a plain text response with an error message
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
