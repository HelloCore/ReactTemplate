import { createStandardAction } from "typesafe-actions";

export const sampleCommonAction = createStandardAction("SAMPLE_COMMON_ACTION")<
  void
>();
