import { ADD_SHOES_TO_LIKE } from "../action-types/shoes.actions-types"

export const addShoeToLikes = (payload) => {
  return {
    type:ADD_SHOES_TO_LIKE,
    payload
  }
}