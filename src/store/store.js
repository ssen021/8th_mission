import { combineReducers, createStore } from "redux";
import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  // 다른 리듀서가 있다면 추가
});

const store = createStore(rootReducer);

export default store;
