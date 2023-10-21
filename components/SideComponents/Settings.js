import { Divider } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SettingsComponent = () => {
  const [settings, setSettings] = useState([
    { id: 1, name: "Option 1", value: true },
    { id: 2, name: "Option 2", value: false },
    { id: 3, name: "Option 3", value: true },
    { id: 4, name: "Option 4", value: false },
    { id: 5, name: "Option 5", value: true },
  ]);

  const handleCheckboxChange = (id) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: !setting.value } : setting
      )
    );
  };

  const handleEdit = (id) => {
    // Add edit logic here
    console.log(`Edit setting with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Add delete logic here
    console.log(`Delete setting with ID ${id}`);
  };
  const confirmUpdate = () => {
          toast.success("Settings Updated!")
}
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <Divider >Settings</Divider>

      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Setting Name</th>
            <th className="py-2 px-4 border-b">Value</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting) => (
            <tr key={setting.id}>
              <td className="py-2 px-4 border-b">{setting.name}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="checkbox"
                  checked={setting.value}
                  onChange={() => handleCheckboxChange(setting.id)}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="mr-2 text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(setting.id)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(setting.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center">
        <button className="custom-btn w-full h-full" onClick={confirmUpdate}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsComponent;
