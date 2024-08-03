import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FavoriteContext, ModalContext } from '../../../context';
import FavoriteModal from '../FavoriteModal/FavoriteModal';
const Favorite = ({ onShowFavorite }) => {
  const { favorites } = useContext(FavoriteContext);
  const { modals, showModal, hideModal, setModalRef } = useContext(ModalContext)


  return (
    <>
      <div onClick={() => showModal(onShowFavorite)} className="flex justify-start items-center space-x-2">
        <FaHeart className="dark:text-black text-white" />
        <p className="dark:text-black text-white">Favorite Location</p>
      </div>
      {modals[onShowFavorite] && (
        <div ref={(ref) => setModalRef(onShowFavorite, ref)}>
          <FavoriteModal onClose={() => hideModal(onShowFavorite)} />
        </div>
      )}
    </>
  )
}

export default Favorite;
