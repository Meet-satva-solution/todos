import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

export default function header(props) {
    let menuList = ['Home', 'About']
  return (
    <Layout>
      <Header
        style={{
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuList.map((_, index) => ({
            key: String(index + 1),
            label: _,
          }))}
        />
       
      </Header>
      {/* <Content
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
          }}
        >
          Content
        </div>
      </Content> */}
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
}