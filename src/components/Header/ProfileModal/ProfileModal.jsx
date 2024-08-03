import { FaHeart } from "react-icons/fa";
import Favorite from "../Favourite/Favorite";
function ProfileModal({ onClose }) {
    return (
        <>
            <div className="flex items-center justify-center bg-black bg-opacity-50 fade-in w-[300px]">
                <div className="bg-white rounded-sm shadow-lg w-full max-w-lg px-3 py-2 space-y-2">
                    <div className="flex justify-between items-center space-x-6">
                        <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
                        <button onClick={onClose} className="font-semibold text-3xl text-red-600 hover:text-red-600" >&times;</button>
                    </div>
                    <hr />
                    <>
                        <ul className="">
                            <li className="flex space-x-2  justify-start items-center hover:bg-gray-200 cursor-pointer select-none py-2 px-2 ">
                                <FaHeart className="" />
                                <p className="">Appearance</p>
                            </li>
                            <li className=" hover:bg-gray-200 cursor-pointer select-none py-2 px-2">
                                <Favorite onShowFavorite="favorite" />
                            </li>
                        </ul>

                    </>
                </div>
            </div>
        </>
    )
}

export default ProfileModal