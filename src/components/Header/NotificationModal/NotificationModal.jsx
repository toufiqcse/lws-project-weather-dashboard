import { FaHeart } from "react-icons/fa";

function NotificationModal({ onClose }) {
    return (
        <>
            <div className="flex items-center justify-center bg-black bg-opacity-50 fade-in w-[300px]">
                <div className="dark:bg-white bg-darkBg rounded-sm shadow-lg w-full max-w-lg px-3 py-2 space-y-2">
                    <div className="flex justify-between items-center space-x-6">
                        <h2 className="text-xl font-semibold dark:text-gray-800 text-gray-100">Notifications</h2>
                        <button onClick={onClose} className="font-semibold text-3xl text-red-600 hover:text-red-600" >&times;</button>
                    </div>
                    <hr />
                    <>
                        <ul className="">
                            <li className="flex space-x-2  justify-start items-center dark:hover:bg-gray-200 hover:bg-gray-400 cursor-pointer select-none py-2 px-2 ">
                                <FaHeart className="dark:text-black text-white" />
                                <p className="dark:text-black text-white">UpComing </p>
                            </li>
                            {/* --------- */}
                            <li className="flex space-x-2  justify-start items-center dark:hover:bg-gray-200 hover:bg-gray-400 cursor-pointer select-none py-2 px-2 ">
                                <FaHeart className="dark:text-black text-white" />
                                <p className="dark:text-black text-white">Set Dark Mode</p>
                            </li>
                        </ul>

                    </>
                </div>
            </div>
        </>
    )
}

export default NotificationModal;