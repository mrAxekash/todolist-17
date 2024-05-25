import { createAction } from "@reduxjs/toolkit";
import { TasksStateType } from "features/TodolistsList/tasksSlice";
import { TodolistDomainType } from "features/TodolistsList/todolistsSlice";

type ClearTasksAndTodolists = {
  tasks: TasksStateType;
  todolists: TodolistDomainType[];
};
export const clearTasksAndTodolists = createAction<ClearTasksAndTodolists>("common/clear-task-todolists");
