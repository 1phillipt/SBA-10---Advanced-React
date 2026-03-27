import { useFavorites } from "../context/FavoritesContext";
import FavoriteItem from "../components/FavoriteItem";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div>
          {favorites.map((id) => (
            <FavoriteItem key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}



export default Favorites;