import { Route, Router, Routes, useLocation, Navigate } from "react-router-dom";
import { Auth, Home, Menu, NotFound, Orders, Tables } from "./pages";
import Header from "./components/shared/Header";
import { useSelector } from "react-redux";

function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/orders"} element={<Orders />} />
        <Route path={"/tables"} element={<Tables />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function ProtectedRoutes({ children }) {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
}

function App() {
  return <Layout />;
}

export default App;
