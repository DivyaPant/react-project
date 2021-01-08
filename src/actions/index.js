import axios from "axios";

//Action Creators for calling data and dispatching it to reducers
//Using npm Axios for API call
export function getRecipe(i, q) {
  console.log(i);
  console.log(q);
  return (dispatch) => {
    return axios
      .get(`http://www.recipepuppy.com/api/?i=${i}&q=${q}`) //Api url
      .then((response) => {
        dispatch(showRecipe(response.data.results));
      });
  };
}

export function showRecipe(result) {
  return {
    type: "FETCH_DATA",
    result: result,
  };
}
