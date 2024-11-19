import React, { useState } from "react";
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Menu,
  Bell,
  Search,
  Settings,
  ChevronDown,
  DollarSign,
  ShoppingBag,
  UserPlus,
} from "lucide-react";

// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p
          className={`text-sm mt-2 ${
            trend > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend > 0 ? "+" : ""}
          {trend}% from last month
        </p>
      </div>
      <div className="p-3 bg-blue-50 rounded-full">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  </div>
);

// Recent Orders Table
const RecentOrders = () => {
  const orders = [
    {
      id: "#12345",
      customer: "John Doe",
      product: "Gaming Mouse",
      status: "Delivered",
      amount: "$99.99",
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      product: "Mechanical Keyboard",
      status: "Processing",
      amount: "$159.99",
    },
    {
      id: "#12347",
      customer: "Mike Johnson",
      product: "Gaming Headset",
      status: "Pending",
      amount: "$79.99",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Product</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="py-3">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs 
                    ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Top Products Component
const TopProducts = () => {
  const products = [
    { name: "Gaming Mouse", sales: 245, revenue: "$24,500" },
    { name: "Mechanical Keyboard", sales: 190, revenue: "$30,400" },
    { name: "Gaming Headset", sales: 175, revenue: "$13,125" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">{product.sales} sales</p>
            </div>
            <p className="font-semibold">{product.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-4 flex items-center">
                <ShoppingBag className="h-6 w-6 text-blue-500" />
                <span className="ml-2 text-xl font-semibold">ShopDash</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Settings className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/api/placeholder/32/32"
                  alt="User avatar"
                />
                <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out z-30`}
      >
        <div className="flex flex-col h-full w-64 bg-white border-r">
          <div className="flex-1 overflow-y-auto pt-20">
            <nav className="px-2 space-y-1">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg"
              >
                <TrendingUp className="h-5 w-5" />
                <span className="ml-3">Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Package className="h-5 w-5" />
                <span className="ml-3">Products</span>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-3">Orders</span>
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Users className="h-5 w-5" />
                <span className="ml-3">Customers</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`md:pl-64 flex flex-col flex-1 transition-all duration-200 ${
          sidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Revenue"
                value="$54,375"
                icon={DollarSign}
                trend={12.5}
              />
              <StatsCard
                title="Total Orders"
                value="845"
                icon={ShoppingCart}
                trend={8.2}
              />
              <StatsCard
                title="Total Products"
                value="245"
                icon={Package}
                trend={-2.4}
              />
              <StatsCard
                title="New Customers"
                value="38"
                icon={UserPlus}
                trend={4.6}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2">
                <RecentOrders />
              </div>
              <div>
                <TopProducts />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
