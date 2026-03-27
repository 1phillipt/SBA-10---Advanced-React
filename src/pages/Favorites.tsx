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
        favorites.map((id) => <FavoriteItem key={id} id={id} />)
      )}
    </div>
  );
}

export default Favorites;