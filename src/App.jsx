import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Admin from './components/Admin/Admin'
import Order from './components/Orders/Order'
import { BrowserRouter , Route , Routes ,Navigate } from 'react-router-dom'


function App() {
  let [showSidebar , setShowSidebar] = useState(false)
  let handleSidebarshow = ()=>{
    setShowSidebar(true);
  }
  let handleSidebarHide=()=>{
    setShowSidebar(false);
  }
  return <>
  
  <BrowserRouter>
  {
    showSidebar && <Sidebar handleSidebarHide={handleSidebarHide}  />
  }
    <Header handleSidebarshow={handleSidebarshow}/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard handleSidebarHide={handleSidebarHide} />}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='*' element={<Navigate to="/dashboard"/>}/>
    </Routes>
      
  </BrowserRouter>
  
  </>
}

export default App