import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleWare = createSagaMiddleware();
const middleWare: any = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleWare.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
