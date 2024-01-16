import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const baseUrl = "https://dummyjson.com/"
export const mutationApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json")
      headers.set("Content-Type", "application/json")
      return headers
    },
  }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useAllProductsQuery, useGetSingleProductQuery } = mutationApi
