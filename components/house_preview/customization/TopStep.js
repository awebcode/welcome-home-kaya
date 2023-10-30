import React, { useState } from "react";
import { Breadcrumb } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
  RightOutlined,
} from "@ant-design/icons";

const TopStep = ({ activeTab, handleTabClick }) => {
  // Define an array of titles for your breadcrumb items
  const titles = [
    "Foundation",
    "Framing/ Roofing",
    "Mep Roofing And System",
    "Shitrock/Insulation",
    "Fishes",
    "Punchlist",
    "Complete",
  ];
  const [activeTabx, setActiveTab] = useState("Foundation");
 
   

  return (
    <div className="topSide flex items-center justify-center  mt-[-45px] ml-6 bg-white   rounded-lg overflow-x-scroll custom-scroll">
      <Breadcrumb
        className="flex justify-center items-center flex-nowrap custom-scroll"
        separator={<RightOutlined className="text-4xl mt-4" />}
        current={activeTab - 1}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          maxWidth: "100%",
        }}
      >
        {titles.map((title, index) => (
          <Breadcrumb.Item
            key={index}
            onClick={() => {
              handleTabClick(`tab${index + 1}`);
              setActiveTab(title);
            }}
            className={` bg-gray-100 p-[15px] rounded-md cursor-pointer text-gray-800 ${
              title === activeTabx ? "bg-green-100" : ""
            }`}
          >
           
              <a
                className={`flex flex-col  ${title === activeTabx ? "bg-green-100" : ""}`}
              >
                {" "}
                <p className="text-[10px]"> Phase {0 + index}</p>
                {title}
              </a>
            
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default TopStep;
