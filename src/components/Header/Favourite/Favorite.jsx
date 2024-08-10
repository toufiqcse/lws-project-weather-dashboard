import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FavoriteContext, ModalContext } from '../../../context';
import FavoriteModal from '../FavoriteModal/FavoriteModal';
const Favorite = ({ onShowFavorite }) => {
  const { favorites } = useContext(FavoriteContext);
  const { modals, showModal, hideModal, setModalRef } = useContext(ModalContext)


  return (
    <>
      <div
        onClick={() => showModal(onShowFavorite)}
        className="flex justify-start items-center space-x-2 cursor-pointer"
      >
        <FaHeart className="dark:text-black text-white text-lg sm:text-base" />
        <p className="dark:text-black text-white text-lg sm:text-base">Favorite Location</p>
      </div>
      {modals[onShowFavorite] && (
        <div
          ref={(ref) => setModalRef(onShowFavorite, ref)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white dark:bg-darkBg rounded-lg shadow-lg w-full max-w-md mx-2 p-4 sm:max-w-xs">
            <FavoriteModal onClose={() => hideModal(onShowFavorite)} />
          </div>
        </div>
      )}

    </>
  )
}

export default Favorite;
