import styles from "./ShopCart.module.css";
import { useSelector } from "react-redux";
import FormShop from "../../components/FormShop/FormShop";
import ShopCard from "./ShopCard/ShopCard";
import { splitPrice } from "../../helpers/helpers";

const ShopCart = ({ changedCardItemCount }) => {
  const { productsCart } = useSelector((store) => ({
    productsCart: store.productsCart,
  }));
  return (
    <>
      {productsCart.length > 0 ? (
        <div className={styles.container}>
          <FormShop productsCart={productsCart} />
          <div className={styles.products}>
            {productsCart.map((product) => {
              return (
                <ShopCard
                  key={product.id}
                  product={product}
                  changedCardItemCount={changedCardItemCount}
                />
              );
            })}
          </div>

          <p className={styles.totalPrice}>
            Total:
            <span className={styles.span}>
              {splitPrice(
                productsCart.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.count * +currentValue.price,
                  0
                )
              )}
            </span>
          </p>
        </div>
      ) : (
        <div className={styles.title}>Пока в Корзине нет товаров...</div>
      )}
    </>
  );
};
export default ShopCart;
