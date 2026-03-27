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
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow border border-purple-100">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-60 h-60 object-cover rounded-lg border-2 border-purple-200 mx-auto mb-4" />
      <div className="flex justify-center gap-4 mb-4">
        {favorite ? (
          <button
            onClick={() => removeFavorite(meal.idMeal)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => addFavorite(meal.idMeal)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
          >
            Add to Favorites
          </button>
        )}
      </div>
      <p className="mb-2"><strong>Category:</strong> {meal.strCategory}</p>
      <p className="mb-2"><strong>Area:</strong> {meal.strArea}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-700">Instructions</h3>
      <p className="text-gray-700 whitespace-pre-line">{meal.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;