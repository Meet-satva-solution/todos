import { Button, Form, Input, Card, Space } from "antd";
import "./addTodo.css";
import { useState } from "react";
const AddTodo = ({ addTodo }) => {
  const [normal_login] = Form.useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onFinish = (values) => {
    addTodo(values);
    normal_login.resetFields();
  };
  return (
    <div
      style={{
        padding: 24,
        minHeight: 380,
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size={16}>
        <Card title="Add Todo" style={{ width: 300 }}>
          <Form
            form={normal_login}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your Title!",
                },
              ]}
            >
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please input your Description!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Descriptions"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Add Todo
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};
export default AddTodo;
