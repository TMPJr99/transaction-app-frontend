import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import logger from "redux-logger";

let middleware = [thunk, logger];

const rootReducer = combineReducers({
    transactions: reducer,
})

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
