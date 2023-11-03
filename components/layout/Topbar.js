import React, { useState, useRef, useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar, Divider } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";
import { useValue } from "../../context/ContextProvider";
import { logout } from "@/redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { FaHamburger, FaJediOrder, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { BsHammer } from "react-icons/bs";
const { Header } = Layout;

const Topbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((u) => u.user);

  const Router = useRouter();
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //logoutHandler
  const logoutHandler = () => {
    dispatch(logout());

    toast.success("Logged out success!");
    Router.push("/")
  };

  const menu = (
    <Menu className="p-3 shadow-md">
      {!user ? (
        <>
          <Menu.Item
            onClick={() => Router.push("/user/login")}
            key="5"
            icon={<FaSignInAlt />}
          >
            Signin
          </Menu.Item>
          <Menu.Item
            onClick={() => Router.push("/user/register")}
            key="6"
            icon={<UserOutlined />}
          >
            Singup
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item
            onClick={() => Router.push("/user/profile")}
            key="1"
            icon={<UserOutlined />}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            onClick={() => Router.push("/my_bag")}
            key="5"
            icon={<FaShoppingCart />}
          >
            Cart
          </Menu.Item>
          <Menu.Item
            onClick={() => Router.push("/orders")}
            key="6"
            icon={<FaJediOrder />}
          >
            Orders
          </Menu.Item>
          {/* <Menu.Item
            onClick={() => Router.push("/settings")}
            key="2"
            icon={<SettingOutlined />}
          >
            Settings
          </Menu.Item> */}
          <Menu.Item key="3" onClick={() => logoutHandler()} icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  return (
    <>
      <Header
        style={{ zIndex: "20" }}
        className="bg-white  p-2 md:p-4 flex justify-between items-center fixed top-0 left-0 right-0 custom-scroll"
      >
        <div
          className="flex items-center cursor-pointer z-50"
          onClick={() => Router.push("/")}
        >
          <span className="text-2xl md:text-5xl font-bold text-gray-900 cursor-pointer">
            <Image
              src={"/logo.png"}
              alt="welcome homes logo"
              height={65}
              width={65}
              layout="fixed"
            />
          </span>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar size="lg" src={`${user?.avatar || "/avatar.png"}`} />
          </Dropdown>
          <span
            className="hidden md:inline text-gray-900 cursor-pointer"
            onClick={toggleMenu}
          >
            {user?.username || "WelcomeHomes"} <FiChevronDown className="inline" />
          </span>
          <div className="visible md:hidden inline">
            {isSidebarOpen ? (
              <CloseOutlined
                className="inline mx-2 text-xl font-bold"
                onClick={() => setIsSidebarOpen(false)}
              />
            ) : (
              <MenuOutlined
                className="inline mx-2 text-xl font-bold"
                onClick={() => setIsSidebarOpen(true)}
              />
            )}
          </div>
        </div>
      </Header>

      {isMenuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: "8%", // Adjust the position as needed
            right: 35,
            zIndex: 100,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
          }}
        >
          {menu}
        </div>
      )}
      <Divider className=" bg-green-400" />
    </>
  );
};

export default Topbar;
