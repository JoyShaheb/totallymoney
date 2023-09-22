import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  tagTypes: ["productsTag"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      providesTags: ["productsTag"],
      queryFn: async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => doc.data());
        return { data: productsData };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
