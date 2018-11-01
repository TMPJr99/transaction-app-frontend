import axios from "axios";

export const SELECT_ALL = "SELECT_ALL";
export const SELECT_ONE = "SELECT_ONE";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";

export const selectAll = (newTransaction) => {
  return dispatch => {
    axios.get("http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/transactions")
      .then(response => {
        return dispatch({
          type: SELECT_ALL,
          payload: response.data
        })
      })
  }
}
