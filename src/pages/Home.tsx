import { useEffect, useState } from "react";
import type { Category } from "../types/category";
import useFetch from "../hooks/useFetch";

function Home() {
   
 const {data, loading, error} = useFetch<{ categories: Category[] }>("https://www.themealdb.com/api/json/v1/1/categories.php");


  if(loading) return <p>loading</p>
  if(error) return <p>Error: {error} </p>;

  return (
    <div>
      {data?.categories.map((categories) => (
        <p key={categories.idCategory}> {categories.strCategory}</p>
      ))}
    </div>
  );
}
export default Home;
