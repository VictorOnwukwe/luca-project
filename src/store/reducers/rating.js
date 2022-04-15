import { SET_RATING_RESULT } from "../actions/types";
const ratingReducer = (state = { result: null }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_RATING_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
};

export default ratingReducer;
