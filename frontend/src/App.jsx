import { Route, Router, Routes } from "react-router-dom";
import { Auth, Home, Orders, Tables } from "./pages";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/orders"} element={<Orders />} />
        <Route path={"/tables"} element={<Tables />} />
      </Routes>
    </>
  );
}

export default App;
