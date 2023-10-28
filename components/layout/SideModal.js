import {  HomeOutlined, LogoutOutlined, ProjectOutlined, ShoppingCartOutlined } from "@ant-design/icons";
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

const SidebarModal = ({user, isModalOpen,setSidebarOpen,logoutHandler}) => {
  const router = useRouter();

  const isActive = (route) => {
    
    return router.pathname === route ? "text-green-600" : "";
  };
  const clickHandler = () => {
    
    setSidebarOpen(false)
  }
  
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
                <Badge count={6}>
                  <ShoppingCartOutlined className="mb-2 text-[32px] text-center text-white" />
                </Badge>
                <span className="text-[16px]">My Bag</span>
              </div>
            </Link>

            <Divider className="bg-[#cbd5e1]" />
            <Link href="/companies" onClick={clickHandler}>
              <div
                className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/companies"
                )}`}
              >
                <BsFillGridFill className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Companies</span>
              </div>
            </Link>
            <Divider className="bg-[#cbd5e1]" />
            <Link href="/dashboard/projects" onClick={clickHandler}>
              <div
                className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/dashboard/projects"
                )}`}
              >
                <ProjectOutlined className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Projects</span>
              </div>
            </Link>
            <Divider className="bg-[#cbd5e1]" />
            <Link href="/dashboard/customers" onClick={clickHandler}>
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/dashboard/customers"
                )}`}
              >
                <PiUsers className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Customers</span>
              </div>
            </Link>

            <Divider className="bg-[#cbd5e1]" />
            <Link href="/dashboard/orders" onClick={clickHandler}>
              <div
                className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/dashboard/orders"
                )}`}
              >
                <FaJediOrder className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Orders</span>
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
            <Link href="/get_paid" onClick={clickHandler}>
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/get_paid"
                )}`}
              >
                <MdOutlineMonetizationOn className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Get Paid</span>
              </div>
            </Link>

            <Divider className="bg-[#cbd5e1]" />
            <Link href="/settings" onClick={clickHandler}>
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/settings"
                )}`}
              >
                <FiSettings className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Settings</span>
              </div>
            </Link>
            <Divider className="bg-[#cbd5e1]" />
            <Link href="/feedbacks" onClick={clickHandler}>
              <div
                className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
                  "/feedbacks"
                )}`}
              >
                <PiWechatLogo className="mb-2 text-[32px] text-center " />
                <span className="text-[16px]">Feedbacks</span>
              </div>
            </Link>
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
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SidebarModal;
