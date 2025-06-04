import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../../https";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      const { _id, name, email, phone, role } = data.data;
      dispatch(setUser({ _id, name, email, phone, role }));
      navigate("/");
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mt-3 mb-2 text-sm font-medium text-paleBlue-200">
            Employee Email
          </label>
          <div className="flex items-center p-5 px-4 rounded-lg bg-paleBlue-200">
            <input
              type="text"
              name="email"
              placeholder="Enter employee email"
              className="flex-1 bg-transparent text-paleBlue-800 focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mt-3 mb-2 text-sm font-medium text-paleBlue-200">
            Password
          </label>
          <div className="flex items-center p-5 px-4 rounded-lg bg-paleBlue-200">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="flex-1 bg-transparent text-paleBlue-800 focus:outline-none"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="w-full py-3 mt-6 text-lg font-bold bg-aquaTeal-600 text-paleBlue-200"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
