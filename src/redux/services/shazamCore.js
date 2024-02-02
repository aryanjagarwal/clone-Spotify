import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '9b62685c76mshbe3d2af15da5023p1b15bbjsncf7393230331'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/get-top-songs-in-world'}),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;