import { SELECT_ALL, SELECT_ONE, DELETE_TRANSACTION, ADD_TRANSACTION, LOGIN, ADD_USER } from './actions'

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ALL:
            return [...action.payload];
        case SELECT_ONE:
            return [...action.payload];
        case DELETE_TRANSACTION:
            return state.filter(transaction => transaction.id !== action.payload);
        case ADD_TRANSACTION:
            return [...state, action.payload];
        case LOGIN:
            return [...state];
        case ADD_USER:
            return [...state];
        default:
            return state;
    }
}
