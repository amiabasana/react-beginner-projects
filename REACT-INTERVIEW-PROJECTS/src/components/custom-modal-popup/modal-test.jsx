import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>
        Open Modal Popup
        {showModalPopup && (
          <Modal
            id={"custom-id"}
            header={"Customized Header"}
            body={<div>Customized body</div>}
            footer={"Customized Footer"}
            onClose={onClose}
          />
        )}
      </button>
    </div>
  );
}
