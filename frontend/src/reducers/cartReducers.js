import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (element) => element.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((element) =>
            element.product === existItem.product ? item : element
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (element) => element.product !== action.payload
        ),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };

    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    default:
      return state;
  }
};
