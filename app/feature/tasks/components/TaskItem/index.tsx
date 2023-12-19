import { FC } from "react";
import { Task } from "../../type";
import { Image } from "antd";
import { NavLink } from "@remix-run/react";

type Props = {
  task: Task;
};

export const TaskItem: FC<Props> = ({ task }) => {
  return (
    <div>
      <NavLink to={`/tasks/${task.id}`}>
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
      </NavLink>
    </div>
  );
};
