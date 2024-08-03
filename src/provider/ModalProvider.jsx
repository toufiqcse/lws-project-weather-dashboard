import { ModalContext } from "../context";
import useModalControl from "../Hooks/useModalControl";


function ModalProvider({ children }) {
    const { modals, showModal, hideModal, setModalRef } = useModalControl();
    return (

        <ModalContext.Provider value={{ modals, showModal, hideModal, setModalRef }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider