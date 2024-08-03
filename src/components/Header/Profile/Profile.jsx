import { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { ModalContext } from '../../../context';
import ProfileModal from '../ProfileModal/ProfileModal';
function Profile({ onShowProfile }) {
    const { modals, showModal, hideModal, setModalRef } = useContext(ModalContext)
    return (
        <>
            <button
                onClick={() => showModal(onShowProfile)}
                className="relative border-2 border-gray-500 rounded-full p-3"
            >
                <FaUser className="dark:text-white text-black text-xl" />
            </button>
            {modals[onShowProfile] && (
                <div
                    ref={(ref) => setModalRef(onShowProfile, ref)}
                    className="absolute top-16 right-2 flex items-center justify-center bg-black bg-opacity-50 z-50"
                >
                    <ProfileModal onClose={() => hideModal(onShowProfile)} />
                </div>
            )}
        </>
    )
}

export default Profile