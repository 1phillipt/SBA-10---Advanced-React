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
    <div className="category-container">
      <h1 className="category-title">Category: {name}</h1>
      <div className="category-grid">
        {data?.meals?.map((meal: any) => (
          <Link
            key={meal.idMeal}
            to={`/recipe/${meal.idMeal}`}
            className="category-card"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="category-img-large"
            />
            <span className="category-label">{meal.strMeal}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;