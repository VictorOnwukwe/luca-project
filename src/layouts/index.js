import Home from "../pages/Home";
import { connect } from "react-redux";

const DefaultLayout = (props) => {
  switch (props.appState) {
    case "ideal":
      return <Home />;
    case "loading":
      return <div>Loading...</div>;
    case "error":
      return <div>An error occured...</div>;
    default:
      return <Home />;
  }
};

export default connect((state) => ({ appState: state.app.state }))(
  DefaultLayout
);
