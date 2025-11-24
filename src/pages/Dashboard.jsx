import { useState } from "react";

import StatCard from '../components/StatCard'
import ActivityItem from '../components/ActivityItem'
import QuickActionBtn from '../components/QuickActionBtn'


import { 
  DollarSign, 
  Users, 
  Package, 
  FolderKanban, 
  Plus 
} from "lucide-react";
import Header from "../components/Header"; 

const Dashboard = () => {
    const [setActiveModule] = useState("dashboard");
  return (
     <div className="min-h-screen bg-gray-50">
     <Header pageTitle="Dashboard Overview" />
      <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value="$245,890" icon={<DollarSign className="w-6 h-6" />} color="blue" trend="+12.5%" />
        <StatCard title="Total Customers" value="1,247" icon={<Users className="w-6 h-6" />} color="green" trend="+8.2%" />
        <StatCard title="Total Products" value="1,247" icon={<Package className="w-6 h-6" />} color="purple" trend="+3.1%" />
        <StatCard title="Active Projects" value="42" icon={<FolderKanban className="w-6 h-6" />} color="orange" trend="+5.4%" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <ActivityItem text="New customer added: Tech Solutions Inc." time="2 hours ago" />
            <ActivityItem text="Invoice #1234 paid by Digital Marketing Co." time="5 hours ago" />
            <ActivityItem text="New product added: Wireless Headphones" time="1 day ago" />
            <ActivityItem text="Project 'Website Redesign' completed" time="2 days ago" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionBtn icon={<Plus />} text="Add Customer" onClick={() => setActiveModule('crm')} />
            <QuickActionBtn icon={<Plus />} text="Add Product" onClick={() => setActiveModule('inventory')} />
            <QuickActionBtn icon={<Plus />} text="New Invoice" onClick={() => setActiveModule('finance')} />
            <QuickActionBtn icon={<Plus />} text="Add Employee" onClick={() => setActiveModule('hr')} />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
