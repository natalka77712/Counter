
import counterReducer from "./redux/counter-reducer";
import {combineReducers, createStore} from "redux";

let reducersPack = combineReducers({
    counterPage: counterReducer
});

export type RootState = ReturnType<typeof reducersPack>

let store = createStore(reducersPack);

export default store;