// import create store
import { createStore, applyMiddleware, compose } from "redux";

//import rootreducer
import rootReducer from "../reducers";

//thunk
import thunk from "redux-thunk";

//create store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//exportation
export default store;
