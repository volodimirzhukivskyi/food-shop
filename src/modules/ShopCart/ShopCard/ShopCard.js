import React from "react";
import Button from "../../../components/Button/Button";
import { splitPrice } from "../../../helpers/helpers";
import { useDispatch } from "react-redux";
import { deleteFromShopping } from "../../../Redux/Reducer/AppReducer/appActions";
import styles from "./ShopCard.module.css";
import Counter from "../../../components/Counter/Counter";
const ShopCard = ({ product, changedCardItemCount }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={product.img} alt={product.name} />
      <p className={styles.title}>{product.name}</p>
      <span className={styles.price}>
        {splitPrice(product.price * product.count)} 💲
      </span>
      <Counter
        onClickPlus={() => changedCardItemCount(product.id, true)}
        onClickMinus={() => changedCardItemCount(product.id, false)}
        counter={product.count}
      />

      <Button
        className={styles.button}
        style={{ background: "#cccccc" }}
        onClick={() => dispatch(deleteFromShopping(product.id))}
      >
        X
      </Button>
    </div>
  );
};

export default ShopCard;
