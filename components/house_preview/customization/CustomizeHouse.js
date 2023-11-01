import React, { useEffect, useState } from "react";
import { Divider, Layout, Menu, Select } from "antd";
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
import CommonCard from "./CommonCard";
import { useMediaQuery } from "react-responsive";
import { getProducts } from "@/redux/actions/productActions";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const CustomizeHouse = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [currentCategory, setCurrentCategory] = useState("Roofing");
  const [mainCategory, setMainCategory] = useState("Roofing");
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { selectedMenuItem } = useSelector((state) => state.menu);
  const { project } = useSelector((s) => s.project);
  const { cartItems } = useSelector((s) => s.cart);
  const { products, error, loading } = useSelector((s) => s.product);
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState("tab1");
  const [minPrice, setMinPrice] = useState(0); // Assuming minPrice is a state variable
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortValue, setSortValue] = useState("createdAt")
   const [search, setSearch] = useState("");// Assuming maxPrice is a state variable
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  const handleMenuItemClick = (menuItem, value) => {
    dispatch(selectMenuItem(menuItem));
    dispatch(fetchFilteredData(menuItem, value));

    // You'll need to replace "subvalue" with the appropriate value.
  };
  useEffect(() => {
    if (id) {
      dispatch(getOneProject(id));
    }
  }, [dispatch, id]);
  useEffect(() => {
    if (currentCategory) {
      dispatch(getProducts(currentCategory, minPrice, maxPrice,search,sortValue)); // Pass minPrice and maxPrice to the action
    }
  }, [dispatch, currentCategory, minPrice, maxPrice,search,sortValue]); // Include minPrice and maxPrice in the dependency array
  const renderRightSidebarContent = () => {
    if (activeTab === "tab1") {
      return (
        <>
          <CommonCard title={"Lighting Fixtures"} router={router} project={project} />
        </>
      );
    } else if (activeTab === "tab2") {
      return (
        <>
          <CommonCard title={"Roofing Features"} router={router} project={project} />
        </>
      );
    } else if (activeTab === "tab3") {
      return (
        <>
          <CommonCard title={"Electronics Feature"} router={router} project={project} />
        </>
      );
    } else if (activeTab === "tab4") {
      return (
        <>
          <CommonCard title={"Shitrock/Insulation"} router={router} project={project} />
        </>
      );
    } else if (activeTab === "tab5") {
      return (
        <>
          <CommonCard title={"Fishes"} router={router} project={project} />
        </>
      );
    } else if (activeTab === "tab6") {
      return (
        <>
          <CommonCard title={"Puchlist"} router={router} project={project} />
        </>
      );
    } else if (activeTab === "tab7") {
      return (
        <>
          <CommonCard title={"Complete"} router={router} project={project} />
        </>
      );
    }
  };
console.log(collapsed)
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#fff" }}
        className={` md:block ${collapsed ? "hidden" : "visible"}`}
      >
        <div className="logo" />
        <Menus
          mainCategory={mainCategory}
          setMainCategory={setMainCategory}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </Sider>
      <Layout className="">
        <Header className="bg-white" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger z-50 mt-[20px] text-2xl md:text-lg", // Increase icon size if needed
            onClick: toggle, // Toggle sidebar on mobile
          })}

          <div className="hidden md:block ">
            <TopStep handleTabClick={handleTabClick} activeTab={activeTab} />
          </div>
        </Header>

        <Content>
          <div className="container mx-auto flex flex-col md:flex-row p-4 bg-white">
            <div className="middleSide md:w-[57%] p-1 hidden md:block">
              <Middle project={project} />
            </div>
            <div className="rightSide md:w-[100%] p-2 overflow-x-auto custom-scroll">
              {/* {renderRightSidebarContent()} */}

              <CommonCard
                title={mainCategory}
                router={router}
                project={project}
                products={products}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                min={minPrice}
                max={maxPrice}
                sortValue={sortValue}
                setSearch={setSearch}
                setSortValue={setSortValue}
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomizeHouse;
