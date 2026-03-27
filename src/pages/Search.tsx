import { useState } from "react";
import useFetch from "../hooks/useFetch";

function Search() {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch<any>(
    query
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : null
  );

  return (
    <div>
      <h1>Search Recipes</h1>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}

      <div>
        {data?.meals?.map((meal: any) => (
          <p key={meal.idMeal}>{meal.strMeal}</p>
        ))}
      </div>
    </div>
  );
}

export default Search;