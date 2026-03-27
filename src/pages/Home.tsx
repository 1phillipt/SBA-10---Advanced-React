// ...existing code...
import type { Category } from "../types/category";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
   
 const {data, loading, error} = useFetch<{ categories: Category[] }>("https://www.themealdb.com/api/json/v1/1/categories.php");


  if(loading) return <p>loading</p>
  if(error) return <p>Error: {error} </p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Categories</h1>
      <div className="category-grid">
        {data?.categories.map((category) => (
          <Link
            key={category.idCategory}
            to={`/category/${category.strCategory}`}
            className="category-card"
          >
            <img
              src={category.strCategoryThumb || `https://www.themealdb.com/images/category/${category.strCategory}.png`}
              alt={category.strCategory}
              className="category-img"
            />
            <span className="category-label">{category.strCategory}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;
