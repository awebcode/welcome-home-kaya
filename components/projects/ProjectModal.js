import React from "react";
import { Modal } from "antd";

const CustomModal = ({ visible, onClose, activeStatus }) => {
  return (
    <Modal
      title="Current Status"
      visible={visible}
      onCancel={onClose}
      
          onOk={onClose}
          okButtonProps={{style:{backgroundColor:"tomato"}}}
    >
      <div className="flex items-center mb-4">
        <div className="w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold">{activeStatus.phaseStatus}</h3>
        </div>
        <div className="w-1/2">
          <img
            src={activeStatus.statusImage}
            alt={activeStatus.phaseStatus}
            className="w-full"
          />
        </div>
      </div>
      <img src={activeStatus.image} alt={activeStatus.title} className="w-full" />
    </Modal>
  );
};

export default CustomModal;
