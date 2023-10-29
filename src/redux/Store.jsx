import { configureStore } from "@reduxJs/toolkit";
import userReducer from "./reducers/User";

const store = configureStore({
  reducer: {
    // user: userSlice,
    userReducer,
  },
});

export default store;
