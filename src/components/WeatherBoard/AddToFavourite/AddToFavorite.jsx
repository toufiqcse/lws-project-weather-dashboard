import { useContext, useEffect, useState } from 'react';
import redHeartIcon from '../../../assets/heart-red.svg';
import heartIcon from '../../../assets/heart.svg';
import { FavoriteContext, WeatherContext } from '../../../context';

const AddToFavorite = () => {
    const { addToFavorites, removeFromFavorites, favorites } =
        useContext(FavoriteContext);

    const { weatherData } = useContext(WeatherContext);

    const [isFavorite, toggleFavorite] = useState(false);

    const { latitude, longitude, location } = weatherData;


    // this effect render first time for keep the favorite value
    useEffect(() => {
        const found = favorites.find((fav) => fav.location === location);
        toggleFavorite(found)
    }, [])

    function handleFavorites() {
        const found = favorites.find((fav) => fav.location === location);

        if (!found) {
            addToFavorites(latitude, longitude, location);
        } else {
            removeFromFavorites(location);
        }
        toggleFavorite(!isFavorite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleFavorites}>
                    <span className="text-white">Add to Favorite</span>
                    <img src={isFavorite ? redHeartIcon : heartIcon} alt="heart icon" />
                </button>
            </div>
        </div>
    )
}

export default AddToFavorite;
