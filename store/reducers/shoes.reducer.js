import sneakers from "../../data/sneakers";
import { ADD_SHOES_TO_LIKE } from "../action-types/shoes.actions-types";


const INITIAL_STATE = {
  shoes:sneakers,
  likes:[],
}


const shoesReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    case ADD_SHOES_TO_LIKE:
      const shoe = action.payload;
      const oldLikes = state.likes;
      const index = oldLikes.findIndex((s) => s.id === shoe.id);
      if(index < 0){
        oldLikes.push(shoe);
      }
      return {
        ...state,
        likes:oldLikes,
      }
    default:
      return state;
  }
}


export default shoesReducer;
