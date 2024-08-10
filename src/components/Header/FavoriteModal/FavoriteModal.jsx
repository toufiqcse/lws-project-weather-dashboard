
import { useContext } from 'react';
import { FavoriteContext, LocationContext } from '../../../context';


const FavoriteModal = ({ onClose }) => {
    const { favorites } = useContext(FavoriteContext);
    const { setSelectedLocation } = useContext(LocationContext);
    console.log(favorites);


    return (
        <>
            <div className="flex items-center justify-center dark:bg-darkBg/50 bg-white bg-opacity-50 fixed inset-0 z-50">
                <div className="dark:bg-white bg-darkBg rounded-sm shadow-lg w-full max-w-lg 
                  px-3 py-2 space-y-2 fade-in">
                    <div className="flex justify-between items-center space-x-6">
                        <h3 className="text-lg text-white dark:text-black font-bold px-4 underline sm:text-base">
                            Favorite Locations
                        </h3>
                        <button
                            onClick={onClose}
                            className="font-semibold text-3xl text-red-600 hover:text-red-600 sm:text-2xl"
                        >
                            &times;
                        </button>
                    </div>
                    <hr />
                    <>
                        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                            {favorites.length > 0 ? (
                                favorites.map((fav) => (
                                    <li
                                        key={fav.location}
                                        className="hover:bg-gray-200 dark:text-black text-white hover:text-black"
                                        onClick={() => setSelectedLocation({ ...fav })}
                                    >
                                        {fav.location}
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-500">Nothing added</p>
                            )}
                        </ul>
                    </>
                </div>
            </div>

        </>
    )
}

export default FavoriteModal;
