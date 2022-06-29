import {
  ADD_SHOPS_SUCCESS,
  ADD_PRODUCT_CART,
  ADD_SHOPS_FAILURE,
  IS_LOADING,
  CHANGED_COUNTER_ITEM,
  CLEAR_ITEM,
  DELETE_FROM_SHOPPING,
  ADD_ACTIVE_ID,
} from "./appActions";

const INITIAL_STATE = {
  shops: null,
  error: null,
  isLoading: false,
  productsCart: [],
  activeId: sessionStorage.getItem("activeId"),
};
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SHOPS_SUCCESS:
      return {
        ...state,
        error: null,
        shops: [...action.payload],
      };
    case ADD_PRODUCT_CART:
      return {
        ...state,
        productsCart: state.productsCart.find(
          (item) => item.id === action.payload.id
        )
          ? state.productsCart.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, count: item.count + 1 };
              } else {
                return item;
              }
            })
          : [...state.productsCart, { ...action.payload, count: 1 }],
      };
    case CHANGED_COUNTER_ITEM:
      return {
        ...state,
        productsCart: action.payload,
      };
    case ADD_SHOPS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ADD_ACTIVE_ID:
      return {
        ...state,
        activeId: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case DELETE_FROM_SHOPPING:
      return {
        ...state,
        productsCart: state.productsCart.filter((n) => n.id !== action.payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        productsCart: [],
      };
    default:
      return state;
  }
};
export default appReducer;
