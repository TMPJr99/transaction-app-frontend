import { SELECT_ALL, SELECT_ONE, DELETE_TRANSACTION, ADD_TRANSACTION } from './actions'

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
        default:
            return state;
    }
}
