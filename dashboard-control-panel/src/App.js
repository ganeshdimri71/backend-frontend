import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerCreate from './CustomerCreate';
import CustomerList from './CustomerList';
import CustomerUpdate from './CustomerUpdate'

const App = () => {
  return (
    <Router>
   <Routes>
        <Route path='/' element = {<CustomerList />} exact />
        <Route path='/:id' element = {<CustomerUpdate />}  />
        <Route path='/create' element = {<CustomerCreate />}  />
        {/* <Route path="*"><Whoops404/></Route> */}
    </Routes>
 </Router>
  )
}

export default App