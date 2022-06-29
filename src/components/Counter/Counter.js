import React from "react";
import styles from "./Counter.module.css";

const Counter = (props) => {
  const { onClickPlus, onClickMinus, counter } = props;
  return (
    <div className={styles.counterWrapper}>
      <button onClick={onClickPlus}>+</button>
      <p>{counter}</p>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
export default Counter;
