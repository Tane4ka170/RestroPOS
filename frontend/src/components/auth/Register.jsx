import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { register } from "../../https";

const Register = ({setIsRegister}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  const registerMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      
      setTimeout(() => {
        setIsRegister(false);
      }, 1500);
    },
    onError: (error) => {
      const { response } = error;
      const message = response.data.message;
      enqueueSnackbar(message, { variant: "error" });
    },
  });


  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
                  className={`bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-400 ${
                    formData.role === role ? "bg-royalBlue-600" : ""
                  }`}
                  key={role}
                  type="button"
                  onClick={() => handleRoleSelection(role)}
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
