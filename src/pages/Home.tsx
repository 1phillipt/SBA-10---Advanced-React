import { useEffect, useState } from "react";

function Home() {
 
    const [categories, setCategories] = useState<any[]>([]);

    useEffect( () => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(data => {
            setCategories(data.categories)
        })
    }, [])

    console.log(categories);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to Recipe Discovery App</p>
    </div>
  );
}

export default Home;