import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalWrapper({ children, isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const myStyles = {
    content: {
      background: "#EFEFEFD9",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      padding: "2rem",
      height: "fit-content",
      border: "none",
      minWidth: "300px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        style={myStyles}
      >
        {children}
      </Modal>
    </div>
  );
}
