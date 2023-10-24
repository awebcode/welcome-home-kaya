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
          backgroundColor: "#ffffff",
          margin: "0px 10px",
        }}
      >
        <div
          className={` 
          
           shadow-sm   w-full py-14  flex items-center`}
        >
          <div className="flex flex-col items-center justify-center my-6 w-full">
            <Link href="/">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/"
                )}`}
              >
                <HomeOutlined className="mb-2 text-[24px] md:text-[32px] text-center" />

                <span className="text-[20px] md:text-[20px]">Home</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />

            <Link href="/my_bag">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/my_bag"
                )}`}
              >
                <Badge count={6}>
                  <ShoppingCartOutlined className="mb-2 text-[24px] md:text-[32px] text-center" />
                </Badge>
                <span className="text-[20px] md:text-[20px]">My Bag</span>
              </div>
            </Link>

            <Divider className="bg-gray-300" />
            <Link href="/companies">
              <div
                className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/companies"
                )}`}
              >
                <BsFillGridFill className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Companies</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/projects">
              <div
                className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/projects"
                )}`}
              >
                <ProjectOutlined className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Projects</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/pay">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/pay"
                )}`}
              >
                <FaAmazonPay className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Pay</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/vendors">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/vendors"
                )}`}
              >
                <TbHomeDollar className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Vendors</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/orders">
              <div
                className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/orders"
                )}`}
              >
                <FaJediOrder className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Orders</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/get_paid">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/get_paid"
                )}`}
              >
                <MdOutlineMonetizationOn className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Get Paid</span>
              </div>
            </Link>

            <Divider className="bg-gray-300" />
            <Link href="/customers">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/customers"
                )}`}
              >
                <PiUsers className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Customers</span>
              </div>
            </Link>

            <Divider className="bg-gray-300" />
            <Link href="/settings">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/settings"
                )}`}
              >
                <FiSettings className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Settings</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/feedbacks">
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/feedbacks"
                )}`}
              >
                <PiWechatLogo className="mb-2 text-[24px] md:text-[32px] text-center " />
                <span className="text-[20px] md:text-[20px]">Feedbacks</span>
              </div>
            </Link>
            <Divider className="bg-gray-300" />
            <Link href="/user/profile">
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
                <span className="text-[20px] md:text-[20px]">Logout</span>
              </div>
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SidebarModal;
