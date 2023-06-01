import "./index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={Body} />
      </Provider>
    </div>
  );
}

export default App;
