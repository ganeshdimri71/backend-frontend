import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

function CustomerList() {
  let navigate = useNavigate()
  // const responseInfo = useGetAllPostQuery()
  const { data, isFetching, isSuccess, refetch,isLoading, isError } = useGetAllPostQuery(
    null,
    {
      pollingInterval: 600000, //automatically refetch in 10 minutes
    }
  );
  const {reFetch} = useGetAllPostQuery()
  // if(!(responseInfo.isSuccess)) useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(11)
  // const responseInfo = useGetPostByLimitQuery(3)
  const [deletePost, responseInfoOne] = useDeletePostMutation()
  // const [createPost, responseInfo] = useCreatePostMutation()
  // const [updatePost, responseInfo] = useUpdatePostMutation()

  const newPost = {
    title: 'This is New New Title',
    body: 'This is New New Body',
    userId: 1,
  }

  console.log('responseInfoOne', responseInfoOne)

  const updatePostData = {
    id: 1,
    title: 'This is Update Post Title',
    body: 'This is Update Post Body',
    userId: 1,
  }

  console.log("Response Information: ", data)
  console.log("Data: ", data)
  console.log("Success: ", isSuccess)

  if (isLoading) return <button
  onClick={reFetch}
  >fetching...</button>
  if (isError) return <h1>An error occured </h1>

  const updateCustomerComponent =(id)=>{
    navigate(`/${id}`)
  }

  const createCustomet = ()=>{
    navigate('/create')
  }




  return (
    // Get All Data
    <div className="App">
      <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
      {
        data.map((post, i) =>
          <div key={i}>
            <h2> Id =  {post.id} </h2>
            <h2> FullName =  {post.fullName} </h2>
            <h2>Email = {post.email}</h2>
            <h2>Mobile = {post.mobile}</h2>
            <button
            onClick={()=>{
              updateCustomerComponent(post.id)
            }}
            >Update</button>
            <button
            onClick={()=>createCustomet()}
            >Create</button>
            <button onClick={() => { deletePost(post.id) }}>Delete Post</button>
            <button
            onClick={reFetch}
            >fetch</button>
            <hr />
          </div>
        )
      }
    </div>

    // Get Single Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>
    // </div>

    // Get Limited Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Limited  Data)</h1>
    //   {
    //     responseInfo.data.map((post, i) =>
    //       <div key={i}>
    //         <h2>{post.id} {post.title}</h2>
    //         <p>{post.body}</p>
    //         <hr />
    //       </div>
    //     )
    //   }
    // </div>

    // Delete Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button onClick={() => { deletePost(2) }}>Delete Post</button>
    // </div>

    // Create Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Create Data)</h1>
    //   <button onClick={() => { createPost(newPost) }}>Add Post</button>
    // </div>

    // Update Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Update Data)</h1>
    //   <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
    // </div>
  );
}

export default CustomerList;

// data - The returned result if present.
// error - The error result if present.
// isUninitialized - When true, indicates that the query has not started yet.
// isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for the first request fired off, but not for subsequent requests.
// isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both the first request fired off, as well as subsequent requests.
// isSuccess - When true, indicates that the query has data from a successful request.
// isError - When true, indicates that the query is in an error state.
// refetch - A function to force refetch the query