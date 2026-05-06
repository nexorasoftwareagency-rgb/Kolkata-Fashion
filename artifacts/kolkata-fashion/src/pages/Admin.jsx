import { useState } from "react";
import {
  Package, ShoppingBag, Users, TrendingUp, Plus, Upload,
  Edit2, Trash2, Eye, Bell, Settings, Image, BarChart2,
  CheckCircle, Clock, XCircle
} from "lucide-react";
import { products } from "../data/products";

const STAT_CARDS = [
  { label: "Total Products", value: "124", change: "+12", icon: Package, color: "bg-blue-500" },
  { label: "Total Orders", value: "1,842", change: "+38 today", icon: ShoppingBag, color: "bg-green-500" },
  { label: "Total Customers", value: "5,210", change: "+127 this week", icon: Users, color: "bg-purple-500" },
  { label: "Monthly Revenue", value: "₹2.4L", change: "+18%", icon: TrendingUp, color: "bg-orange-500" },
];

const MOCK_ORDERS = [
  { id: "#ORD-001", customer: "Anjali Sharma", product: "Floral Anarkali Kurti", amount: "₹699", status: "delivered", date: "May 04" },
  { id: "#ORD-002", customer: "Rahul Gupta", product: "Slim Fit Stretch Jeans", amount: "₹999", status: "shipped", date: "May 05" },
  { id: "#ORD-003", customer: "Priya Singh", product: "Palazzo Suit Set", amount: "₹1,299", status: "pending", date: "May 06" },
  { id: "#ORD-004", customer: "Manoj Kumar", product: "Ethnic Cotton Kurta", amount: "₹799", status: "processing", date: "May 06" },
  { id: "#ORD-005", customer: "Sunita Devi", product: "Banarasi Silk Saree", amount: "₹2,499", status: "delivered", date: "May 03" },
];

const STATUS_CONFIG = {
  delivered: { label: "Delivered", icon: CheckCircle, color: "text-green-600 bg-green-50" },
  shipped: { label: "Shipped", icon: Clock, color: "text-blue-600 bg-blue-50" },
  pending: { label: "Pending", icon: Clock, color: "text-yellow-600 bg-yellow-50" },
  processing: { label: "Processing", icon: Clock, color: "text-purple-600 bg-purple-50" },
  cancelled: { label: "Cancelled", icon: XCircle, color: "text-red-600 bg-red-50" },
};

const TABS = ["Dashboard", "Products", "Orders", "Banners", "Analytics"];

function StatCard({ label, value, change, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-4">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-xl font-extrabold text-gray-900">{value}</p>
        <p className="text-xs text-green-600 font-medium">{change}</p>
      </div>
    </div>
  );
}

function DashboardTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STAT_CARDS.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "Avg. Order Value", value: "₹847", sub: "Last 30 days" },
          { label: "Return Rate", value: "2.3%", sub: "Industry avg: 5%" },
          { label: "Customer Satisfaction", value: "4.6★", sub: "Based on reviews" },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Recent Orders</h3>
          <button className="text-xs text-blue-600 font-semibold">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <tr>
                <th className="text-left px-4 py-3">Order ID</th>
                <th className="text-left px-4 py-3">Customer</th>
                <th className="text-left px-4 py-3 hidden sm:table-cell">Product</th>
                <th className="text-left px-4 py-3">Amount</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_ORDERS.map((order) => {
                const { label, icon: StatusIcon, color } = STATUS_CONFIG[order.status];
                return (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-blue-600">{order.id}</td>
                    <td className="px-4 py-3 text-gray-700">{order.customer}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell truncate max-w-32">{order.product}</td>
                    <td className="px-4 py-3 font-bold text-gray-900">{order.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>
                        <StatusIcon size={11} />
                        {label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductsTab() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Product Management</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h4 className="font-bold text-gray-900 mb-4">New Product Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Product Name</label>
              <input type="text" placeholder="e.g. Floral Anarkali Kurti" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Category</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400">
                <option>Women</option>
                <option>Men</option>
                <option>Kids</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Base Price (₹)</label>
              <input type="number" placeholder="699" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">MRP (₹)</label>
              <input type="number" placeholder="1299" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-gray-600 block mb-1">Description</label>
              <textarea rows={3} placeholder="Product description..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 resize-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-gray-600 block mb-1">Product Images</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 transition-colors cursor-pointer">
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Drag & drop images or <span className="text-blue-600 font-semibold">browse</span></p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB each. Upload 4-5 images per color.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
              Save Product
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <tr>
                <th className="text-left px-4 py-3">Product</th>
                <th className="text-left px-4 py-3 hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3">Price</th>
                <th className="text-left px-4 py-3 hidden sm:table-cell">Rating</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((p) => {
                const price = Object.values(p.variants[0].sizes)[0].price;
                return (
                  <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.variants[0].images[0]}
                          alt={p.name}
                          className="w-10 h-12 object-cover rounded-lg bg-gray-100"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-800 line-clamp-1">{p.name}</p>
                          <p className="text-xs text-gray-400">{p.variants.length} variants</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="capitalize text-gray-600">{p.category}</span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900">₹{price}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">{p.rating}★</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Eye size={14} /></button>
                        <button className="p-1.5 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"><Edit2 size={14} /></button>
                        <button className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function BannersTab() {
  const BANNERS = [
    { id: 1, title: "Grand Festival Sale", status: "active", views: "12.4K" },
    { id: 2, title: "New Arrivals Summer", status: "active", views: "8.2K" },
    { id: 3, title: "Kurti Collection", status: "inactive", views: "5.6K" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Banner Management</h3>
        <button className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl">
          <Plus size={16} /> Add Banner
        </button>
      </div>
      <div className="grid gap-3">
        {BANNERS.map((b) => (
          <div key={b.id} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4">
            <div className="w-20 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{b.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{b.views} views</p>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${b.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {b.status}
            </span>
            <div className="flex gap-1">
              <button className="p-1.5 text-gray-500 hover:bg-gray-50 rounded-lg"><Edit2 size={14} /></button>
              <button className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
      {/* Upload zone */}
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-300 transition-colors cursor-pointer">
        <Image size={32} className="mx-auto text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">Upload new banner image</p>
        <p className="text-xs text-gray-400 mt-1">Recommended size: 1200×400px</p>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const values = [42, 58, 73, 65, 89];
  const max = Math.max(...values);
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-gray-900">Sales Analytics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Top Category", value: "Women's Wear", sub: "48% of total sales" },
          { label: "Best Seller", value: "Banarasi Saree", sub: "4,520 ratings" },
          { label: "Most Returned", value: "Kids T-Shirts", sub: "3.2% return rate" },
          { label: "Avg. Sessions/Day", value: "1,240", sub: "+22% this month" },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="text-lg font-bold text-gray-900 mt-0.5">{value}</p>
            <p className="text-xs text-gray-400">{sub}</p>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart2 size={18} className="text-blue-500" />
          Monthly Revenue (₹ in thousands)
        </h4>
        <div className="flex items-end gap-3 h-32">
          {months.map((m, i) => (
            <div key={m} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs font-semibold text-gray-700">{values[i]}K</span>
              <div
                className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                style={{ height: `${(values[i] / max) * 100}%` }}
              />
              <span className="text-xs text-gray-400">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="bg-gray-50 min-h-screen pb-20 sm:pb-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">Admin Dashboard</h1>
            <p className="text-xs text-gray-500 mt-0.5">Kolkata Fashion Parsa — Store Management</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-gray-700 transition-colors">
              <Bell size={18} />
            </button>
            <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-gray-700 transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl border border-gray-100 p-1 mb-5 overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === tab ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Dashboard" && <DashboardTab />}
        {activeTab === "Products" && <ProductsTab />}
        {activeTab === "Orders" && (
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Order Management</h3>
              <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 outline-none">
                <option>All Orders</option>
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-4 py-3">Order ID</th>
                    <th className="text-left px-4 py-3">Customer</th>
                    <th className="text-left px-4 py-3 hidden sm:table-cell">Product</th>
                    <th className="text-left px-4 py-3 hidden sm:table-cell">Date</th>
                    <th className="text-left px-4 py-3">Amount</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {MOCK_ORDERS.map((order) => {
                    const { label, icon: StatusIcon, color } = STATUS_CONFIG[order.status];
                    return (
                      <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-blue-600">{order.id}</td>
                        <td className="px-4 py-3 text-gray-700">{order.customer}</td>
                        <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{order.product}</td>
                        <td className="px-4 py-3 text-gray-400 text-xs hidden sm:table-cell">{order.date}</td>
                        <td className="px-4 py-3 font-bold">{order.amount}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>
                            <StatusIcon size={11} /> {label}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-xs text-blue-600 font-semibold hover:underline">Update</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "Banners" && <BannersTab />}
        {activeTab === "Analytics" && <AnalyticsTab />}
      </div>
    </div>
  );
}
