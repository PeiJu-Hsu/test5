// import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setLogout } from "../redux/UserSlice";

function Login() {
  const state = useSelector((state) => state.userReducer.profile);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <div>
      <p>Name:{state.name}</p>
      <p>Age:{state.age}</p>
      <p>Email:{state.profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
