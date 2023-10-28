import React, { useRef, useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SendEstimateModal = ({ visible, onCancel, onOk, initialValues }) => {
  const [form] = Form.useForm();
  const [body, setBody] = useState(initialValues?.body || "");
    const editorRef = useRef();
  const handleBodyChange = (value) => {
    setBody(value);
  };

  const handlePreview = () => {
    form
      .validateFields()
      .then((values) => {
        const plainTextBody = editorRef.current.getEditor().getText(); // Get plain text
        onOk({ ...values, body: plainTextBody });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Send Estimate"
      visible={visible}
      onCancel={onCancel}
      onOk={handlePreview}
      okText="Preview"
    >
      <Form form={form} size="large" layout="vertical" initialValues={initialValues}>
        <div className="mb-4">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              className="border border-green-300 focus:border-green-500 rounded w-full"
            />
          </Form.Item>
        </div>
        <div className="mb-4">
          <Form.Item
            name="customerEmail"
            label="Customer Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              placeholder="Enter customer email address"
              className="border border-green-300 focus:border-green-500 rounded w-full"
            />
          </Form.Item>
        </div>
        <div className="mb-4">
          <Form.Item
            name="subject"
            label="Subject"
            rules={[
              {
                required: true,
                message: "Please enter the subject",
              },
            ]}
          >
            <Input placeholder="Enter the subject" className="border border-green-300 focus:border-green-500 rounded w-full" />
          </Form.Item>
        </div>
        <div className="mb-4">
          <Form.Item
            name="body"
            label="Body"
            rules={[
              {
                required: true,
                message: "Please enter the body",
              },
            ]}
          >
            <ReactQuill
              ref={editorRef}
              value={body}
              onChange={handleBodyChange}
              className=" rounded w-full"
            />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default SendEstimateModal;

