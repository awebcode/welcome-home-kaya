import React, { useEffect } from "react";
import { Avatar, Button, Card, Divider } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";
import { clearErrors, getSingleUser } from "@/redux/actions/userActions";
import Link from "next/link";

const Profile = () => {
  const { id } = useRouter().query;
  const { singleUserGetLoading, singleUser: user,error,user:currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
   if (id) {
     dispatch(getSingleUser(id));
   }

  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch,error]);

  if (singleUserGetLoading) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card
        title="User Profile"
        // style={{ width: "100%", maxWidth: "90%" }}
        className="p-5"
      >
        {user && (
          <>
            <div className="mb-4">
              <Avatar size={100} src={user.avatar} />

              <h1 className="text-lg font-semibold mb-2">{user.username}</h1>
              <h3 className="text-sm text-gray-600 mb-2">{user.email}</h3>
            </div>
            <Divider />
            <p className="text-lg font-semibold mb-2">#Id:{user._id}</p>

            <div className="mb-2">
              <strong>Bio:</strong> {user.bio || "Not provided"}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {user.phone || "Not provided"}
            </div>
            <Divider />
            <div className="mb-4">
              <strong>Role:</strong>{" "}
              {user.role === "admin" ? (
                <p className="text-green-500 inline text-sm mx-2">{user.role}</p>
              ) : (
                <p className="text-rose-500 inline text-sm mx-2">{user.role}</p>
              )}
            </div>
            {currentUser?.role === "admin" && (
              <Link href={`/admin/customers/edit/${user._id}`} className="text-blue-500">
                Update this user
              </Link>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default Profile;
