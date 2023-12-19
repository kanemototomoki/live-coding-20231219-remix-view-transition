import { FC } from "react";

import { Image } from "antd";
import { useTaskContext } from "../../useTaskContext";
import { useParams } from "@remix-run/react";

export const TaskDetail: FC = () => {
  const { taskId } = useParams();
  const { tasks } = useTaskContext();
  const task = tasks.find((task) => task.id === Number(taskId));

  console.log(task);

  return (
    <>
      {task ? (
        <>
          <h1>{task.title}</h1>
          <p>{task.id}</p>
          <Image
            width={200}
            src={task.thumbnailUrl}
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
            }}
          />
        </>
      ) : (
        <h1>Task not found</h1>
      )}
    </>
  );
};
