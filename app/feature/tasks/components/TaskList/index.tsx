import { FC } from "react";
import { Task } from "../../type";
import { TaskItem } from "../TaskItem";
import { Row, Col, Card } from "antd";

type Props = {
  tasks: Task[];
};

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <Row gutter={[8, 16]}>
      {tasks.map((task) => {
        return (
          <Col span={8} key={task.id}>
            <Card bordered hoverable>
              <TaskItem task={task} key={task.id} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
