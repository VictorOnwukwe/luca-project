import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import Layouts from "./layouts";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layouts />
      </Provider>
    </div>
  );
}

export default App;
