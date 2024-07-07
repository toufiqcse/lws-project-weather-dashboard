import { useState } from 'react'
import FavoriteModal from "./FavoriteModal/FavoriteModal"
import Favorite from "./Favourite/Favorite"
import Logo from "./Logo/Logo"
import SearchWeather from "./SearchWeather/SearchWeather"

const Header = () => {
    // declare state for handle on Off modal
    const [showFavModal, setShowFavModal] = useState(false);
    return (
        <header className="md:fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex flex-col md:flex-row items-center justify-between py-6">
                <Logo />
                <div className="flex items-center gap-2 md:gap-4 relative mt-2 md:mt-0">
                    <SearchWeather />
                    <Favorite onShow={() => setShowFavModal(!showFavModal)} />
                    {showFavModal && <FavoriteModal />}
                </div>
            </nav>
        </header>
    )
}

export default Header
