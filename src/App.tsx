import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Category from './pages/Category'
import RecipeDetail from './pages/RecipeDetail'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/favorites" element={<Favorites />} />
  <Route path="/category/:name" element={<Category />} />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
  <Route path="/search" element={<Search/>} /> 
</Routes>
    </>
  );
}

export default App;