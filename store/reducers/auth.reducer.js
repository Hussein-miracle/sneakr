import { SET_USER } from "../action-types/auth.actions-types";

const INITIAL_STATE = {
  user:{
    name:'Abdullahi',
    first_name:'Abdullahi',
    last_name:'Hussein',
    email:'miraacle64@gmail.com'
  }
}


const authReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    case SET_USER:
      const user = action.payload;
      return {
        ...state,
        user,
      }
    default:
      return state;
  }
}


export default authReducer;
