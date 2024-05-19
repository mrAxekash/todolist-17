import { todolistsReducer } from "features/TodolistsList/todolistsSlice";
import { combineReducers } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { appSlice } from "app/appSlice";
import { authSlice } from "features/Login/authSlice";
import { configureStore, UnknownAction } from "@reduxjs/toolkit";
import { tasksReducer } from "features/TodolistsList/tasks-reducer";

// ❗старая запись, с новыми версиями не работает
//  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appSlice,
    auth: authSlice,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;

// ❗ UnknownAction вместо AnyAction
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, UnknownAction>;

// export type AppDispatch = typeof store.dispatch
// ❗ UnknownAction вместо AnyAction
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, UnknownAction>;
