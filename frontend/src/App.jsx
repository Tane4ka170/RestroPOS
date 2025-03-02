import { Route, Router, Routes } from "react-router-dom";
import { Auth, Home, Orders } from "./pages";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/"} element={<Auth />} />
        <Route path={"/"} element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
