import { combineReducers } from "redux";
import appReducer from "./app";
import ratingReducer from "./rating";

export default combineReducers({
  app: appReducer,
  rating: ratingReducer,
});
