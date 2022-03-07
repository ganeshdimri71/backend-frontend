import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import _ from 'lodash'

function CustomerCreate() {
  const [customerTOBeUpdated, setCustomerToBeUpdated] = useState({
    fullName:'',
    email:'',
    password:''
  })
    let navigate = useNavigate()
  const [createPost, responseInfo] = useCreatePostMutation()
  console.log('responseInfo', responseInfo)

  const newPost = {
     fullName:customerTOBeUpdated.fullName, mobile:customerTOBeUpdated.mobile, email:customerTOBeUpdated.email, password:customerTOBeUpdated.password
  }

  const onClickHandler = ()=>{
    navigate('/')
  }

  const onChangeClickHandler=(e)=>{
    setCustomerToBeUpdated({...customerTOBeUpdated, [e.target.name]:[e.target.value]})
  }

  useEffect(() => {
    setCustomerToBeUpdated({
      fullName:responseInfo?.data?.fullName,
      email:responseInfo?.data?.email,
      mobile:responseInfo?.data?.mobile
    })
  }, [responseInfo])


  return (
    // Get All Data
    <div className="App">
      Full Name <input type="text" value={customerTOBeUpdated.fullName}
      onChange={(e)=>onChangeClickHandler(e)} name="fullName"
        />
      Email <input type="text" value={customerTOBeUpdated.email}
       onChange={(e)=>onChangeClickHandler(e)} name="email"
       />
      Mobile <input type="text" value={customerTOBeUpdated.mobile}
       onChange={(e)=>onChangeClickHandler(e)} name="mobile"
       />
      <br />
      Password <input type="text" value={customerTOBeUpdated.password}
       onChange={(e)=>onChangeClickHandler(e)} name="password"
       />
      <br />
      <button onClick={() => { createPost(newPost) }}>Add Post</button>
    </div>

    // Get Single Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>
    // </div>

  );
}

export default CustomerCreate;