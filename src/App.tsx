import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
   
    <BrowserRouter> 
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
