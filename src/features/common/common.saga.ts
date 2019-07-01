import { take } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as actions from "./common.actions";

function* commonSaga() {
  while (true) {
    yield take(getType(actions.sampleCommonAction));
  }
}

export default commonSaga;
