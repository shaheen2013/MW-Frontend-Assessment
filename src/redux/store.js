import { configureStore } from '@reduxjs/toolkit'

import blogPostReducer from "./features/blog";
import blogApi  from "./query/blog";

 const store = configureStore({
  reducer: {
    blogs: blogPostReducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
})

export default store;