import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9b62685c76mshbe3d2af15da5023p1b15bbjsncf7393230331',
      'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

      export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
      })
      