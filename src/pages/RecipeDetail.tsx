import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";

function RecipeDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const meal = data?.meals?.[0];
  if (!meal) return <p>No recipe found</p>;

  const favorite = isFavorite(meal.idMeal);

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
      <div>
        {favorite ? (
          <button onClick={() => removeFavorite(meal.idMeal)}>
            Remove from Favorites
          </button>
        ) : (
          <button onClick={() => addFavorite(meal.idMeal)}>
            Add to Favorites
          </button>
        )}
      </div>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;