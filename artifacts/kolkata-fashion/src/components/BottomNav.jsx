import { useLocation } from "wouter";
import { Home, Grid, Heart, ShoppingCart, User } from "lucide-react";

const tabs = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid, label: "Categories", path: "/category/all" },
  { icon: Heart, label: "Wishlist", path: "/wishlist" },
  { icon: ShoppingCart, label: "Cart", path: "/cart" },
  { icon: User, label: "Profile", path: "/admin" },
];

export default function BottomNav() {
  const [location, navigate] = useLocation();

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center justify-around h-14 px-1">
      {tabs.map(({ icon: Icon, label, path }) => {
        const isActive = path === "/" ? location === "/" : location.startsWith(path);
        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center gap-0.5 flex-1 py-1 transition-colors ${
              isActive ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
