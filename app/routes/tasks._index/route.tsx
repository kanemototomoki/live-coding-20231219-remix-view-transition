import { TaskForm, TaskList } from "~/feature/tasks/components";
import { Col, Row } from "antd";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Row>
        <Col span={6}>
          <TaskForm />
        </Col>
        <Col span={18}>
          <TaskList />
        </Col>
      </Row>
    </div>
  );
}
