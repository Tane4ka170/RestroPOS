import React, { useState } from "react";

const Register = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  return (
    <div>
      <form>
        <div>
          <label className="block text-paleBlue-200 mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-paleBlue-200">
            <input
              type="text"
              name="name"
              placeholder="Enter employee name"
              className="bg-transparent flex-1 text-paleBlue-800 focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-paleBlue-200">
            <input
              type="text"
              name="email"
              placeholder="Enter employee email"
              className="bg-transparent flex-1 text-paleBlue-800 focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
            Employee Phone
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-paleBlue-200">
            <input
              type="text"
              name="phone"
              placeholder="Enter employee phone"
              className="bg-transparent flex-1 text-paleBlue-800 focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
            Password
          </label>
          <div className="flex items-center rounded-lg p-5 px-4 bg-paleBlue-200">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="bg-transparent flex-1 text-paleBlue-800 focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
            Choose your role
          </label>
          <div className="flex items-center gap-3 mt-4">
            {["Waiter", "Cashier", "Admin"].map((role) => {
              return (
                <button
                  className="bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-400"
                  key={role}
                  type="button"
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

        <button
          className="w-full mt-6 py-3 text-lg bg-aquaTeal-600 text-paleBlue-200 font-bold"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
