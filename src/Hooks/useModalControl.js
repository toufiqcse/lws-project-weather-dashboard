import { useEffect, useRef, useState } from "react";

const useModalControl = () => {
  const [modals, setModals] = useState({});

  const modalRefs = useRef({});

  const handleClickOutside = (event) => {
    Object.keys(modalRefs.current).forEach((key) => {
      if (
        modalRefs.current[key] &&
        !modalRefs.current[key].contains(event.target)
      ) {
        setModals((prev) => ({ ...prev, [key]: false })); // Close the modal if clicked outside
      }
    });
  };

  useEffect(() => {
    const anyModalOpen = Object.values(modals).some((isOpen) => isOpen);
    if (anyModalOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Add event listener when any modal is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // Remove event listener when no modals are open
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener on component unmount
    };
  }, [modals]);

  const showModal = (key) => setModals((prev) => ({ ...prev, [key]: true })); // Function to show a modal
  const hideModal = (key) => setModals((prev) => ({ ...prev, [key]: false })); // Function to hide a modal
  const setModalRef = (key, ref) => {
    modalRefs.current[key] = ref; // Set the reference for a modal
  };

  return { modals, showModal, hideModal, setModalRef };
};

export default useModalControl;
