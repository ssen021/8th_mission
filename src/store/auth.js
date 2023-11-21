// auth.js

// initialState 정의
const initialState = {
  loading: false,
  userId: "",
  userPassword: "",
};

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setUserId = (userId) => ({
  type: "SET_USER_ID",
  payload: userId,
});

export const setUserPassword = (password) => ({
  type: "SET_USER_PASSWORD",
  payload: password,
});

// authReducer를 내보냅니다.
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "SET_USER_PASSWORD":
      return {
        ...state,
        userPassword: action.payload,
      };
    default:
      return state;
  }
}
