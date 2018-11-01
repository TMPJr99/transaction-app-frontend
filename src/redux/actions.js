import axios from "axios";

export const SELECT_ALL = "SELECT_ALL";
export const SELECT_ONE = "SELECT_ONE";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const LOGIN = "LOGIN";
export const ADD_USER = "ADD_USER";
export const EDIT_TRANSACTION = "EDIT_TRANSACTION";


const token;

const config = {
  headers: {'token': token}
}

export const login = (user) => {
  axios.post("http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/users/login", user)
  .then(response => {
    token = response.data.token;
    return dispatch({
      type: LOGIN,
      payload: response.data.token
    })
  })
}

export const register = (newUser) => {
  axios.post("http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/users/new", newUser)
  .then(response => {
    token = response.data.token;
    return dispatch({
      type: ADD_USER,
      payload: response.data
    })
  })
}


export const selectAll = () => {
  return dispatch => {
    axios.get("http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/transactions", config)
      .then(response => {
        return dispatch({
          type: SELECT_ALL,
          payload: response.data
        })
      })
  }
}

export const selectOne = (id) => {
  return dispatch => {
    axios.get(`http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/transactions/${id}`, config)
      .then(response => {
        return dispatch({
          type: SELECT_ONE,
          payload: response.data[0]
        })
      })
  }
}

export const addTransaction = (newTransaction) => {
  axios.post("http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/transactions/new", newTransaction)
  .then(response => {
    token = response.data.token;
    return dispatch({
      type: ADD_TRANSACTION,
      payload: response.data
    })
  })
}


export const deleteTransaction = (id) => {
  return dispatch => {
    axios.delete(`http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/transactions/${id}`, config)
      .then(response => {
        return dispatch({
          type: DELETE_TRANSACTION,
          payload: id
        })
      })
  }
}

export const editTransaction = (editedTransaction) => {
  return dispatch => {
    axios.patch(`http://ec2-18-223-155-83.us-east-2.compute.amazonaws.com/transactions/update/${editedTransaction.id}`, editTransaction, config)
      .then(response => {
        return dispatch({
          type: EDIT_TRANSACTION,
          payload: response.data[0]
        })
      })
  }
}
