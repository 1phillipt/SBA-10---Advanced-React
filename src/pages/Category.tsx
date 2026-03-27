import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Category() {
  const { name } = useParams();

  const { data, loading, error } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Category: {name}</h1>

      {data?.meals?.map((meal: any) => (
        <div key={meal.idMeal}>
          <Link to={`/recipe/${meal.idMeal}`}>
            <p>{meal.strMeal}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Category;