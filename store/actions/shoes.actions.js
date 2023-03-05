import { ADD_NOTIFICATION, ADD_SHOES_TO_LIKE, DELETE_NOTIFICATION, FETCH_SNEAKERS, SET_NOTIFICATION_TOKEN, SET_SHOES } from "../action-types/shoes.actions-types"

export const addShoeToLikes = (payload) => {
  return {
    type:ADD_SHOES_TO_LIKE,
    payload
  }
}



export const addNotification = (notificationData) => {
  return {
    type:ADD_NOTIFICATION,
    payload:notificationData,
  }
}


export const setShoes = (sneakers) => {
  return {
    type:SET_SHOES,
    payload:sneakers,
  }
}

export const setNotificationToken = (token) => {
  console.log(token,'nofication token payload');
  return {
    type:SET_NOTIFICATION_TOKEN,
    payload:token,
  }
}


export const fetchSneakers = async () => {
  return {
    type:FETCH_SNEAKERS,
  }
}


export const deleteNotification = (notificationId) => {
  // console.log(notificationId,'notiId for del');
  return {
    type:DELETE_NOTIFICATION,
    payload:notificationId
  }
}