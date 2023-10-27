import React from 'react'
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  AppstoreOutlined,
  BookOutlined,
  BarChartOutlined,
  BulbOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { DoorFront, ElectricBoltRounded, HouseSiding, Roofing, RoofingSharp, Window } from '@mui/icons-material';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const Menus = () => {
  return (
    <>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Overview
        </Menu.Item>
        <SubMenu key="sub1" icon={<Roofing />} title="Roofing">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
          <Menu.Item key="4">Option 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<HouseSiding />} title="Siding">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
          <Menu.Item key="4">Option 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<Window />} title="Windows">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
          <Menu.Item key="4">Option 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<DoorFront />} title="Doors">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
          <Menu.Item key="4">Option 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<RoofingSharp />} title="Roof Plumbing">
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 2</Menu.Item>
          <Menu.Item key="4">Option 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" icon={<ElectricBoltRounded />} title="Roof Electric">
          <SubMenu key="sub6-1" title="Heated Flooring">
            <Menu.Item key="2">Smoke and Carbon Monoxide Detector</Menu.Item>
            <Menu.Item key="3">220 volt</Menu.Item>
            <Menu.Item key="4">Generator</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1-j6" title="Smoke and Carbon Monoxide Detector">
            <Menu.Item key="6-2">Option 1</Menu.Item>
            <Menu.Item key="6-2x">Option 2</Menu.Item>
            <Menu.Item key="7-2xi">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1-336" title="220 volt">
            <Menu.Item key="6-2">Option 1</Menu.Item>
            <Menu.Item key="6-2x">Option 2</Menu.Item>
            <Menu.Item key="7-2xi">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1-xx6" title="Generator">
            <Menu.Item key="6-2">Option 1</Menu.Item>
            <Menu.Item key="6-2x">Option 2</Menu.Item>
            <Menu.Item key="7-2xi">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1-35356" title="Electric Beheicle Charger">
            <Menu.Item key="6-2">Option 1</Menu.Item>
            <Menu.Item key="6-2x">Option 2</Menu.Item>
            <Menu.Item key="7-2xi">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1-356" title="Junction Box">
            <Menu.Item key="6-2">Option 1</Menu.Item>
            <Menu.Item key="6-2x">Option 2</Menu.Item>
            <Menu.Item key="7-2xi">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1xx-8" title="Lighting Fixures">
            <Menu.Item key="6-2">Exterior lighting fixures</Menu.Item>
            <Menu.Item key="6-2x">Exterior sconce light</Menu.Item>
            <Menu.Item key="7-22xi">Interior selling light fixures</Menu.Item>
            <Menu.Item key="7-24xi">Electric Bridge</Menu.Item>
            <Menu.Item key="7-23xi">Transformer</Menu.Item>
            <Menu.Item key="7-26xi">Recessed light</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </>
  );
}

export default Menus