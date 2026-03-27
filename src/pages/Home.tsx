import { useEffect, useState } from "react";

function Home() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      }).catch((error) =>{
        setError(error.message)
        setLoading(false)
      });
  }, []);

  console.log(categories);

  if(loading) return <p>loading</p>
  if(error) return <p>Error: {error} </p>;

  return (
    <div>
      {categories.map((categories) => (
        <p key={categories.idCategory}> {categories.strCategory}</p>
      ))}
    </div>
  );
}
export default Home;
