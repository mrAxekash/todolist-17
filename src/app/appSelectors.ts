import { AppRootStateType } from "app/store";

export const selectIsInitialized = (state: AppRootStateType) => {
  return state.app.isInitialized;
};

export const selectAppStatus = (state: AppRootStateType) => state.app.status;

export const selectAppError = (state: AppRootStateType) => state.app.error;
