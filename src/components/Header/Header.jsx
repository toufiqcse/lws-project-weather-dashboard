import { useContext } from 'react';
import { ModalContext } from '../../context';
import ThemeToggle from '../ThemeToggle';
import Logo from "./Logo/Logo";
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';
import SearchWeather from './SearchWeather/SearchWeather';
const Header = () => {
    // declare state for handle on Off modal
    const { showModal, setShowModal, modalRef } = useContext(ModalContext);


    return (
        <header className="w-full bg-slate-100 dark:bg-darkBg pb-4  ">
            <nav className="px-4 flex  flex-col md:flex-row items-center justify-between  py-3">
                <div className="flex w-full md:w-2/4  mb-2 md:mb-0  items-center justify-between space-x-4">
                    <Logo />
                    {/* for small device */}
                    <div className="flex space-x-8 md:hidden">
                        <button
                            className="dark:text-white text-black  rounded-lg   inline-block"

                        >
                            <ThemeToggle />
                        </button>
                        <Notification onNotificationShow="notification" />
                        <Profile onShowProfile="profile" />

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

                    >
                        <ThemeToggle />
                    </button>
                    <Notification onNotificationShow="notification" />
                    <Profile onShowProfile="profile" />
                </div>

            </nav>
        </header>
    )
}

export default Header
