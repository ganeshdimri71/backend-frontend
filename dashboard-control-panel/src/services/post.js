import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const postApi = createApi({
 // The unique key that defines where the Redux store will store our cache.
 reducerPath: 'postApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/accounts/',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getAllPost: builder.query({
   query: () => ({
    url: 'list/',
    method: 'GET'
   })
  }),
  getPostById: builder.query({
   query: (id) => {
    console.log("ID:", id)
    return {
     url: `customer/${id}/`,
     method: 'GET'
    }
   }
  }),

  getPostByLimit: builder.query({
   query: (num) => {
    console.log("Limit Number:", num)
    return {
     url: `posts?_limit=${num}`,
     method: 'GET'
    }
   }
  }),

  deletePost: builder.mutation({
   query: (id) => {
    console.log("Delete ID:", id)
    return {
     url: `delete/${id}`,
     method: 'DELETE',
   //   headers: {
   //      'Access-Control-Allow-Origin': '*',
   //      'Content-type': 'application/json; charset=UTF-8',
   //     }
    }
   }
  }),

  createPost: builder.mutation({
   query: (newPost) => {
    console.log("Create Post: ", newPost)
    let updatedPost = {
       fullName:newPost.fullName[0],
       email:newPost.email[0],
       mobile:newPost.mobile[0],
       password:newPost.password[0]
    }

    return {
     url: `create/`,
     method: 'POST',
     body: updatedPost,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   }
  }),

  updatePost: builder.mutation({
   query: (updatePostData) => {
    console.log("Update Post: ", updatePostData)
    let { id, ...data } = updatePostData
   let dataToBeUpdated = {
      fullName:data.fullName[0] || data.fullName,
      email:data.fullName[0] || data.email,
      mobile:data.mobile[0] || data.mobile,
      password:data.password[0] || data.password,
   }
    console.log("Actual Update Post: ", data)
    console.log("dataToBeUpdated: ", dataToBeUpdated)
    console.log('The id is ', id)
    
    return {
     url: `update/${id}/`,
     method: 'PUT',
     body: 
      dataToBeUpdated
     ,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   }
  }),
 }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi