import React from "react";
import { Modal, Button, Input } from "antd";
import { Toaster } from "react-hot-toast";

const CreateAdminModal = ({
  handleChange,
  handleSubmit,
  onCancel,
  openModal,
  loading,
  adminDetails,
  currentColor,
}) => {
  return (
    <Modal
      title="Register Admin"
      open={openModal}
      onCancel={onCancel}
      footer={null}
    >
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={adminDetails.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter admin first name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={adminDetails.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter admin last name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={adminDetails.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter admin email"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={adminDetails.phoneNumber}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>

          <select
            name="role"
            id="role"
            required
            value={adminDetails.role}
            onChange={handleChange}
            className="mt-1 block w-full border-1 h-9 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          >
            <option defaultValue="">Select role</option>
            <option value="administrator">Administrator</option>
            <option value="manager">Manager</option>
            <option value="agent">agent</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input.Password
            id="password"
            name="password"
            value={adminDetails.password}
            onChange={handleChange}
            required
            className="mt-1 flex w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter admin password"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={adminDetails.confirmPassword}
            onChange={handleChange}
            required
            className="mt-1  w-full flex border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Confirm admin password"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full h-10 rounded hover:opacity-90 text-white text-sm transition-all"
            style={{ backgroundColor: currentColor }}
          >
            {" "}
            Register
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateAdminModal;
