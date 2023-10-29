// import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import NotLogin from "./NotLogin";

function Profile() {
  const state = useSelector((state) => state.userReducer.profile);
  // console.log(state);
  return (
    <div>
      <h1>Profile Info</h1>
      {state.login ? <Login /> : <NotLogin />}
    </div>
  );
}

export default Profile;
