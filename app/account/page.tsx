"use client";

import { useState } from "react";

export default function Page() {
  //INTERNAL STATE
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = () => {
    alert("Submitting....");
    alert("Changes was applied...");
  };

  const handleCancel = () => {
    alert("Cancelling...");
    alert("Cancellation was successful...");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-red-500 text-base font-medium text-center">
        Edit Your Profile
      </h2>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-6">
          <label className="block flex-1">
            <span className="block text-xs md:text-sm text-slate-500">
              First Name
            </span>
            <input
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block flex-1">
            <span className="block text-xs md:text-sm text-slate-500">
              Last Name
            </span>
            <input
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </div>

        <div className="flex items-center space-x-6">
          <label className="block flex-1">
            <span className="block text-xs md:text-sm text-slate-500">
              Email
            </span>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block flex-1">
            <span className="block text-xs md:text-sm text-slate-500">
              Address
            </span>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </div>

        <label className="block flex-1">
          <span className="block text-xs md:text-sm text-slate-500">
            Password Change
          </span>
          <input
            placeholder="Current password"
            name="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <label className="block flex-1">
          <input
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            name="newpassword"
            className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <label className="block flex-1">
          <input
            placeholder="Confirm password"
            name="confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full p-2 md:p-3 bg-gray-100 border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <div className="self-end flex items-center space-x-6 ">
          <button
            className="self-starttext-gray-700 flex items-center justify-center text-xs md:text-base font-medium"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="self-start p-2 flex items-center justify-center text-xs md:text-base font-medium text-gray-50 bg-red-500 rounded"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
