import { useState } from "react";
import { useLocation } from "wouter";
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";

const CATEGORIES = [
  { label: "Men", path: "/category/men" },
  { label: "Women", path: "/category/women" },
  { label: "Kids", path: "/category/kids" },
  { label: "New Arrivals", path: "/category/new" },
  { label: "Sale", path: "/category/sale" },
];

export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const [, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/category/all?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Top bar */}
        <div className="flex items-center gap-2 sm:gap-4 h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex-shrink-0 flex flex-col leading-none"
          >
            <span className="text-base sm:text-xl font-800 font-extrabold text-gray-900 tracking-tight">
              Kolkata<span className="text-blue-600">Fashion</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-pink-500 font-medium tracking-widest uppercase -mt-0.5">
              Parsa, Bihar
            </span>
          </button>

          {/* Search bar - desktop */}
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
          <div className="flex items-center gap-1 sm:gap-3 ml-auto">
            <button
              onClick={() => navigate("/wishlist")}
              className="relative p-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate("/admin")}
              className="hidden sm:flex items-center gap-1 p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <User size={20} />
            </button>
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

        {/* Category nav - desktop */}
        <nav className="hidden sm:flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => navigate(cat.path)}
              className="flex-shrink-0 px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors whitespace-nowrap"
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/admin")}
            className="flex-shrink-0 ml-auto px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
          >
            Admin
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => { navigate(cat.path); setMenuOpen(false); }}
              className="text-left py-2 text-sm font-medium text-gray-700 border-b border-gray-50"
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => { navigate("/admin"); setMenuOpen(false); }}
            className="text-left py-2 text-sm font-medium text-gray-700"
          >
            Admin Dashboard
          </button>
        </div>
      )}
    </header>
  );
}
