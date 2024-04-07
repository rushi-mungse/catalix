import React, { useState } from "react";
import { Button, Layout, Menu, Input, Avatar, Badge } from "antd";
import type { MenuProps } from "antd";

import { LogoLink } from "./LogoLink";
import { LogoIcon } from "./icons/LogoIcon";
import { cn } from "../lib/utils";

import {
  HomeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  FireOutlined,
  GoldOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";
import { DashboardHome } from "./dashboard-home";

const { Search } = Input;
const { Content, Sider, Header } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <div>Home</div>,
  },
  {
    key: "/activities",
    icon: <FieldTimeOutlined />,
    label: <div>Activities</div>,
  },
  {
    key: "/analytics",
    icon: <LineChartOutlined />,
    label: <div>Analytics</div>,
  },
  {
    key: "/transformation",
    icon: <FireOutlined />,
    label: <div>Transformation</div>,
  },
  {
    key: "/library",
    icon: <GoldOutlined />,
    label: <div>Library</div>,
  },
];

const bottomItems: MenuItem[] = [
  {
    key: "/Settings",
    icon: <SettingOutlined />,
    label: <div>Setting</div>,
  },
  {
    key: "/logout",
    icon: <LogoutOutlined />,
    label: <div>Logout</div>,
  },
];

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#FFFFFF" }}
      >
        <Button
          icon={collapsed ? <RightCircleOutlined /> : <LeftCircleOutlined />}
          type="text"
          shape="circle"
          onClick={() => setCollapsed((prev) => !prev)}
          className={cn(
            "absolute top-0",
            collapsed ? "left-12" : "left-[170px]"
          )}
        />

        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="my-8 flex items-center pl-6">
              {collapsed ? <LogoIcon className="size-6" /> : <LogoLink />}
            </div>
            <Menu
              defaultSelectedKeys={["/"]}
              mode="inline"
              items={items}
              style={{ border: "none" }}
            />
          </div>

          <div className="border-t border-gray-400">
            <Menu
              defaultSelectedKeys={["/"]}
              mode="inline"
              items={bottomItems}
              style={{ border: "none" }}
            />
          </div>
        </div>
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Search
            placeholder="Search by profile, setting, artifact etc..."
            allowClear
            onSearch={() => {}}
            style={{ width: 500 }}
          />

          <div className="flex items-center justify-center space-x-4">
            <Badge dot={true}>
              <Button icon={<BellOutlined />} shape="circle" />
            </Badge>

            <Badge dot={true}>
              <Button icon={<WechatWorkOutlined />} shape="circle" />
            </Badge>

            <Button icon={<SettingOutlined />} shape="circle" />

            <Avatar src="http://res.cloudinary.com/dd7ozuzap/image/upload/v1711639809/iuxhbtkyfjn8dsah4hsa.jpg">
              P
            </Avatar>
          </div>
        </Header>

        <Content
          style={{ margin: "0 16px", width: "100wh" }}
          className="h-[calc(100vh_-200px)] overflow-auto"
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <DashboardHome />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
