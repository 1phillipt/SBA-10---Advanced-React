First created project using Vite with React + TypeScript
and used npm create vite@latest recipe-app -- --template react-ts

did npm install npm  and install react-router-dom

I created folder and files below after running above bash commands

src/ components/ pages/ hooks/ context/ types/ api/

created these routes in app.tsx

<!-- <Route path="/" element={<Home />} /> <Route path="/category/:name" element={<Category />} /> 
<Route path="/recipe/:id" element={<RecipeDetail />} /> 
<Route path="/search" element={<Search />} /> 
<Route path="/favorites" element={<Favorites />} /> -->

I used TheMealDB API to get recipe data. And I created a custom hook - useFetch(url). takes url and calls api returns data, loading and error

Category Page fetches meals by category and display list of meals and added navigation to recipe details
<!-- <Link to={`/recipe/${meal.idMeal}`}> -->

after this created custom hook -useDebounce(value, delay) and  global state using Context - FavoritesProvider