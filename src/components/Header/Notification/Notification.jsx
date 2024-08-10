import { useContext } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { ModalContext } from '../../../context';
import NotificationModal from '../NotificationModal/NotificationModal';
function Notification({ onNotificationShow }) {
    const { modals, toggleModal, setModalRef, hideModal, showModal } = useContext(ModalContext)

    return (

        <>
            <button
                onClick={() => toggleModal(onNotificationShow)}
                className="relative border-2 border-gray-500 rounded-full p-3"
            >
                <MdNotificationsNone className="dark:text-white text-black text-xl" />
            </button>
            {modals[onNotificationShow] && (
                <div
                    ref={(ref) => setModalRef(onNotificationShow, ref)}
                    className="absolute top-16 right-2 flex items-center justify-center bg-black bg-opacity-50 z-50"
                >
                    <NotificationModal onClose={() => hideModal(onNotificationShow)} />
                </div>
            )}



        </>
    )
}

export default Notification