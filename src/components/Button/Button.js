import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

function Button(props) {
  const { backgroundColor, children, onClick, className } = props;
  return (
    <button
      className={cn(className, styles.button)}
      style={{ background: backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
