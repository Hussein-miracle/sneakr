import { ADD_TO_CART } from "../action-types/cart.actions-types"

export const addToCart = (item) => {
  // console.log(item,'item to add ot cart')
  return {
    type: ADD_TO_CART,
    payload:item,
  }
}