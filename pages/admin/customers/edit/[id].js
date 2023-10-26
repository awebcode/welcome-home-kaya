import { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getSingleUser, resetUserState, updateSingleUser } from "@/redux/actions/userActions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
const { Option } = Select; // Added Option from Ant Design Select
const UpdateInfoForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const { id } = useRouter().query;
  const {
    singleUserGetLoading,
    singleUser: user,
    profileUpdateLoading,
    error,
    isUpdated
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getSingleUser(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    // Set initial values when user data is available
    if (user) {
      form.setFieldsValue({
        username: user.username || "",
        email: user.email || "",
        role: user.role || "",

        password: "", // Leave password empty, as it's sensitive information
      });
    }
  }, [user, form]);

  const [modifiedFields, setModifiedFields] = useState({});

  const onFinish = (values) => {
    const data = {
      ...modifiedFields, // Include only modified fields
      username: values.username,

      role: values.role,
      password: values.password,
      email: values.email,
    };
    dispatch(updateSingleUser(data,id));
  };
  const handleFieldChange = (changedFields) => {
    setModifiedFields((prevFields) => ({
      ...prevFields,
      ...changedFields,
    }));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast.success("User information updated!");
      router.push("/admin/customers");
      dispatch(resetUserState());
    }
  }, [error, dispatch, router, isUpdated]);

  if (singleUserGetLoading) {
    return <Loader />;
  }

  return (
    <div className="container w-full px-2 m-2 md:px-44 md:m-5 flex justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        className="w-full md:w-[70%]"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        size="large"
        onValuesChange={handleFieldChange} // Track field changes
      >
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4 my-4">
          Update User Information
        </h2>
        <Form.Item label="New Username" name="username">
          <Input placeholder="Enter a new username!" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter a new email!" />
        </Form.Item>
        <Form.Item label="Role" name="role">
          {/* Added Role Field */}
          <Select placeholder="Select a role">
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="banned">Banned</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Change Password"
          name="password"
          rules={[
           
            { min: 6, message: "Password must be at least 6 characters!" },
          ]} // Added password validation rules
        >
          <Input.Password placeholder="Enter a new password!" />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            type="primary"
            htmlType="submit"
            loading={profileUpdateLoading}
          >
            {profileUpdateLoading ? "Updating..." : "Update Information"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateInfoForm;
