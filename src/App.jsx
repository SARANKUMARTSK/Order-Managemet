import React, { useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Admin from './components/Admin/Admin'
import Order from './components/Orders/Order'
import Topbar from './components/Topbar/Topbar'
import { BrowserRouter , Route , Routes ,Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import AddProduct from './components/Add-Product/AddProduct'
export const API_URL = 'https://65a62c9d74cf4207b4ef648d.mockapi.io/product'
function App() {
  
  return <>
  
  <BrowserRouter>
  <Sidebar/>
  <Topbar />
   <AddProduct/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='*' element={<Navigate to="/dashboard"/>}/>
    </Routes>
      
  </BrowserRouter>
  
  </>
}

export default App