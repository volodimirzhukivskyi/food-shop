import Shop from "../Shop/Shop";
import ShopCart from "../ShopCart/ShopCart";
import globalStyles from "../../styles/global.module.css";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addShopsFailure,
  addShopsSuccess,
  changedCountItem,
  isLoadingFunc,
} from "../../Redux/Reducer/AppReducer/appActions";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import cn from "classnames";
import { fetchShops } from "../../helpers/https";
function App() {
  const { isLoading, shops, productsCart, error } = useSelector((store) => ({
    shops: store.shops,
    error: store.error,
    isLoading: store.isLoading,
    productsCart: store.productsCart,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoadingFunc(true));

    async function getShops() {
      try {
        const shops = await fetchShops();

        dispatch(addShopsSuccess(shops));
      } catch (e) {
        dispatch(addShopsFailure("Could not fetch expenses!"));
      }
      dispatch(isLoadingFunc(false));
    }
    getShops();
  }, []);
  const changedCardItemCount = (productId, increment = true) => {
    const productItems = productsCart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: increment ? item.count + 1 : item.count - 1,
        };
      } else {
        return item;
      }
    });
    const validateProds = productItems.filter((item) => item.count);
    dispatch(changedCountItem(validateProds));
  };
  return (
    <>
      {error && <div>{error}</div>}
      <div className={styles.wrapper}>
        <Header />
        <main className={cn(globalStyles.container, styles.main)}>
          {error && <div>{error}</div>}
          {isLoading && <div className={styles.loadingTitle}>Loading...</div>}
          {shops && !shops.length && <div>Все продали!!!</div>}
          {shops && (
            <Routes>
              <Route path={"/"} element={<Shop />} />
              <Route
                path={"/shop-cart"}
                element={
                  <ShopCart changedCardItemCount={changedCardItemCount} />
                }
              />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
