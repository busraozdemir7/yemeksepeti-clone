import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer"
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    product: productReducer,
    restaurant: restaurantReducer,
});

// applyMiddleware herhangi bir arayazılımı redux'a dahil etmeye yarar. Biz burada thunk arayazılımını dahil etmek için kullandık. Artık thunk'ın a senkron aksiyonlarını yazabileceğiz.
export default createStore(rootReducer, applyMiddleware(thunk));