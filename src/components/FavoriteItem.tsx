import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function FavoriteItem({ id }: { id: string }) {
  const { data, loading, error } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const meal = data?.meals?.[0];

  if (!meal) return null;

  return (
    <div>
      <Link to={`/recipe/${meal.idMeal}`}>
        <h3>{meal.strMeal}</h3>
        <img src={meal.strMealThumb} width="150" />
      </Link>
    </div>
  );
}

export default FavoriteItem;