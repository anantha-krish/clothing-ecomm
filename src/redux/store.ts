import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middleWare = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWare));
export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch