import { useContext } from 'react';
import { FaMoon, FaUser } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { ModalContext, ThemeContext } from '../../context';
import Logo from "./Logo/Logo";
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';
import SearchWeather from './SearchWeather/SearchWeather';
const Header = () => {
    // declare state for handle on Off modal
    const { showModal, setShowModal, modalRef } = useContext(ModalContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <header className="w-full   dark:bg-white bg-black pb-4 dark:border-gray-400 border-gray-800 ">
            <nav className="px-4 flex  flex-col md:flex-row items-center justify-between  py-3">
                <div className="flex w-full md:w-2/4  mb-2 md:mb-0  items-center justify-between space-x-4">
                    <Logo />
                    {/* for small device */}
                    <div className="flex space-x-8 md:hidden">
                        <button
                            className="dark:text-white text-black  rounded-lg   inline-block"
                            onClick={() => setDarkMode(darkMode => !darkMode)}
                        >
                            {
                                darkMode ? <IoIosSunny /> : <FaMoon />
                            }
                        </button>
                        <button className="text-3xl text-white  dark:text-black">
                            <MdNotificationsNone />
                        </button>
                        <button className="border-2 border-green-300 p-3 rounded-full">
                            <FaUser className="text-2xl dark:text-white text-black " />
                        </button>

                        {/* <Favorite onShow={() => setShowModal(!showModal)} />
                    {showModal && (
                        <div ref={modalRef}>
                            <FavoriteModal />
                        </div>
                    )} */}
                    </div>
                </div>
                {/* search input */}
                <div className="md:w-2/4 w-full py-2 md:py-0 md:mr-6">
                    <SearchWeather />
                </div>

                <div className="md:flex space-x-8 hidden">
                    <button
                        className="text-white  rounded-lg   inline-block"
                        onClick={() => setDarkMode(darkMode => !darkMode)}
                    >
                        {
                            darkMode ? <IoIosSunny /> : <FaMoon />
                        }
                    </button>
                    <Notification onNotificationShow="notification" />
                    <Profile onShowProfile="profile" />
                </div>

            </nav>
        </header>
    )
}

export default Header
