import { FavoriteContext } from "../context";
import useLocalStorage from "../Hooks/useLocalstorage";


const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage("favoritesItem", []);

    const addToFavorites = (latitude, longitude, location) => {
        setFavorites([
            ...favorites,
            {
                latitude: latitude,
                longitude: longitude,
                location: location,
            },
        ]);
    };


    const removeFromFavorites = (location) => {
        const restFavorites = favorites.filter(
            (fav) => fav.location !== location
        );
        setFavorites(restFavorites);
    };

    return (
        <FavoriteContext.Provider
            value={{ addToFavorites, removeFromFavorites, favorites }}
        >
            {children}

        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
