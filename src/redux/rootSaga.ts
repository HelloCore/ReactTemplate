import { all, fork } from "redux-saga/effects";
import commonSaga from "../features/common/common.saga";

function* rootSaga() {
  // prettier-ignore
  yield all([
    fork(commonSaga)
  ]);
}

export default rootSaga;
