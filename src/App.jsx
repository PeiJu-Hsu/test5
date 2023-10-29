import { Provider } from "react-redux";
import Profile from "./components/Profile";
import store from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Profile />
      </Provider>
    </>
  );
}

export default App;
