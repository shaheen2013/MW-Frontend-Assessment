import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

 const blogApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://hr.mediusware.xyz/api/website/blogs" }),
    endpoints: (builder) => ({
        getAllBlogPost: builder.query({
            query: () => {
                return {
                    url: "/",
                    method: "GET",
                    
                }
            }
        })
    })
})

export const { getAllBlogPost } = blogApi.endpoints
export default blogApi;

