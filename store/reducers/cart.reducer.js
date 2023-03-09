import CartItem from "../../model/cartItem";
import { ADD_TO_CART } from "../action-types/cart.actions-types";

const INITIAL_STATE = {
  cartItems: [],
  totalAmount: 0,
  orders: [],
  cartItemsCount: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCartItems = [...state.cartItems];
      let updatedCartItemsCount = state.cartItemsCount;
      let updatedAmount = state.totalAmount;
      // console.log(action.payload,'ap');
      const { id, title, price, imageUrl, color } = action.payload;

      const cartItemIndex = updatedCartItems.findIndex(
        (cItem) => cItem.id === id
      );

      if (cartItemIndex >= 0) {
        updatedCartItems[cartItemIndex].quantity =
          updatedCartItems[cartItemIndex].quantity + 1;
        updatedAmount = updatedAmount + price;
      } else {
        const cartItem = new CartItem(id, title, imageUrl, price, 1, color);
        updatedCartItems = [cartItem, ...updatedCartItems];
        updatedCartItemsCount = updatedCartItemsCount + 1;
        updatedAmount = updatedAmount + price;
      }
      // console.log(updatedAmount,'ua')
      updatedCartItemsCount = updatedCartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: updatedAmount,
        cartItemsCount: updatedCartItemsCount,
      };
    // const cartItem = new CartItem()
    default:
      return state;
  }
};

export default cartReducer;
