import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const login = (data) => api.post("api/user/login", data);
export const register = (data) => api.post("api/user/register", data);
export const getUserData = () => api.get("api/user");
export const logout = () => api.post("/api/user/logout");

export const addTable = (data) => api.post("/api/table/", data);
export const getTables = () => api.get("/api/table");
export const updateTable = ({ tableId, ...tableData }) =>
  api.put(`/api/table/${tableId}`, tableData);

export const createOrderStripe = (data) =>
  api.post("/api/payment/create-order", data);

export const addOrder = (data) => api.post("/api/order/", data);
export const getOrders = () => api.get("/api/order");
export const updateOrderStatus = ({ orderId, orderStatus }) =>
  api.put(`/api/order/${orderId}`, { orderStatus });
