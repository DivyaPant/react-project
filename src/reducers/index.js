//Defining default state for Reducers
let defaultState = {
  result: "",
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "FETCH_DATA") {
    return {
      ...state,
      result: action.result,
    };
  } else {
    return {
      ...state,
    };
  }
};
export default mainReducer;
