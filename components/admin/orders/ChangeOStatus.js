import { Download } from "@mui/icons-material";
import { Button, Divider, Modal, Select } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SendEstimateModal from "./EstimateModal";
import { toast } from "react-toastify";

const ordersData = [
  {
    id: 1,
    title: "Order 1",
    description: "Description for Order 1",
    image: "/house/7.jpg",
    totalAmount: "100",
    status: "Pending",
    phase: "Phase 01: Foundation", // Add phase property
  },
  {
    id: 2,
    title: "Order 2",
    description: "Description for Order 2",
    image: "/house/1.jpg",
    totalAmount: "150",
    status: "Delivered",
    phase: "Phase 02: Framing/Roofing", // Add phase property
  },
  // Add more orders as needed
];
const { Option } = Select;
const ChangeOrderStatus = () => {
  const Router = useRouter();
  const [orderApprovalStatus, setOrderApprovalStatus] = useState(false);
  const [orderRejectStatus, setOrderRejectStatus] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const filteredItems = selectedPhase
    ? ordersData.filter((item) => item.phase === selectedPhase)
    : ordersData;

  // modal

  const [sendEstimateVisible, setSendEstimateVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const handleSendEstimateClick = () => {
    setSendEstimateVisible(true);
  };

  const handleSendEstimateCancel = () => {
    setSendEstimateVisible(false);
  };

  const handleSendEstimateOk = (values) => {
    setFormValues(values);
    setSendEstimateVisible(false);
    setPreviewVisible(true);
  };

  const handlePreviewCancel = () => {
    setPreviewVisible(false);
  };

  const handleSend = () => {
    // Here, you can send the formValues to your server or perform any other action.
    toast.success("Estimate sent successfully!");
    setPreviewVisible(false);
  };

  const handleEdit = () => {
    setPreviewVisible(false);
    setSendEstimateVisible(true);
  };

  return (
    <div className="container min-h-screen flex flex-col lg:flex-row p-4">
      {/* Left Side */}

      <div className="w-full  lg:pr-4 flex flex-col  flex-wrap">
        <div>
          <h1 className="text-xl md:text-3xl font-bold mx-2">Order #7646324</h1>
        </div>
        <Divider />
        <div>
          <Select
            defaultValue={"Phase"}
            className="w-full mb-3"
            onChange={(value) => setSelectedPhase(value)}
          >
            <Option value="Phase 01: Foundation">Phase 01: Foundation</Option>
            <Option value="Phase 02: Framing/Roofing">Phase 02: Framing/Roofing</Option>
            <Option value="Phase 03: MEP Roughing and Systems">
              Phase 03: MEP Roughing and Systems
            </Option>
            <Option value="Phase 04: Sheetrock/Insulation">
              Phase 04: Sheetrock/Insulation
            </Option>
            <Option value="Phase 05: Finishes">Phase 05: Finishes</Option>
          </Select>
        </div>
        <Divider />
        <table
          className="min-w-full bg-white border border-gray-300"
          style={{ overflowX: "scroll" }}
        >
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-xs md:text-sm  text-center md:w-1/5 lg:w-1/5">
                Items
              </th>
              <th className="py-2 px-4  text-xs md:text-sm text-center md:w-1/5 lg:w-1/5">
                Component Item
              </th>
              <th className="py-2 px-4 text-xs md:text-sm  text-center md:w-1/5 lg:w-1/5">
                Quantity
              </th>
              <th className="py-2 px-4 text-xs md:text-sm text-center md:w-1/5 lg:w-1/5">
                Price
              </th>
              <th className="py-2 px-4 text-xs md:text-sm text-center md:w-1/5 lg:w-1/5">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody style={{ overflowX: "scroll" }}>
            {filteredItems.length > 0 ? (
              filteredItems.map((order, index) => (
                <tr key={order.id} className="border-b border-gray-300">
                  <td className="py-2 px-4 text-center md:w-1/5 lg:w-1/5">
                    <div className="flex items-center justify-center">
                      <img
                        src={order.image}
                        alt={order.title}
                        className="w-10 h-10 object-cover rounded-md mr-2"
                      />
                      <span className="text-xs">Golden Kitchen Light</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-center md:w-1/5 lg:w-1/5 text-xs">
                    Interior Ceiling Light Fixture
                  </td>
                  <td className="py-2 px-4 text-center md:w-1/5 lg:w-1/5 text-xs">5</td>
                  <td className="py-2 px-4 text-center md:w-1/5 lg:w-1/5 text-xs">
                    $36365
                  </td>
                  <td className="py-2 px-4 text-center md:w-1/5 lg:w-1/5 text-xs">
                    $3635355
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-3xl text-gray-500">
                  No items found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Right Side */}
      {/* Right Side */}
      {filteredItems.length > 0 ? (
        <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0 border rounded">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div
              className={`flex justify-between items-center gap-2 ${
                orderApprovalStatus
                  ? "bg-green-300"
                  : orderRejectStatus
                  ? "bg-rose-400"
                  : "bg-gray-300"
              } p-4 my-2`}
            >
              <h2 className="text-sm  ">Status</h2>
              <h2 className="text-xl  ">
                {orderApprovalStatus
                  ? "Approved"
                  : orderRejectStatus
                  ? "Rejected"
                  : "For Approval"}
              </h2>
            </div>
            <Divider className="bg-gray-300" />
            <div className="flex justify-between items-center my-4">
              <span>Total Amount:</span>
              <div className="flex flex-col">
                <span className="text-2xl">$35250</span>
                <span className="text-xs">savings generated $1210</span>
              </div>
            </div>
            <Divider className="bg-gray-300" />
            <div className="grid grid-cols-2 items-center mb-3 my-4">
              <span className="flex-1">Ship to</span>
              <span className="text-gray-400 text-xs">
                Welcoome Homes, 23 Old Farm Road Pleasantville, NY 10570, United States
                914-817-4091
              </span>
            </div>
            <Divider className="bg-gray-300" />
            <div className="flex justify-between items-center my-4">
              <span>Project Specifications</span>
              <button className="custom-btn text-xs p-2">
                Download Pdf <Download />
              </button>
            </div>
            <Divider className="bg-gray-300" />
            <div className="flex justify-between my-6">
              <span>Order Date</span>
              <span className="text-gray-600">October 25,2023</span>
            </div>
            {/* Add additional details, ship-to, project specs, order date */}
            <Divider className="bg-gray-300" />
            <div className="flex justify-between flex-col gap-2">
              {orderApprovalStatus ? (
                <button
                  onClick={() => handleSendEstimateClick()}
                  className=" custom-btn w-full h-full p-4"
                >
                  Send Order Confirmation
                </button>
              ) : (
                !orderRejectStatus && (
                  <button
                    onClick={() => setOrderApprovalStatus(true)}
                    className=" custom-btn w-full h-full"
                  >
                    Approve Order
                  </button>
                )
              )}
              {orderRejectStatus ? (
                <span
                  className="p-4 text-center font-bold bg-rose-300 text-lg"
                  onClick={() => setOrderRejectStatus(true)}
                >
                  Order Rejected
                </span>
              ) : (
                !orderApprovalStatus && (
                  <button
                    onClick={() => setOrderRejectStatus(true)}
                    className="p-2 w-full h-full bg-white text-rose-300 border-2 border-rose-300 rounded-md hover:bg-rose-500 hover:text-white  duration-300 "
                  >
                    Reject Order
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* modal */}

      <SendEstimateModal
        visible={sendEstimateVisible}
        onCancel={handleSendEstimateCancel}
        onOk={handleSendEstimateOk}
        initialValues={formValues} // Pass formValues for editing
      />

      <Modal
        title="Preview"
        visible={previewVisible}
        onCancel={handlePreviewCancel}
        footer={[
          <Button key="send" type="primary" onClick={handleSend}>
            Send
          </Button>,
          <Button key="edit" onClick={handleEdit}>
            Edit
          </Button>,
          <Button key="close" onClick={handlePreviewCancel}>
            Close
          </Button>,
        ]}
      >
        {formValues && (
          <div className="bg-white p-6 rounded  shadow-sm">
            <div className="mb-4">
              <p className="font-bold text-lg mb-2">Email:</p>
              <p>{formValues.email}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-lg mb-2">Customer Email:</p>
              <p>{formValues.customerEmail}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-lg mb-2">Subject:</p>
              <p>{formValues.subject}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-lg mb-2">Body:</p>
              <div dangerouslySetInnerHTML={{ __html: formValues.body }} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ChangeOrderStatus;
