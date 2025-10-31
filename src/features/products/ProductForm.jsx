import React, { useState } from 'react'

const ProductForm = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
  })

  console.log(product);
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (e) => {
    setProduct({
      ...product, [e.target.name]: e.target.value
    })
  }
  return (
     <div className="bg-gradient-to-right from-gray-50 to-gray-100 flex items-center justify-center py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📖 Add New Book
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Book Title"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Book Price"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

        </div>
      </form>
    </div>
  )
}

export default ProductForm
