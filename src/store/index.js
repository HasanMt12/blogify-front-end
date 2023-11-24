import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

// Retrieve user information from local storage if available
const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;

// Set the initial state with user information from local storage
const initialState = {
  user: { userInfo: userInfoFromStorage },
};

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,   // Provide the preloaded state to initialize the store with user information
});

export default store;