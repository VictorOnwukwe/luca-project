import Home from "../pages/Home";
import { connect } from "react-redux";
import style from "./index.module.scss";

const DefaultLayout = (props) => {
  switch (props.appState) {
    case "error":
      return <div>An error occured...</div>;
    default:
      return (
        <div className={`${style["default-layout"]} ${style[props.appState]}`}>
          <Home />
        </div>
      );
  }
};

export default connect((state) => ({ appState: state.app.state }))(
  DefaultLayout
);
