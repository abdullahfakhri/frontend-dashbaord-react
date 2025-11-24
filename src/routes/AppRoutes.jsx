import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardHR from "../pages/DashboardHR";
import DashboardCRM from "../pages/DashboardCRM";
import DashboardInventory from "../pages/DashboardInventory";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" elemen={<Dashboard/>} />
        <Route path="/hr" element={<DashboardHR />} />
        <Route path="/crm" element={<DashboardCRM />} />
        <Route path="/inventory" element={<DashboardInventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
