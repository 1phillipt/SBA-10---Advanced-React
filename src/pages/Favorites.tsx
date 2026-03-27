import { useFavorites } from "../context/FavoritesContext";
import FavoriteItem from "../components/FavoriteItem";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((id) => <FavoriteItem key={id} id={id} />)}
        </div>
      )}
    </div>
  );
}

export default Favorites;