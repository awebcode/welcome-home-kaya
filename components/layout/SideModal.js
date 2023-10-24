import { GroupOutlined, HomeOutlined, LogoutOutlined, ProjectOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Divider, Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAmazonPay, FaJediOrder } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { TbHomeDollar } from "react-icons/tb";
import { PiWechatLogo } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { useState } from "react";

const SidebarModal = ({user, isModalOpen,setSidebarOpen,logoutHandler}) => {
  const router = useRouter();

  const isActive = (route) => {
    return router.pathname === route ? "text-blue-500" : "";
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
                Cancel
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
          backgroundColor: "#0f172a",
          margin: "0px 5px",
          borderRadius: "6px",
          
        }}
      >
        <div
          className={` 
          
           shadow-sm   w-full py-14  flex items-center`}
        >
          <div className="flex flex-col items-center justify-center my-6 w-full">
            <Link href="/">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/"
                )}`}
              >
                <HomeOutlined className="mb-2 text-[32px] text-center" />

                <span className="text-[16px]">Home</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />

            <Link href="/my_bag">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/my_bag"
                )}`}
              >
                <Badge count={6}>
                  <ShoppingCartOutlined className="mb-2 text-[32px] text-center text-white" />
                </Badge>
                <span className="text-[16px]">My Bag</span>
              </div>
            </Link>

            <Divider className="bg-[#05c789]" />
            <Link href="/companies">
              <div
                className={`link link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/companies"
                )}`}
              >
                <BsFillGridFill className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Companies</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/projects">
              <div
                className={`link link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/projects"
                )}`}
              >
                <ProjectOutlined className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Projects</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/pay">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/pay"
                )}`}
              >
                <FaAmazonPay className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Pay</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/vendors">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/vendors"
                )}`}
              >
                <TbHomeDollar className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Vendors</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/orders">
              <div
                className={`link link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/orders"
                )}`}
              >
                <FaJediOrder className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Orders</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/get_paid">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/get_paid"
                )}`}
              >
                <MdOutlineMonetizationOn className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Get Paid</span>
              </div>
            </Link>

            <Divider className="bg-[#05c789]" />
            <Link href="/customers">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/customers"
                )}`}
              >
                <PiUsers className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Customers</span>
              </div>
            </Link>

            <Divider className="bg-[#05c789]" />
            <Link href="/settings">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/settings"
                )}`}
              >
                <FiSettings className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Settings</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/feedbacks">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
                  "/feedbacks"
                )}`}
              >
                <PiWechatLogo className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Feedbacks</span>
              </div>
            </Link>
            <Divider className="bg-[#05c789]" />
            <Link href="/user/profile">
              <div
                className={`link flex flex-col justify-center items-center text-gray-200 ${isActive(
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
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SidebarModal;
