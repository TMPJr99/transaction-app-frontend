import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    transactions: reducer,
})

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))
