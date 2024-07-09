import { ModalContext } from "../context";
import useModalControl from "../Hooks/useModalControl";


function ModalProvider({ children }) {
    const { showModal, setShowModal, modalRef } = useModalControl();
    return (

        <ModalContext.Provider value={{ showModal, setShowModal, modalRef }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider