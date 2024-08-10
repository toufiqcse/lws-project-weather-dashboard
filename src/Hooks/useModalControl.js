import { useCallback, useEffect, useRef, useState } from "react";

const useModalControl = () => {
  const [modals, setModals] = useState({});
  console.log(modals, "modals");

  const modalRefs = useRef({});

  const handleClickOutside = useCallback(
    (event) => {
      let shouldUpdate = false;
      const newModals = { ...modals };

      Object.keys(modalRefs.current).forEach((key) => {
        if (
          modalRefs.current[key] &&
          !modalRefs.current[key].contains(event.target) &&
          modals[key]
        ) {
          newModals[key] = false; // Close the modal if clicked outside
          shouldUpdate = true;
        }
      });

      if (shouldUpdate) {
        setModals(newModals);
      }
    },
    [modals]
  );

  useEffect(() => {
    const anyModalOpen = Object.values(modals).some((isOpen) => isOpen);

    if (anyModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modals, handleClickOutside]);

  const toggleModal = useCallback((key) => {
    setModals((prev) => {
      const isOpen = prev[key];
      if (isOpen) {
        return { ...prev, [key]: false }; // Close the modal if it is open
      } else {
        return { ...prev, [key]: true }; // Open the modal if it is closed
      }
    });
    console.log("Modal toggled");
  }, []);

  const showModal = useCallback((key) => {
    setModals((prev) => ({ ...prev, [key]: true }));
    console.log("Modal shown");
  }, []);

  const hideModal = useCallback((key) => {
    setModals((prev) => ({ ...prev, [key]: false }));
    console.log("Modal closed");
  }, []);

  const setModalRef = useCallback((key, ref) => {
    modalRefs.current[key] = ref;
  }, []);

  return { modals, showModal, hideModal, toggleModal, setModalRef };
};

export default useModalControl;
