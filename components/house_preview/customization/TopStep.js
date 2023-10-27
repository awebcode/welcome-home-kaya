import { Step, Stepper, StepLabel, StepIcon } from "@material-ui/core";
import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
  RightOutlined,
  
} from "@ant-design/icons";
import { ChevronRight } from "@mui/icons-material";
import { Steps } from "antd";

const TopStep = ({ activeTab, handleTabClick }) => {
  return (
    <div className="topSide flex items-center justify-center  mt-[-60px] ml-3 bg-white">
      <Steps current={activeTab - 1} size="small" progressDot>
        <Step
          title="Foundation"
          icon={<UserOutlined />}
          onClick={() => handleTabClick("tab1")}
          className="bg-white cursor-pointer mx-1 ml-5 shadow-md rounded-md p-1 text-gray-800"
        />
        <Step
          title="Framing/ Roofing"
          icon={<SolutionOutlined />}
          onClick={() => handleTabClick("tab2")}
          className="bg-white cursor-pointer mx-2  shadow-md rounded-md p-1 text-gray-800"
        />
        <Step
          title="Mep Roofing And System"
          icon={<SmileOutlined />}
          onClick={() => handleTabClick("tab3")}
          className="bg-white cursor-pointer mx-1  shadow-md rounded-md p-1 text-gray-800"
        />
        <Step
          title="Shitrock/Insulation"
          icon={<SmileOutlined />}
          onClick={() => handleTabClick("tab4")}
          className="bg-white cursor-pointer mx-2  shadow-md rounded-md p-1 text-gray-800"
        />
        <Step
          title="Fishes"
          icon={<SmileOutlined />}
          onClick={() => handleTabClick("tab5")}
          className="bg-green-200 mx-1 cursor-pointer  shadow-md rounded-md p-1 text-gray-800"
        />
        <Step
          title="Punchlist"
          icon={<SmileOutlined />}
          onClick={() => handleTabClick("tab6")}
          className="bg-white cursor-pointer mx-2  shadow-md rounded-md p-1 text-gray-800"
        />
        <Step
          title="Complete"
          icon={<SmileOutlined />}
          onClick={() => handleTabClick("tab7")}
          className="bg-white cursor-pointer mx-2  shadow-md rounded-md p-1 text-gray-800"
        />
      </Steps>
    </div>
  );
};

export default TopStep;
