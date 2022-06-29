import React from "react";
import Button from "../../../components/Button/Button";
import { splitPrice } from "../../../helpers/helpers";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../../Redux/Reducer/AppReducer/appActions";
import styles from "./CardProduct.module.css";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img className={styles.img} src={product.img} alt={product.name} />

        <div className={styles.infoWrapper}>
          <p className={styles.title}>{product.name}</p>
          <span className={styles.price}>{splitPrice(product.price)} 💲</span>
          <Button
            className={styles.button}
            style={{ background: "#cccccc" }}
            onClick={() => dispatch(addProductCart(product))}
          >
            in Сart
          </Button>
        </div>
      </div>
      <p className={styles.hideBlock}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        cumque cupiditate ipsam natus nisi placeat possimus quas quasi
        repudiandae temporibus!`
      </p>
    </div>
  );
};

export default ProductCard;
