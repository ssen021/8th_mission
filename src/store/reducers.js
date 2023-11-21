const initialState = {
  isLoggedIn: false,
  userInfo: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
