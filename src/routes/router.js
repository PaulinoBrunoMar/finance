import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Home from "../components/home";
import PrivateRoutes from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
