import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../redux/rootReducer";
import rootSaga from "../redux/rootSaga";

const setupStore = () => {
  /* ------------- Redux Configuration ------------- */
  const middleware: any[] = [];
  const enhancers: any[] = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager
  };
};

export default setupStore;
