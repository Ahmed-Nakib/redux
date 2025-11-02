import React, { useState } from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../../services/productsApi';
import UpdateProduct from './UpdateProduct';

const ProductsView = () => {

  const {data, isLoading, error} = useGetProductsQuery()
  
  const [deleteProduct] = useDeleteProductMutation()

  

  const handleDelete = async (id) => {
    await deleteProduct(id)
  }

  const [edit, setEdit] = useState(null)
  const handleEdit = (product) => {
    setEdit(product)
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mb-10 tracking-wide">
        🛍️ Product Collection
      </h1>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl text-blue-400 animate-pulse">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-800 text-red-200 p-4 rounded-xl mb-6 shadow-md w-full max-w-3xl text-center">
          <h2 className="font-semibold text-lg">❌ Error:</h2>
          <p>{error.message || "Something went wrong."}</p>
        </div>
      )}
      {!isLoading && !error && data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/80 backdrop-blur-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between"
            >
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3 italic">
                  {product.category}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                 {product.description}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="flex justify-between items-center mt-5">
                <p className="text-lg font-bold text-blue-400">
                  ${product.price}
                </p>

                <div className="space-x-3">
                  <button 
                  onClick={() => handleEdit(product)}
                  className='px-1.5 py-1 border'>Edit</button>
                  <button 
                  onClick={() => handleDelete(product.id)}
                  className='px-1.5 py-1 border'>delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !isLoading &&
        !error && (
          <p className="text-gray-400 text-lg mt-10">No products available 💤</p>
        )
      )}

      {edit && <UpdateProduct onEdit={edit} onCancel={() => setEdit(null)}/>}
    </div>
  )
}

export default ProductsView
