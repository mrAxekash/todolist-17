import { AppRootStateType } from "app/store";

export const selectSetIsLoggedIn = (store: AppRootStateType) => store.auth.isLoggedIn;
