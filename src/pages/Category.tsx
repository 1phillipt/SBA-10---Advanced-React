import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Category() {
  const { name } = useParams();

  const { data, loading, error } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
 console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("hi")

  return (
    <div>
      <h1>Category: {name}</h1>
      {data?.meals?.map((meal:any) =>(
        <p key={meal.idMeal} >{meal.strMeal}</p>
      ))}
    </div>
  );
}

export default Category;