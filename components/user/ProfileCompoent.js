import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img
            src="/avatar.png"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mb-4"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">John Doe</h2>
          <p className="text-gray-600 text-sm">Frontend Developer</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-700">Email: john.doe@example.com</p>
          <p className="text-gray-700">Phone: +1 123-456-7890</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-gray-700">
            I'm a passionate frontend developer with experience in building modern web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
