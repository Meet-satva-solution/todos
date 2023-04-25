import React from "react";
import { Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export const TodoItem = ({ todo, onDelete }) => {
  const genExtra = () => (
    <DeleteOutlined
      onClick={(event) => {
        onDelete(todo);
        event.stopPropagation();
      }}
    />
  );
  return (
    <Collapse accordion>
      <Panel header={todo.title} extra={genExtra()}>
        <p>{todo.desc}</p>
      </Panel>
    </Collapse>
  );
};
