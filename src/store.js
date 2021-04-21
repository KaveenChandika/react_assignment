import {createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import questionReducer from './reducers';
const initialstate = {};

const middleware = [thunk];

const store = createStore(
    questionReducer,
    initialstate,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;