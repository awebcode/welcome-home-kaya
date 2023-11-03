import {
  HomeOutlined,
  LogoutOutlined,
  ProjectOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Divider, Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAmazonPay, FaJediOrder } from "react-icons/fa";

import { TbHomeDollar } from "react-icons/tb";

import {AiOutlineUserAdd}from "react-icons/ai"
import { Dashboard,  Login } from "@mui/icons-material";
import { useSelector } from "react-redux";

const SidebarModal = ({ user, isModalOpen, setSidebarOpen, logoutHandler }) => {
  const { cartItems } = useSelector((s) => s.cart);
  const router = useRouter();

  const isActive = (route) => {
    return router.pathname === route ? "text-green-600" : "";
  };
  const clickHandler = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Modal
        visible={isModalOpen}
        onCancel={() => setSidebarOpen(false)}
        onOk={() => setSidebarOpen(false)}
        footer={() => {
          return (
            <>
              <button onClick={() => setSidebarOpen(false)} className="custom-btn mx-2">
                Close
              </button>
              <button onClick={() => setSidebarOpen(false)} className="custom-btn mx-2">
                Ok
              </button>
            </>
          );
        }}
        width={1000}
        bodyStyle={{
          padding: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f9fafb",
          margin: "0px 5px",
          borderRadius: "6px",
        }}
      >
        <div
          className={` 
          
           shadow-sm   w-full py-14  flex items-center`}
        >
          <div className="flex flex-col items-center justify-center my-6 w-full">
            <Link href="/" onClick={clickHandler}>
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/"
                )}`}
              >
                <HomeOutlined className="mb-2 text-[32px] text-center" />

                <span className="text-[16px]">Home</span>
              </div>
            </Link>
            <Divider className="bg-[#cbd5e1]" />
            <Link href="/my_bag" onClick={clickHandler}>
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/my_bag"
                )}`}
              >
                <Badge count={cartItems?.length}>
                  <ShoppingCartOutlined className="mb-2 text-[32px] text-center text-gray-900" />
                </Badge>
                <span className="text-[16px]">My Bag</span>
              </div>
            </Link>{" "}
            {user === null && (
              <>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/user/register" onClick={clickHandler}>
                  <div
                    className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/user/register"
                    )}`}
                  >
                    <AiOutlineUserAdd className="mb-2 text-[32px] text-center " />
                    <span className="text-[12px] md:text-[13px]">Singup</span>
                  </div>
                </Link>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/user/login" onClick={clickHandler}>
                  <div
                    className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/user/login"
                    )}`}
                  >
                    <Login className="mb-2 text-[32px] text-center " />
                    <span className="text-[12px] md:text-[13px]">Login</span>
                  </div>
                </Link>
              </>
            )}
            {user && user !== null && (
              <>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/dashboard" onClick={clickHandler}>
                  <div
                    className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/dashboard"
                    )}`}
                  >
                    <Dashboard className="mb-2 text-[32px] text-center " />
                    <span className="text-[16px]">Dashboard</span>
                  </div>
                </Link>
              </>
            )}
            
           
            {user !== null && (
              <>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/projects" onClick={clickHandler}>
                  <div
                    className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/projects"
                    )}`}
                  >
                    <ProjectOutlined className="mb-2 text-[32px] text-center " />
                    <span className="text-[16px]">Projects</span>
                  </div>
                </Link>
                <Divider />
                <Link
                  href={`${
                    user?.role === "admin" ? "/dashboard/orders" : "/orders/myorders"
                  }`}
                >
                  <div
                    className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/orders/myorders"
                    )}`}
                  >
                    <FaJediOrder className="mb-2 text-[16px] md:text-[20px] text-center " />
                    <span className="text-[12px] md:text-[13px]">
                      {user?.role === "admin" ? "All Orders" : "My Orders"}
                    </span>
                  </div>
                </Link>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/vendors" onClick={clickHandler}>
                  <div
                    className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/vendors"
                    )}`}
                  >
                    <TbHomeDollar className="mb-2 text-[32px] text-center " />
                    <span className="text-[16px]">Vendors</span>
                  </div>
                </Link>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/pay" onClick={clickHandler}>
                  <div
                    className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/pay"
                    )}`}
                  >
                    <FaAmazonPay className="mb-2 text-[32px] text-center " />
                    <span className="text-[16px]">Pay</span>
                  </div>
                </Link>
              </>
            )}
            
            {user && user !== null ? (
              <>
                <Divider className="bg-[#cbd5e1]" />
                <Link href="/user/profile" onClick={clickHandler}>
                  <div
                    className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                      "/user/profile"
                    )}`}
                  >
                    <Avatar src={`${user ? user?.avatar : "/avatar.png"}`} />
                    <span className="text-[12px] md:text-[13px]">Profile</span>
                  </div>
                </Link>
                <Divider />
                <a onClick={() => logoutHandler()}>
                  <div
                    className={`link flex flex-col justify-center items-center text-red-500 `}
                  >
                    <LogoutOutlined className="mb-2 cursor-pointer text-[16px]  md:text-[20px] text-center " />
                    <span className="text-[16px]">Logout</span>
                  </div>
                </a>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SidebarModal;
