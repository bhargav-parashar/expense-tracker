import React, { Children } from "react";
import AddBalance from "../Modals/AddBalance";
import AddExpense from "../Modals/AddExpense";
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
