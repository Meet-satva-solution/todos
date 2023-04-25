import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

export default function header() {
  let menuList = ["Home", "About"];
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
          defaultSelectedKeys={["1"]}
          items={menuList.map((_, index) => ({
            key: String(index + 1),
            label: _,
          }))}
        />
      </Header>
    </Layout>
  );
}
