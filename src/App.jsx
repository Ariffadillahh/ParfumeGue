import { Route, Routes } from "react-router";
import HomePage from "./User/HomePage";
import ShoppingCart from "./User/ShoppingCart";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import DetailParfume from "./User/DetailParfume";
import Collections from "./User/Collections";
import NotFoundPage from "./User/NotFoundPage";
import DetailOrder from "./admin/DetailOrder";
import FinishedOrders from "./admin/FinishedOrders";
import ContactUs from "./User/ContactUs";
import AllProducts from "./admin/AllProducts";
import UserMessages from "./admin/UserMessages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailParfume />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/FinishedOrders" element={<FinishedOrders />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/dashboard/Order-detail/:id" element={<DetailOrder />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/usermessage" element={<UserMessages />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
