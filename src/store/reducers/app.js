import { SET_APP_STATE } from "../actions/types";
const initialState = {
  state: "ideal",
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_APP_STATE:
      return {
        ...state,
        state: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
