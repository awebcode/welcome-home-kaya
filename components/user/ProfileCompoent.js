import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Upload, Modal, Button, Spin, Divider } from "antd";
import { EditOutlined, LogoutOutlined, UploadOutlined } from "@ant-design/icons";
import { logout, updateProfile } from "@/redux/actions/userActions";
import { upload } from "@/utils/upload";
import ImgCrop from "antd-img-crop";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import { toast } from "react-toastify";
const Profile = () => {
  const Router = useRouter();
  const [imageUploading, setImageUploading] = useState(false);
  const { isAuthenticated, user } = useSelector((u) => u.user);
  const dispatch = useDispatch();
  const [avatarPreview, setAvatarPreview] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  // UPload avatar
  const handleUpload = async (file) => {
    console.log(file)
    // Handle file upload logic here
    // Once successful, update the user's avatar in Redux store
    setAvatarPreview(file);
    setImageUploading(true)
    const uploadedImage = await upload(file);
    console.log(uploadedImage)
    setImageUploading(false);
    dispatch(updateProfile({ ...user, avatar: uploadedImage.url }));
    

    // Optionally, update the user's avatar in local storage
    localStorage.setItem("user", JSON.stringify({ ...user, avatar: file }));
    setIsModalVisible(false);
  };

  if (isUpdated) {
    dispatch(resetUserState());
  }
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (!isAuthenticated && isLoggedIn === null) {
      Router.push("/");
    }
  }, [isAuthenticated, Router]);

//logout
  const logoutHandler = () => {
    dispatch(logout())
    
    toast.success("Logged out success!")
  }
  

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-4 md:p-8 w-[100%] mx-2 md:w-[60%] rounded-lg shadow-lg">
        {/* Avatar */}
        <div className="flex justify-center relative">
          <ImgCrop onModalOk={(file) => handleUpload(file)}>
            <Upload
              showUploadList={false}
              // customRequest={({ file }) => handleUpload(file)}
              // beforeUpload={(file) => handleUpload(file)}
              className="relative"
              openFileDialogOnClick={({ file }) => handleUpload(file)}
            >
              {imageUploading ? (
                <BeatLoader className="text-green-500" />
              ) : (
                <img
                  src={user?.avatar}
                  alt={user?.username}
                  className="w-20 md:w-28 h-20 md:h-28 rounded-full mb-4 cursor-pointer"
                  onClick={() => setIsModalVisible(true)}
                />
              )}
              {!imageUploading && (
                <EditOutlined className="cursor-pointer absolute bottom-2 right-1 text-gray-800 text-xl md:text-2xl " />
              )}
            </Upload>
          </ImgCrop>
        </div>
        <Divider className="bg-gray-300" />
        <div className="text-center">
          <h2 className="text-xl md:text-3xl capitalize font-bold mb-2">
            {user?.username}
          </h2>
          <Divider>
            <p className="text-gray-600 text-sm">{user?.bio || "Frontend Developer"}</p>
          </Divider>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-700">Email: {user?.email}</p>
          <p className="text-gray-700">Phone: {user?.phone || "+1 123-456-7890"}</p>
        </div>
        <Divider className="bg-gray-300" />
        <div className="my-4">
          <Link
            href={`/user/edit/${user?._id}`}
            className="my-4 text-blue-500 mx-2 text-sm"
          >
            Update your profile information
          </Link>
          
          <Divider className="bg-gray-300" />
          <h3 onClick={() => logoutHandler()} className="text-red-500 cursor-pointer">
            Logout
            <LogoutOutlined className="inline mx-2" />
          </h3>
          {/* <Link href={`/user/update-password`} className="text-sm text-blue-500">
            Update password
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
