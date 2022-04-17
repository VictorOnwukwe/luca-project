import { SET_APP_STATE, SET_RATING_RESULT } from "./types";
export const evaluateRating = (groups) => (dispatch) => {
  try {
    dispatch({ type: SET_APP_STATE, payload: "loading" });
    setTimeout(() => {
      let criteriaLength = 0;
      const result = groups.reduce((prev, curr) => {
        return (
          prev +
          curr.criteria.reduce((pre, cur) => {
            if (cur.rating) criteriaLength++;
            return pre + cur.rating;
          }, 0)
        );
      }, 0);
      dispatch({
        type: SET_RATING_RESULT,
        payload: (result / criteriaLength).toFixed(2),
      });
      dispatch({ type: SET_APP_STATE, payload: "ideal" });
    }, 3000);
  } catch (err) {
    dispatch({ type: SET_APP_STATE, payload: "error" });
  }
};
export const clearRating = () => (dispatch) => {
  dispatch({
    type: SET_RATING_RESULT,
    payload: null,
  });
};
