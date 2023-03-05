import { SET_USER } from "../action-types/auth.actions-types";

export const setUser = (userDetails) => {
  return {
    action:SET_USER,
    payload:userDetails
  }
}



