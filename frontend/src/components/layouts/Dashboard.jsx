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

const DataTable = ({ data, columns }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    columns.some((column) =>
      String(item[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="py-2 px-4 border-b text-sm font-medium text-gray-600"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="py-2 px-4 border-b text-sm text-gray-700"
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-2 px-4 text-center text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Page {currentPage} of {totalPages || 1}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Customers = () => {
  const customerData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    // Add more sample data as needed
  ];

  const customerColumns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "phone", title: "Phone" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Customers</h2>
      <DataTable data={customerData} columns={customerColumns} />
    </div>
  );
};
const Products = () => {
  const productData = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: "$999.99",
      stock: 25,
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: "$699.99",
      stock: 50,
    },
    {
      id: 3,
      name: "Headphones",
      category: "Accessories",
      price: "$199.99",
      stock: 150,
    },
    // Add more sample data as needed
  ];

  const productColumns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Product Name" },
    { key: "category", title: "Category" },
    { key: "price", title: "Price" },
    { key: "stock", title: "Stock" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Products</h2>
      <DataTable data={productData} columns={productColumns} />
    </div>
  );
};

const Orders = () => {
  const orderData = [
    {
      id: "#12345",
      customer: "John Doe",
      product: "Gaming Mouse",
      amount: "$99.99",
    },
    {
      id: "#12346",
      customer: "Jane Smith",
      product: "Keyboard",
      amount: "$159.99",
    },
    // Add more sample data as needed
  ];

  const orderColumns = [
    { key: "id", title: "Order ID" },
    { key: "customer", title: "Customer" },
    { key: "product", title: "Product" },
    { key: "amount", title: "Amount" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Orders</h2>
      <DataTable data={orderData} columns={orderColumns} />
    </div>
  );
};

// export { Customers, Orders };

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard"); // State for active tab

  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return <Products />;
      case "customers":
        return <Customers />;
      case "orders":
        return <Orders />;
      default:
        return (
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
        );
    }
  };

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
                  src="/images/products/product2.png"
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
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "dashboard"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <TrendingUp className="h-5 w-5" />
                <span className="ml-3">Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "products"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <Package className="h-5 w-5" />
                <span className="ml-3">Products</span>
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "orders"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-3">Orders</span>
              </button>
              <button
                onClick={() => setActiveTab("customers")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "customers"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <Users className="h-5 w-5" />
                <span className="ml-3">Customers</span>
              </button>
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
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
