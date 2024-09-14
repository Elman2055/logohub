import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://logohub.kz/api";

export const logohubApi = createApi({
  reducerPath: "logohubApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (body: string) => ({
        url: "/products/products",
        method: "POST",
        body: { category: body },
      }),
    }),
    getProduct: builder.query({
      query: (id: number) => `/products/get-product/${id}`,
    }),
  }),
});

export const { useGetProductsMutation, useGetProductQuery } = logohubApi;
