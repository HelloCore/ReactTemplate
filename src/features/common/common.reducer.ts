import { getType, ActionType } from "typesafe-actions";
import * as actions from "./common.actions";

const initialState = {
  text: "Hello 1"
};

type State = typeof initialState;
type Action = ActionType<typeof actions>;

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case getType(actions.sampleCommonAction):
      return {
        ...state
      };

    default:
      return state;
  }
}
