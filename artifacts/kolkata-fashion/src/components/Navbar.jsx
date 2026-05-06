import { useState } from "react";
import { useLocation } from "wouter";
import { Search, Heart, ShoppingCart, User, Menu, X, LayoutDashboard } from "lucide-react";
import { useCart } from "../context/CartContext";

const CATEGORIES = [
  { label: "Men", path: "/category/men" },
  { label: "Women", path: "/category/women" },
  { label: "Kids", path: "/category/kids" },
  { label: "New Arrivals", path: "/category/new" },
  { label: "Sale", path: "/category/sale" },
];

export default function Navbar() {
  const [, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim())
      navigate(`/category/all?q=${encodeURIComponent(searchQuery)}`);
  };

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Top bar */}
        <div className="flex items-center gap-2 sm:gap-4 h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => go("/")}
            className="flex-shrink-0 flex flex-col leading-none"
          >
            <span className="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight">
              Kolkata<span className="text-blue-600">Fashion</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-pink-500 font-medium tracking-widest uppercase -mt-0.5">
              Parsa, Bihar
            </span>
          </button>

          {/* Search bar — desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex flex-1 items-center bg-gray-50 border border-gray-200 rounded-full overflow-hidden mx-2"
          >
            <input
              type="text"
              placeholder="Search for clothes, brands and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Search size={16} />
            </button>
          </form>

          {/* Right icons */}
          <div className="flex items-center gap-0.5 sm:gap-2 ml-auto">
            {/* Wishlist */}
            <button
              onClick={() => go("/wishlist")}
              className="p-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Heart size={20} />
            </button>

            {/* Cart with badge */}
            <button
              onClick={() => go("/cart")}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[9px] rounded-full min-w-[16px] h-4 flex items-center justify-center font-bold px-0.5 leading-none">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Profile — desktop */}
            <button
              onClick={() => go("/profile")}
              className="hidden sm:flex items-center gap-1.5 p-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="My Profile"
            >
              <User size={20} />
            </button>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden p-2 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form
          onSubmit={handleSearch}
          className="sm:hidden flex items-center bg-gray-50 border border-gray-200 rounded-full overflow-hidden mb-2"
        >
          <input
            type="text"
            placeholder="Search clothes, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button type="submit" className="px-3 py-2 bg-blue-600 text-white">
            <Search size={14} />
          </button>
        </form>

        {/* Category nav — desktop */}
        <nav className="hidden sm:flex items-center gap-1 pb-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => go(cat.path)}
              className="flex-shrink-0 px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors whitespace-nowrap"
            >
              {cat.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => go("/profile")}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            >
              <User size={14} />
              Profile
            </button>
            <button
              onClick={() => go("/admin")}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            >
              <LayoutDashboard size={14} />
              Admin
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider py-2">
              Categories
            </p>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                onClick={() => go(cat.path)}
                className="w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600 transition-colors"
              >
                {cat.label}
              </button>
            ))}
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider py-2 mt-1">
              Account
            </p>
            <button
              onClick={() => go("/profile")}
              className="w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-50 flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <User size={16} className="text-gray-400" />
              My Profile
            </button>
            <button
              onClick={() => go("/cart")}
              className="w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-50 flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart size={16} className="text-gray-400" />
              My Cart
              {cartCount > 0 && (
                <span className="ml-auto bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => go("/admin")}
              className="w-full text-left py-3 text-sm font-medium text-gray-700 flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <LayoutDashboard size={16} className="text-gray-400" />
              Admin Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
