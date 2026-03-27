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
    <div>
      <h1>Search Recipes</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}

      <div>
        {data?.meals?.length ? (
          data.meals.map((meal: any) => (
            <div key={meal.idMeal}>
              <Link to={`/recipe/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} width="300"/>
                <h3>{meal.strMeal}</h3>
              </Link>
            </div>
          ))
        ) : (
          debouncedQuery && !loading && <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;