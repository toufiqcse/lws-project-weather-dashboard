
import { useContext } from 'react';
import { FavoriteContext, LocationContext } from '../../../context';


const FavoriteModal = ({ onClose }) => {
    const { favorites } = useContext(FavoriteContext);
    const { setSelectedLocation } = useContext(LocationContext);

    return (
        <>
            <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 z-50">
                <div className="bg-white rounded-sm shadow-lg w-full max-w-lg px-3 py-2 space-y-2 fade-in">
                    <div className="flex justify-between items-center space-x-6">
                        <h3 className="text-lg font-bold px-4 underline">Favorite Locations</h3>
                        <button onClick={onClose} className="font-semibold text-3xl text-red-600 hover:text-red-600" >&times;</button>
                    </div>
                    <hr />
                    <>
                        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                            {
                                favorites.length > 0 ? (
                                    favorites.map((fav) => (
                                        <li
                                            key={fav.location}
                                            className="hover:bg-gray-200"
                                            onClick={() => setSelectedLocation({ ...fav })}>
                                            {fav.location}
                                        </li>
                                    ))
                                ) : (<p className="text-gray-500">Nothing added </p>)
                            }
                        </ul>

                    </>
                </div>
            </div>
        </>
    )
}

export default FavoriteModal;
