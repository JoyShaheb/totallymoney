import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      // @ts-ignore
      providesTags: ["productsTag"],
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
