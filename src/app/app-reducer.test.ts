import { appActions, appSlice, AppState } from "app/appSlice";

let startState: AppState;

beforeEach(() => {
  startState = {
    error: null,
    status: "idle",
    isInitialized: false,
  };
});

test("correct error message should be set", () => {
  const endState = appSlice(startState, appActions.setAppError({ error: "some error" }));
  expect(endState.error).toBe("some error");
});

test("correct status should be set", () => {
  const endState = appSlice(startState, appActions.setAppStatus({ status: "loading" }));
  expect(endState.status).toBe("loading");
});
