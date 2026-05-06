import { useState } from "react";
import { useLocation } from "wouter";
import {
  ArrowLeft, User, Phone, MapPin, Package, Heart,
  ChevronRight, Edit2, Plus, Star, Truck
} from "lucide-react";
import { products } from "../data/products";

const MOCK_PROFILE = {
  name: "Priya Sharma",
  phone: "+91 97246 49971",
  email: "priya.sharma@gmail.com",
  addresses: [
    {
      id: 1,
      label: "Home",
      line1: "12, Shanti Nagar, Near Main Bazaar",
      line2: "Parsa, Bihar – 845415",
      default: true,
    },
    {
      id: 2,
      label: "Work",
      line1: "Block C, Government Office Complex",
      line2: "Muzaffarpur, Bihar – 842001",
      default: false,
    },
  ],
};

const MOCK_ORDERS = [
  {
    id: "KFP20240501",
    date: "1 May 2024",
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50",
    items: [
      { name: "Floral Anarkali Kurti", color: "Rose Pink", size: "M", qty: 1, price: 699 },
      { name: "Churidar Leggings", color: "Black", size: "M", qty: 2, price: 249 },
    ],
    total: 1197,
  },
  {
    id: "KFP20240418",
    date: "18 Apr 2024",
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50",
    items: [
      { name: "Banarasi Silk Saree", color: "Deep Red", size: "Free Size", qty: 1, price: 2499 },
    ],
    total: 2499,
  },
  {
    id: "KFP20240330",
    date: "30 Mar 2024",
    status: "Returned",
    statusColor: "text-orange-600 bg-orange-50",
    items: [
      { name: "Women's Casual Top", color: "Mint Green", size: "L", qty: 1, price: 409 },
    ],
    total: 409,
  },
];

const WISHLIST_IDS = [1, 8, 10];

function AvatarCircle({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
      <span className="text-2xl font-bold text-white">{initials}</span>
    </div>
  );
}

function SectionCard({ title, icon: Icon, action, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-blue-500" />
          <h2 className="text-sm font-bold text-gray-800">{title}</h2>
        </div>
        {action && (
          <button className="text-xs text-blue-600 font-semibold flex items-center gap-0.5">
            {action} <ChevronRight size={12} />
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function Profile() {
  const [, navigate] = useLocation();
  const [profile] = useState(MOCK_PROFILE);
  const [activeTab, setActiveTab] = useState("orders");

  const wishlistProducts = products.filter((p) => WISHLIST_IDS.includes(p.id));

  return (
    <div className="bg-gray-50 min-h-screen pb-20 sm:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white pb-12 pt-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-lg font-bold">My Profile</h1>
          </div>
          <div className="flex items-end gap-4">
            <AvatarCircle name={profile.name} />
            <div className="flex-1 pb-1">
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <p className="text-blue-100 text-sm mt-0.5">{profile.phone}</p>
              <p className="text-blue-200 text-xs mt-0.5">{profile.email}</p>
            </div>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors self-start">
              <Edit2 size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-3 sm:px-6 -mt-6 space-y-4">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Orders", value: MOCK_ORDERS.length },
            { label: "Wishlist", value: WISHLIST_IDS.length },
            { label: "Reviews", value: 5 },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-gray-100 shadow-sm py-3 text-center"
            >
              <p className="text-2xl font-extrabold text-gray-900">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-xl border border-gray-100 shadow-sm p-1 gap-1">
          {[
            { key: "orders", label: "Orders", icon: Package },
            { key: "wishlist", label: "Wishlist", icon: Heart },
            { key: "addresses", label: "Addresses", icon: MapPin },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Orders tab */}
        {activeTab === "orders" && (
          <div className="space-y-3">
            {MOCK_ORDERS.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">
                      Order #{order.id}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{order.date}</p>
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="px-4 py-3 space-y-2">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start text-sm">
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 leading-snug">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.color} · Size {item.size} · Qty {item.qty}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 ml-3">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Truck size={12} />
                    <span>
                      {order.status === "Delivered"
                        ? "Delivered successfully"
                        : "Return processed"}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    ₹{order.total.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wishlist tab */}
        {activeTab === "wishlist" && (
          <div className="space-y-3">
            {wishlistProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm">
                <Heart size={40} className="text-gray-200 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">No wishlist items yet</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-3 text-blue-600 font-semibold text-sm"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => {
                const v = product.variants[0];
                const s = Object.values(v.sizes)[0];
                const disc = Math.round(((s.mrp - s.price) / s.mrp) * 100);
                return (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex gap-3 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <img
                      src={v.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover rounded-lg flex-shrink-0 bg-gray-50"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded font-semibold">
                          {product.rating} ★
                        </span>
                        <span className="text-xs text-gray-400">
                          ({product.reviews.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-base font-bold text-gray-900">
                          ₹{s.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{s.mrp.toLocaleString()}
                        </span>
                        <span className="text-xs font-semibold text-green-600">
                          {disc}% off
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 self-center flex-shrink-0" />
                  </div>
                );
              })
            )}
            <button
              onClick={() => navigate("/")}
              className="w-full text-center py-3 text-sm text-blue-600 font-semibold bg-white rounded-xl border border-blue-100 shadow-sm hover:bg-blue-50 transition-colors"
            >
              + Browse More Products
            </button>
          </div>
        )}

        {/* Addresses tab */}
        {activeTab === "addresses" && (
          <div className="space-y-3">
            {profile.addresses.map((addr) => (
              <div
                key={addr.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        addr.default
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {addr.label}
                    </span>
                    {addr.default && (
                      <span className="text-xs text-green-600 font-medium">
                        Default
                      </span>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Edit2 size={14} />
                  </button>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{addr.line1}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{addr.line2}</p>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full flex items-center justify-center gap-2 py-3 text-sm text-blue-600 font-semibold bg-white rounded-xl border-2 border-dashed border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
              <Plus size={16} />
              Add New Address
            </button>
          </div>
        )}

        {/* Account options */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {[
            { label: "My Reviews & Ratings", icon: Star },
            { label: "Notifications", icon: Package },
            { label: "Help & Support", icon: Phone },
          ].map(({ label, icon: Icon }, i, arr) => (
            <button
              key={label}
              className={`w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors ${
                i < arr.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate("/admin")}
          className="w-full text-center py-3 text-sm text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Switch to Admin Dashboard
        </button>
      </div>
    </div>
  );
}
