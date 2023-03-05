import sneakers from "../../data/sneakers";
import Notification from "../../model/notification";

import {
  ADD_NOTIFICATION,
  ADD_SHOES_TO_LIKE,
  DELETE_NOTIFICATION,
  FETCH_SNEAKERS,
  SET_NOTIFICATION_TOKEN,
  SET_SHOES,
} from "../action-types/shoes.actions-types";

const INITIAL_STATE = {
  shoes: sneakers,
  likes: [],
  notifications: [],
  notificationToken: "",
};

const shoesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SNEAKERS:
      return {
        ...state,
      };
    case SET_SHOES:
      const shoes = action.payload;
      return {
        ...state,
        shoes,
      };
    case ADD_SHOES_TO_LIKE:
      const shoe = action.payload;
      let updatedShoes = [...state.shoes];
      let updatedLikes = [...state.likes];

      const sneakerIndex = updatedLikes.findIndex((s) => s.id === shoe.id);
      const updatedShoeIndex = updatedShoes.findIndex((s) => s.id === shoe.id);

      if (sneakerIndex >= 0) {
        shoe.liked = false;
        updatedLikes = updatedLikes.filter((item) => item.id !== shoe.id);
        updatedShoes[updatedShoeIndex] = shoe;
      } else {
        shoe.liked = true;
        updatedShoes[updatedShoeIndex] = shoe;
        updatedLikes = [shoe, ...updatedLikes];
      }

      return {
        ...state,
        likes: updatedLikes,
        shoes: updatedShoes,
      };

    case ADD_NOTIFICATION:
      const { id, title, body } = action.payload;
      const notification = new Notification(id, title, body);
      const updatedNotifications = [notification, ...state.notifications];
      return {
        ...state,
        notifications: updatedNotifications,
      };
    case DELETE_NOTIFICATION: 
    const notificationId = action.payload;
    const newNotifications = [...state.notifications].filter((notification) => notification.id !== notificationId);
    return {
      ...state,
      notifications:newNotifications,
    }
    case SET_NOTIFICATION_TOKEN:
      const notificationToken = action.payload;
      return {
        ...state,
        notificationToken,
      };
    default:
      return state;
  }
};

export default shoesReducer;
