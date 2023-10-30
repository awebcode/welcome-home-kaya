import { Select } from 'antd';
import React from 'react'
import CustomHouseCard from './CustomHouseCard';
const { Option } = Select;
const CommonCard = ({router,title,project}) => {
    
  return (
    <>
      <div className="flex justify-between items-center p-4 rounded-md bg-gray-200">
        <div>
          <button
            onClick={() => router.push("/my_bag")}
            className="border border-gray-800 rounded-md mt-2 w-full h-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
          >
            View Cart
          </button>
        </div>
        <div>
          <p className="text-gray-600"> Total Cost</p>
          <h1 className="font-bold text-3xl text-gray-900">$ 8790</h1>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p>Best seller (Shipping/Tax included)</p>
        </div>
        <div className="w-36">
          <Select style={{ width: "100%" }} placeholder="Filter" h>
            <Option value="1">50-500</Option>
            <Option value="2">500-2000</Option>
            <Option value="3">2000-100000</Option>
          </Select>
        </div>
      </div>

      <div className="flex justify-between items-center gap-1">
        <CustomHouseCard data={project} />
        <CustomHouseCard data={project} />
        <CustomHouseCard data={project} />
      </div>
      <div className="">
        <h1 className="font-bold text-3xl">Recent Orders</h1>
        
        <div className="flex justify-between items-center gap-1">
          <CustomHouseCard data={project} />
          <CustomHouseCard data={project} />
          <CustomHouseCard data={project} />
        </div>
      </div>
    </>
  );
}

export default CommonCard