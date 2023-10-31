import React from "react";
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
  EnterOutlined,
  PlusOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import {
  Agriculture,
  Bathroom,
  Check,
  CloseSharp,
  Countertops,
  DoorFront,
  ElectricBoltRounded,
  FireExtinguisher,
  FireplaceOutlined,
  FloodOutlined,
  FoodBank,
  Hardware,
  Home,
  HomeMini,
  HomeWorkOutlined,
  HouseSiding,
  Hvac,
  Kitchen,
  Light,
  Plumbing,
  Roofing,
  RoofingSharp,
  SwitchAccessShortcut,
  TimeToLeaveRounded,
  Wallpaper,
  Window,
} from "@mui/icons-material";
import { PiPaintBrushFill } from "react-icons/pi";
import { categories } from "@/components/admin/dashboard/product/categoriesData";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Menus = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["xxB"]}
        style={{ height: "100vh", overflowY: "scroll" }}
        className="custom-scroll"
      >
        {categories.map((category, index) => (
          <SubMenu
            key={`category_${index * 6}`}
            icon={category.icon}
            title={category.name}
          >
            {category.subcategories.map((subcategory, subIndex) => {
              return subcategory?.subSubcategories?.length > 0 ? (
                <SubMenu
                  key={`subcategory_${subIndex * 5}`}
                  icon={subcategory.icon}
                  title={subcategory.name}
                >
                  {subcategory?.subSubcategories?.map((subSubcategory, subSubIndex) => (
                    <Menu.Item key={`subsubcategory_${subSubIndex + 23}`}>
                      {subSubcategory}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={`subcategory_${subIndex}`}>{subcategory.name}</Menu.Item>
              );
            })}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
};

export default Menus;
