import {
  
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  USER_SIGNIN,
  USER_SIGNOUT,
} from "./Actions";

export const StoreReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN: {
      localStorage.setItem("userInfo", JSON.stringify(payload));
      return { ...state, userInfo: payload };
    }
    case USER_SIGNOUT: {
      localStorage.removeItem("userInfo");
      return { ...state, userInfo: null };
    }
    case ADD_FAVOURITE: {
        console.log("add to favourites")
        const { userInfo } = state;
        const { userList } = userInfo;
        const favorites = [...userList , payload];
        localStorage.setItem("userInfo", JSON.stringify({ ...userInfo, userList: favorites }));
        return  {...state, userInfo: { ...userInfo, userList: favorites } };
    }
    case REMOVE_FAVOURITE:
    {
      console.log("remove from favourites")
      const { userInfo } = state;
      const { userList } = userInfo;
      const favorites = userList.filter(f => f._id != payload._id);
      localStorage.setItem("userInfo", JSON.stringify({ ...userInfo, userList: favorites }));
      return  {...state, userInfo: { ...userInfo, userList: favorites } };
    }
    default:
      return state;
  }
};
