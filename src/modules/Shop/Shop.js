import styles from "./Shop.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./CardProduct/CardProduct";
import cn from "classnames";
import {
  addActiveId,
  clearItem,
} from "../../Redux/Reducer/AppReducer/appActions";

const Shop = () => {
  const { shops, activeId } = useSelector((store) => ({
    shops: store.shops,
    activeId: store.activeId,
  }));
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={cn(styles.buttons)}>
        {!activeId ? (
          <>
            <h2 className={styles.buttonsTitle}>Choose a store </h2>
            {shops.map((shop) => (
              <Button
                onClick={() => {
                  if (!activeId) {
                    dispatch(addActiveId(shop.id));
                    sessionStorage.setItem("activeId", shop.id);
                  }
                }}
                backgroundColor={
                  shop.id === activeId
                    ? "var(--primary-hover)"
                    : "var(--primary)"
                }
                key={shop.id}
              >
                {shop.name}
              </Button>
            ))}
          </>
        ) : (
          <Button
            onClick={() => {
              dispatch(clearItem());
              dispatch(addActiveId(null));
              sessionStorage.removeItem("activeId");
            }}
            backgroundColor={"red"}
          >
            Сhange store
          </Button>
        )}
      </div>
      <div className={styles.products}>
        {activeId &&
          shops
            .find((item) => item.id === activeId)
            .products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
export default Shop;
