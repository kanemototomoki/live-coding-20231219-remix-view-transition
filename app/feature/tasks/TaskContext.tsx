import React from "react";
import { Task } from "./type";

export type TaskContext = {
  tasks: Task[];
};

export const TaskContext = React.createContext<TaskContext>({
  tasks: [],
});
