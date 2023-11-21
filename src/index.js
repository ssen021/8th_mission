import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js"; // 실제 경로는 프로젝트 구조에 따라 다를 수 있습니다.
import App from "./App"; // 또는 앱의 진입 파일 경로로 변경하세요.

// React 18에서는 createRoot를 react-dom/client에서 가져옵니다.
const { createRoot } = ReactDOM;

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
