import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useAddProductMutation } from "../../services/productsApi";
const ProductForm = () => {
 
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
  });
  
  const [addProduct] = useAddProductMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
   try {
    await addProduct({ ...product, id: nanoid() })
   } catch (error) {
    console.log(error);
    
   }
    setProduct({ id: "", title: "", price: "", description: "", category: "" }); 
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/60 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-700 w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          🛒 Add New Product
        </h2>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="bg-gray-900 text-gray-100 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
            required
          />

          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Product Price"
            className="bg-gray-900 text-gray-100 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
            required
          />

          <textarea
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="bg-gray-900 text-gray-100 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
            required
          />

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="bg-gray-900 text-gray-100 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
            required
          />
             <button
             type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl py-3 mt-4 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
            >
              Add Product
            </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
