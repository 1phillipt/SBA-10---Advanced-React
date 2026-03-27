import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Category from './pages/Category'
import RecipeDetail from './pages/RecipeDetail'


function App() {
  return (
  
    <BrowserRouter>   
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/category/:name" element={<Category/>} />
        <Route path="/recipe/:id" element={<RecipeDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
