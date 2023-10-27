import React, { useEffect, useState } from "react";
import { Divider, Layout, Menu } from "antd";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredData, selectMenuItem } from "@/redux/actions/menuHActions";
import Menus from "./Menus";
import Middle from "./Middle";
import { getOneProject } from "@/redux/actions/projectsActions";
import { useRouter } from "next/router";
import CustomHouseCard from "./CustomHouseCard";
import TopStep from "./TopStep";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const CustomizeHouse = () => {
    const dispatch = useDispatch();
    const router=useRouter()
     const { id } = router.query;
    const { selectedMenuItem } = useSelector((state) => state.menu);
     const { project, error, loading } = useSelector((s) => s.project);
  const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
    

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };


const handleMenuItemClick = (menuItem,value) => {
  dispatch(selectMenuItem(menuItem));
    dispatch(fetchFilteredData(menuItem, value));
  
    // You'll need to replace "subvalue" with the appropriate value.
    };
    
    

     
     useEffect(() => {
       if (id) {
         dispatch(getOneProject(id));
       }
     }, [dispatch, id]);
  const renderRightSidebarContent = () => {
    if (activeTab === "tab1") {
      return (
        <>
          <h1>Lighting</h1>
          <div className="flex justify-between items-center gap-1">
            <CustomHouseCard data={project} />
            <CustomHouseCard data={project} />
            <CustomHouseCard data={project} />
          </div>
          <div className=" py-5">
            <h1 className="font-bold font-3xl">Recent Orders</h1>
            <Divider className="bg-green-400" />
            <div className="flex py-5 justify-between items-center gap-1">
              <CustomHouseCard data={project} />
              <CustomHouseCard data={project} />
              <CustomHouseCard data={project} />
            </div>
          </div>
        </>
      );
    } else if (activeTab === "tab2") {
      return (
        <div>
          <h1>Founding</h1>
          <div className="flex justify-between flex-wrap md:flex-nowrap items-center gap-1">
            <CustomHouseCard data={project} />
            <CustomHouseCard data={project} />
            <CustomHouseCard data={project} />
          </div>
          <div className=" py-5">
            <h1 className="font-bold font-3xl">Recent Orders</h1>
            <Divider className="bg-green-400" />
            <div className="flex py-5 justify-between flex-wrap md:flex-nowrap items-center gap-1">
              <CustomHouseCard data={project} />
              <CustomHouseCard data={project} />
              <CustomHouseCard data={project} />
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "tab3") {
      return (
        <div>
          <h1>Roofing</h1>

          <div className="flex justify-between flex-wrap md:flex-nowrap items-center gap-1">
            <CustomHouseCard data={project} />
            <CustomHouseCard data={project} />
            <CustomHouseCard data={project} />
          </div>
          <div className=" py-5">
            <h1 className="font-bold font-3xl">Recent Orders</h1>
            <Divider className="bg-green-400" />
            <div className="flex py-5 justify-between items-center gap-1">
              <CustomHouseCard data={project} />
              <CustomHouseCard data={project} />
              <CustomHouseCard data={project} />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#fff" }}
      >
        <div className="logo" />
        <Menus />
      </Sider>
      <Layout className="">
        <Header className="bg-white" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger z-50 mt-[20px]",
            onClick: toggle,
          })}

          <div>
            <TopStep handleTabClick={handleTabClick} activeTab={activeTab} />
          </div>
        </Header>
        <Content>
          <div className="container mx-auto grid grid-cols-2 gap-4 p-4 bg-white">
            <div className="middleSide p-1 ">
              <Middle project={project} />
            </div>
            <div className="rightSide p-2">{renderRightSidebarContent()}</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomizeHouse;
