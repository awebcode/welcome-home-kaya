import { GroupOutlined, ProjectOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaShoppingBag, FaUser, FaInbox, FaAmazonPay, FaJediOrder } from "react-icons/fa";
import { BsFillGridFill} from "react-icons/bs";
import { TbHomeDollar } from "react-icons/tb";
import { PiWechatLogo } from "react-icons/pi"
import { FiSettings } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";
import { MdOutlineMonetizationOn } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();

  const isActive = (route) => {
    return router.pathname === route ? "text-blue-500" : "";
  };

  return (
    <div className="custom-scroll shadow-sm   w-20 py-14  top-0 bottom-0 fixed  overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col items-center justify-center my-6">
        <Link href="/my_bag">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/my_bag"
            )}`}
          >
            <Badge count={6}>
              <ShoppingCartOutlined className="mb-2 text-[16px] md:text-[20px] text-center" />
            </Badge>
            <span className="text-[12px] md:text-[13px]">My Bag</span>
          </div>
        </Link>

        <Divider />
        <Link href="/companies">
          <div
            className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/companies"
            )}`}
          >
            <BsFillGridFill className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Companies</span>
          </div>
        </Link>
        <Divider />
        <Link href="/projects">
          <div
            className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/projects"
            )}`}
          >
            <ProjectOutlined className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Projects</span>
          </div>
        </Link>
        <Divider />
        <Link href="/pay">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/pay"
            )}`}
          >
            <FaAmazonPay className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Pay</span>
          </div>
        </Link>
        <Divider />
        <Link href="/vendors">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/vendors"
            )}`}
          >
            <TbHomeDollar className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Vendors</span>
          </div>
        </Link>
        <Divider />
        <Link href="/orders">
          <div
            className={`link link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/orders"
            )}`}
          >
            <FaJediOrder className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Orders</span>
          </div>
        </Link>
        <Divider />
        <Link href="/get_paid">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/get_paid"
            )}`}
          >
            <MdOutlineMonetizationOn className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Get Paid</span>
          </div>
        </Link>

        <Divider />
        <Link href="/customers">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/customers"
            )}`}
          >
            <PiUsers className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Customers</span>
          </div>
        </Link>

        <Divider />
        <Link href="/settings">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/settings"
            )}`}
          >
            <FiSettings className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Settings</span>
          </div>
        </Link>
        <Divider />
        <Link href="/feedbacks">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "/feedbacks"
            )}`}
          >
            <PiWechatLogo className="mb-2 text-[16px] md:text-[20px] text-center " />
            <span className="text-[12px] md:text-[13px]">Feedbacks</span>
          </div>
        </Link>
        <Divider />
        <Link href="#">
          <div
            className={`link flex flex-col justify-center items-center text-gray-900 ${isActive(
              "#"
            )}`}
          >
            <Avatar src="/avatar.png" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
