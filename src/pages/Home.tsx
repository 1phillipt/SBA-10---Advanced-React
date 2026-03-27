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
        {categories.map((categories) => (
            <p key={categories.idCategory}> {categories.strCategory}</p>
        ))}
    </div>
  );
}

export default Home;