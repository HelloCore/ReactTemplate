---
to: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name) %>.reducer.ts
---
<%
 CamelCaseName = h.changeCase.camel(name)
 PascalCaseName = h.changeCase.pascal(name)
%>
import { getType, ActionType } from "typesafe-actions";
import * as actions from "./<%= CamelCaseName %>.actions";

const initialState = {

};

type State = typeof initialState;
type Action = ActionType<typeof actions>;

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case getType(actions.sample<%= PascalCaseName %>Action):
      return {
        ...state,
      };

    default:
      return state;
  }
}

