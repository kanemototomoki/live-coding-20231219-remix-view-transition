import { TaskForm, TaskList } from "~/feature/tasks/components";
import { Col, Row } from "antd";
import { useTaskContext } from "~/feature/tasks/useTaskContext";

export default function Index() {
  const { tasks } = useTaskContext();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Row>
        <Col span={6}>
          <TaskForm />
        </Col>
        <Col span={18}>
          <TaskList tasks={tasks} />
        </Col>
      </Row>
    </div>
  );
}
