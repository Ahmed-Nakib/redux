import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductListView = () => {
  const { isLoading, products, error } = useSelector(
    (state) => state.productsR
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-gray-100 py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        🛍️ Product Collection
      </h1>

      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl text-blue-400 animate-pulse">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-800 text-red-200 p-4 rounded-xl mb-4 shadow-md">
          <h2 className="font-semibold">❌ Error:</h2>
          <p>{error.message || "Something went wrong."}</p>
        </div>
      )}

      {!isLoading && !error && products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 shadow-md transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3">
                  {product.category}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {product.description.length > 100
                    ? product.description.slice(0, 100) + "..."
                    : product.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-5">
                <p className="text-lg font-semibold text-blue-400">
                  ${product.price}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300">
                  View
                </button>
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
    </div>
  );
};

export default ProductListView;
