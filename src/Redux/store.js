import { applyMiddleware, compose, createStore }  from "redux";
import { ROOT_REDUCER } from "./Reducers/root";
import { thunk } from 'redux-thunk';

const COMPOSED_MIDDLEWARE = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default createStore(ROOT_REDUCER, COMPOSED_MIDDLEWARE);