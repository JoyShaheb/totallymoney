import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  tagTypes: ["productsTag"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      providesTags: ["productsTag"],
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
