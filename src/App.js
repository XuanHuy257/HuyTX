import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Logout from "./components/login/Logout";
import Profile from "./components/login/Profile";
import Products from "./components/Products";
import Dashboard from "./components/admin/DashBoard";
import About from "./components/About";
import Contact from "./components/Contact";
import DetailProduct from "./components/DetailProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/xemchitiet/:phoneId" element={<DetailProduct />} />
        <Route path="/categorymanagement/:option" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
