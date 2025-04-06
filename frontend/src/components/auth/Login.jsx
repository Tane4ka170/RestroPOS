import React from "react";

const Login = () => {
  return (
    <div>
      <form>
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

        <button
          className="w-full mt-6 py-3 text-lg bg-aquaTeal-600 text-paleBlue-200 font-bold"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
