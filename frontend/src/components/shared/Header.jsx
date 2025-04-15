import React from "react";
import logo from "../../assets/images/logo.png";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { CiBellOn, CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log("Logout success data: ", data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log("Logout error: ", error);
    },
  });

  const handleLogout = () => {
    console.log("Logging out...");
    logoutMutation.mutate();
  };
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-paleBlue-500">
      {/* Logo */}
      <div className="flex items-center gap-2" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-semibold text-paleBlue-100">Restro</h1>
      </div>

      {/* SearchBar */}
      <div className="flex items-center gap-2 bg-paleBlue-600 rounded-[20px] px-5 py-2 w-[500px]">
        <FaSearch className="text-paleBlue-100" />
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded-md outline-none bg-paleBlue-600 text-paleBlue-100"
        />
      </div>

      {/* Logged user details */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div
            className="bg-paleBlue-600 rounded-[15px] p-3 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <MdDashboard className="text-2xl text-paleBlue-100" />
          </div>
        )}

        <div className="bg-paleBlue-600 rounded-[15px] p-3 cursor-pointer">
          <CiBellOn className="text-2xl text-paleBlue-100" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaRegUser className="text-4xl text-paleBlue-100" />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold tracking-wide text-md text-paleBlue-100">
              {userData.name || "Test"}
            </h1>
            <p className="text-xs font-medium text-paleBlue-300">
              {userData.role || "N/A"}
            </p>
          </div>
          <CiLogout
            onClick={handleLogout}
            className="ml-2 text-paleBlue-200"
            size={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
