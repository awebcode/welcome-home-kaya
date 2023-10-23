import { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile } from "@/redux/actions/userActions";
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
    dispatch(clearErrors());
  }
},[error,dispatch,router,isUpdated])
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
          Update Your Information
        </h2>
        <Form.Item label="New Username" name="username">
          <Input placeholder="Enter a new username!" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter a new email!" />
        </Form.Item>
        <Form.Item label="Add Profile Bio" name="bio">
          <Input.TextArea rows={4} placeholder="Enter a new bio!" />
        </Form.Item>
        <Form.Item label="Add Phone" name="phone">
          <Input placeholder="Enter a new  phone!" />
        </Form.Item>
        <Form.Item label="New Password" name="password">
          <Input.Password placeholder="Enter a new  password!" />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            type="primary"
            htmlType="submit"
            loading={profileUpdateLoading}
          >
            Update Information
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateInfoForm;
