import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/Action";

function Login() {
  const state = useSelector((state) => state.userReducer.profile);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };
  return (
    <div>
      <p>Name:{state.name}</p>
      <p>Age:{state.age}</p>
      <p>Email:{state.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
