import React from "react";
import Link from "next/link";
import {
  UserOutlined,
  BuildOutlined,
  ApartmentOutlined,
  TeamOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/userActions";
import { useRouter } from "next/router";
import { Divider } from "antd";

const Footer = () => {
    const router=useRouter()
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(logout())
        router.push("/")

    }
  return (
    <div className="bg-gray-900 text-white py-8 my-6 px-6 font-thin font-mono">
      <div className="container mx-auto flex justify-between flex-wrap">
        <Divider className="bg-gray-600" />
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Account</h2>
          <Divider className="bg-green-400 md:hidden" />
          <ul>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/user/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/user/register"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/user/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <p className="cursor-pointer" onClick={logoutHandler}>
                Sign Out
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Start Building</h2>
          <Divider className="bg-green-400 md:hidden" />
          <ul>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/building/design"
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/building/construction"
              >
                Construction
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/building/decorate"
              >
                Decorate
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Company</h2>
          <Divider className="bg-green-400 md:hidden" />
          <ul>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/company/how_its_work"
              >
                HOW IT WORKS
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/company/welcome_difference"
              >
                WELCOME DIFFERENCE
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/company/desing_philoshpy"
              >
                DESIGN PHILOSOPHY
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/company/about_us"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/company/careers"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Partners</h2>
          <Divider className="bg-green-400 md:hidden" />
          <ul>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/partners/agents"
              >
                AGENTS
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/partners/builders"
              >
                Builders
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/partners/investors"
              >
                INVESTORS
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/partners/developers"
              >
                Developer
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/partners/partners"
              >
                Partners
              </Link>
            </li>
          </ul>
        </div>
        {/* //   info */}
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Info</h2>
          <Divider className="bg-green-400 md:hidden" />
          <ul>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/footer/accessbility"
              >
                ACCESSIBILITY
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/footer/terms"
              >
                TERMS OF SERVICE
              </Link>
            </li>
            <li>
              <Link
                className="font-thin cursor-pointer hover:border-b-2 duration-300"
                href="/footer/privacy_policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* New Columns */}
      <Divider className="bg-gray-600" />
      <div className="container flex justify-between py-4 flex-wrap items-center m-auto">
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Contact</h2>
          <Divider className="bg-green-400 md:hidden" />
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Address</h2>
          <Divider className="bg-green-400 md:hidden" />
          <p>123 Main Street</p>
          <p>City, State, Zip</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
          <h2 className="text-2xl font-thin mb-4">Customer Support</h2>
          <Divider className="bg-green-400 md:hidden" />
          <p>ACCESSIBILITY HELP</p>
          <p>Hub Supporter</p>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-around pt-8 flex-wrap my-4">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src={"/logo.png"}
            height={80}
            width={80}
            objectFit="cover"
            loading="lazy"
            className="text-sm mb-2"
          />
        </div>{" "}
        <p className="text-sm text-center w-auto md:w-[50%] my-4">
          © COPYRIGHT 2023 WELCOME BUILDING CORPORATION. ALL RIGHTS RESERVED. MLS DATA
          PROVIDED UNDER LICENSING BY THE NATIONAL BROKERAGE NETWORK
        </p>
        <div className="flex justify-center mb-4">
          <a className="cursor-pointer" href="https://github.com">
            <GithubOutlined className="text-2xl mx-2" />
          </a>
          <a className="cursor-pointer" href="https://linkedin.com">
            <LinkedinOutlined className="text-2xl mx-2" />
          </a>
          <a className="cursor-pointer" href="https://twitter.com">
            <TwitterOutlined className="text-2xl mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
