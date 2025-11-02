import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  tagTypes: ['Product'],
  endpoints: (build) => ({

    getProducts: build.query({
      query: () => 'products',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Product', id })),
              { type: 'Product', id: 'LIST' },
            ]
          : [{ type: 'Product', id: 'LIST' }],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Product', id },
        { type: 'Product', id: 'LIST' },
      ],
    }),
    addProduct: build.mutation({
      query: (product) => ({
        url: `products/`,
        method: 'POST',
        body: product
      }),
      invalidatesTags: [{type: 'Product', id: 'LIST'}],
    }),
    updateProduct: build.mutation({
      query: ({id, updateProduct}) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: updateProduct
      }),
      invalidatesTags: [{type: 'Product', id: 'LIST'}],
    }),
  })
});

// ✅ Auto-generated hooks
export const { useGetProductsQuery, useDeleteProductMutation, useAddProductMutation, useUpdateProductMutation } = productsApi;
