import { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { ModalContext } from '../../context';
import Logo from "./Logo/Logo";
import SearchWeather from './SearchWeather/SearchWeather';
const Header = () => {
    // declare state for handle on Off modal
    const { showModal, setShowModal, modalRef } = useContext(ModalContext);

    return (
        <header className="w-full bg-black  pb-4 border-b border-gray-800 ">
            <nav className="px-4 flex flex-col md:flex-row items-center justify-between  py-3">
                <div className="flex justify-between items-center space-x-4">
                    <Logo />
                </div>
                <div className="w-2/4">
                    <SearchWeather />
                </div>
                <div className="flex space-x-8">
                    <button className="text-3xl text-white">
                        <IoIosSunny />
                        {/* <FaMoon/> */}
                    </button>
                    <button className="text-3xl text-white">
                        <MdNotificationsNone />
                    </button>
                    <button className="border-2 border-green-300 p-3 rounded-full">
                        <FaUser className="text-2xl text-white" />
                    </button>

                    {/* <Favorite onShow={() => setShowModal(!showModal)} />
                    {showModal && (
                        <div ref={modalRef}>
                            <FavoriteModal />
                        </div>
                    )} */}
                </div>

            </nav>
        </header>
    )
}

export default Header
