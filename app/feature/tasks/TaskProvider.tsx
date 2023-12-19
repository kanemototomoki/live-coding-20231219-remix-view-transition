import { FC, ReactNode, useMemo, useState } from "react";
import { Task } from "./type";
import { TaskContext } from "./TaskContext";

type Props = {
  children: ReactNode;
};
export const TaskProvider: FC<Props> = ({ children }) => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      isDone: false,
      thumbnailUrl: "/images/cat-1.jpg",
    },
    {
      id: 2,
      title: "Task 2",
      isDone: false,
      thumbnailUrl: "/images/cat-2.jpg",
    },
    {
      id: 3,
      title: "Task 3",
      isDone: false,
      thumbnailUrl: "/images/cat-3.jpg",
    },
    {
      id: 4,
      title: "Task 4",
      isDone: false,
      thumbnailUrl: "/images/cat-4.jpg",
    },
    {
      id: 5,
      title: "Task 5",
      isDone: false,
      thumbnailUrl: "/images/cat-5.jpg",
    },
  ]);

  const value = useMemo(() => {
    return {
      tasks,
    };
  }, [tasks]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
