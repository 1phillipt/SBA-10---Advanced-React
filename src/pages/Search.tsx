import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function Search() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const { data, loading, error } = useFetch<any>(
  debouncedQuery
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedQuery}`
    : null
);

  return (
    <div className="search-container">
      <h1 className="search-title">Search Recipes</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {loading && <p className="search-loading">Loading...</p>}
      {error && <p className="search-error">Error</p>}

      <div className="search-grid">
        {data?.meals?.length ? (
          data.meals.map((meal: any) => (
            <div key={meal.idMeal} className="search-card">
              <Link to={`/recipe/${meal.idMeal}`} className="search-card-link">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="search-img" />
                <h3 className="search-label">{meal.strMeal}</h3>
              </Link>
            </div>
          ))
        ) : (
          debouncedQuery && !loading && <p className="search-no-results">No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;