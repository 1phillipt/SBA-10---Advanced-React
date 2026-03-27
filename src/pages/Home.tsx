import { useEffect, useState } from "react";
import type { Category } from "../types/category";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
   
 const {data, loading, error} = useFetch<{ categories: Category[] }>("https://www.themealdb.com/api/json/v1/1/categories.php");


  if(loading) return <p>loading</p>
  if(error) return <p>Error: {error} </p>;

  return (
    <>
      {data?.categories.map((category) => (
        <div key={category.idCategory}> 
        <Link to={`/category/${category.strCategory}`}>
        {category.strCategory} </Link>
        </div>
      ))}
    </>
  );
}
export default Home;
