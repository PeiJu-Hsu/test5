import { configureStore } from "@reduxJs/toolkit";
import userSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
