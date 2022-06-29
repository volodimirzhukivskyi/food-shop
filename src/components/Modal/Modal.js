import React from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";
import stylesButton from "../Button/Button.module.css";
function Modal(props) {
  const { header, closeButton, text, actions, click } = props;
  return (
    <div className={styles.container} onClick={click}>
      <div
        className={styles.modalWindow}
        tabIndex="1"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalHeader}>
          <h2>{header}</h2>
          {closeButton && (
            <Button
              className={stylesButton.closeButtonModal}
              backgroundColor={"none"}
              text={"X"}
              onClick={click}
            />
          )}
        </div>
        <p className={styles.modalContent}>{text}</p>
        {actions}
      </div>
    </div>
  );
}

export default Modal;
