export const ADD_SHOPS_FAILURE = "ADD_PRODUCT_FAILURE";
export const ADD_SHOPS_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const IS_LOADING = "IS_LOADING";
export const ADD_PRODUCT_CART = "ADD_SHOPPING_CART";
export const DELETE_FROM_SHOPPING = "DELETE_FROM_SHOPPING";
export const CHANGED_COUNTER_ITEM = "CHANGED_COUNTER";
export const CLEAR_ITEM = "CLEAR_ITEM";
export const ADD_ACTIVE_ID = "ADD_ACTIVE_ID";
export const addShopsFailure = (error) => ({
  type: ADD_SHOPS_FAILURE,
  payload: {
    error,
  },
});
export const addActiveId = (id) => ({
  type: ADD_ACTIVE_ID,
  payload: id,
});
export const addShopsSuccess = (payload) => ({
  type: ADD_SHOPS_SUCCESS,
  payload: payload,
});
export const isLoadingFunc = (payload) => ({
  type: IS_LOADING,
  payload: payload,
});
export const addProductCart = (prodCard) => ({
  type: ADD_PRODUCT_CART,
  payload: prodCard,
});
export const changedCountItem = (filterArr) => ({
  type: CHANGED_COUNTER_ITEM,
  payload: filterArr,
});
export const clearItem = () => ({
  type: CLEAR_ITEM,
});

export const deleteFromShopping = (itemId) => ({
  type: DELETE_FROM_SHOPPING,
  payload: itemId,
});
