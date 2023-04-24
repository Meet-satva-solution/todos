import React from "react";
import { TodoItem } from "./todoItem";
import { Breadcrumb, Layout, theme, Card, Space, Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

const { Content } = Layout;

export const Todos = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          textAlign: "center"
        }}
      >
        {/* <Container>
          <h3>Todo List</h3>
          <TodoItem todo={props.todo[0]} />
        </Container> */}
        
        <Space direction="vertical" size={16}>
          <Card
            title="Todo List"
            style={{ width: 300 }}
          >
            {props.todo.map((todo) => {
               return <TodoItem todo={todo} onDelete={props.onDelete} />
            })}
            
          </Card>
        </Space>
      </div>
    </Content>
  );
};
