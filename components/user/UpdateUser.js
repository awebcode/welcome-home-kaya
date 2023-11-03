import { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetUserState, updateProfile } from "@/redux/actions/userActions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const UpdateInfoForm = () => {
  const router=useRouter()
  const [form] = Form.useForm();
  
const { isAuthenticated, user, profileUpdateLoading,error ,isUpdated } = useSelector((u) => u.user);
  const dispatch = useDispatch();
   useEffect(() => {
     // Set initial values when user data is available
     if (user) {
       form.setFieldsValue({
         username: user.username || "",
         email: user.email || "",
         bio: user.bio || "",
         phone: user.phone || "",
         password: "", // Leave password empty, as it's sensitive information
       });
     }
   }, [user, form]);
  
  const [modifiedFields, setModifiedFields] = useState({});

  const onFinish = (values) => {
    const data = {
      ...modifiedFields, // Include only modified fields
      username: values.username,
      bio: values.bio,
      phone: values.phone,
      password: values.password,
      email: values.email,
    };
    dispatch(updateProfile(data));
  };
  const handleFieldChange = (changedFields) => {
    setModifiedFields((prevFields) => ({
      ...prevFields,
      ...changedFields,
    }));
  };
useEffect(()=>{
  if (error) {
    toast.error(error)
    dispatch(clearErrors())
  }
  if (isUpdated) {
    toast.success("Profile information updated!");
    router.push("/user/profile");
    dispatch(resetUserState());
  }
},[error,dispatch,router,isUpdated])
  return (
    <div className="container min-h-[86vh] w-full px-2 m-2 md:px-44 md:m-5 flex justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        className="w-full md:w-[50%] shadow-2xl rounded-2xl p-3 md:p-6"
        onFinish={onFinish}
        size="large"
        onValuesChange={handleFieldChange} // Track field changes
      >
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4 my-4">
          Update Your Information
        </h2>
        <Form.Item label="New Username" name="username">
          <Input
            placeholder="Enter a new username!"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input
            placeholder="Enter a new email!"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>
        <Form.Item label="Add Profile Bio" name="bio">
          <Input.TextArea
            rows={4}
            placeholder="Enter a new bio!"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>
        <Form.Item label="Add Phone" name="phone">
          <Input
            placeholder="Enter a new  phone!"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>
        <Form.Item
          label="Change Password"
          name="password"
          rules={[{ min: 6, message: "Password must be at least 6 characters!" }]} // Added password validation rules
        >
          <Input.Password
            placeholder="Enter a new password!"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            type="primary"
            htmlType="submit"
            loading={profileUpdateLoading}
            style={{ padding: "14px", height: "100%" }}
          >
            {profileUpdateLoading ? "Updating..." : "Update Information"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateInfoForm;
