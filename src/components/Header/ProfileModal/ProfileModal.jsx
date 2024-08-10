import { FaHeart } from "react-icons/fa";
import Favorite from "../Favourite/Favorite";
function ProfileModal({ onClose }) {
    return (
        <>
            <div className="flex items-center justify-center dark:bg-white bg-darkBg  fade-in w-[300px]">
                <div className=" rounded-sm shadow-lg w-full max-w-lg px-3 py-2 space-y-2">
                    <div className="flex justify-between items-center space-x-6">
                        <h2 className="text-xl font-semibold dark:text-gray-800 text-white">Settings</h2>
                        <button onClick={onClose} className="font-semibold text-3xl text-red-600 hover:text-red-600" >&times;</button>
                    </div>
                    <hr />
                    <>
                        <ul className="">
                            <li className="flex space-x-2  justify-start items-center dark:hover:bg-gray-200 hover:bg-gray-400 cursor-pointer select-none py-2 px-2 ">
                                <FaHeart className="dark:text-black text-white" />
                                <p className="dark:text-black text-white">Appearance</p>
                            </li>
                            <li className="  cursor-pointer  py-2 px-2 dark:hover:bg-gray-200 hover:bg-gray-400">
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