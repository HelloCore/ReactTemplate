import { StateType } from "typesafe-actions";
import rootReducer from "../redux/rootReducer";

declare global {
  // eslint-disable-next-line no-undef
  type RootState = StateType<typeof rootReducer>;
}
