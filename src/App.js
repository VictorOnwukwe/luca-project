import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
