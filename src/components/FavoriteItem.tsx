import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function FavoriteItem({ id }: { id: string }) {
  const { removeFavorite } = useFavorites();

  const { data, loading, error } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const meal = data?.meals?.[0];

  if (!meal) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-purple-100 hover:border-purple-400 transition">
      <Link to={`/recipe/${meal.idMeal}`} className="flex flex-col items-center">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-24 h-24 object-cover rounded-full border-2 border-purple-200 mb-2" />
        <h3 className="font-semibold text-purple-700 text-lg mt-2">{meal.strMeal}</h3>
      </Link>
      <button
        onClick={() => removeFavorite(meal.idMeal)}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
      >
        Remove
      </button>
    </div>
  );
}

export default FavoriteItem;