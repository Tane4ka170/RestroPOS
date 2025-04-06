import { Route, Router, Routes, useLocation } from "react-router-dom";
import { Auth, Home, Menu, NotFound, Orders, Tables } from "./pages";
import Header from "./components/shared/Header";

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

function App() {
  return <Layout />;
}

export default App;
