import {combineReducers} from "redux";
import booksReducer from "./books/redux";

const rootReducer = combineReducers({
    books: booksReducer,
});

export default rootReducer
