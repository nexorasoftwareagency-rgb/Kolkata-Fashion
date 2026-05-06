import { useLocation } from "wouter";
import { Home, Grid, Heart, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const tabs = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid, label: "Categories", path: "/category/all" },
  { icon: Heart, label: "Wishlist", path: "/wishlist" },
  { icon: ShoppingCart, label: "Cart", path: "/cart" },
  { icon: User, label: "Profile", path: "/profile" },
];

export default function BottomNav() {
  const [location, navigate] = useLocation();
  const { cartCount } = useCart();

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center justify-around h-14 px-1 safe-area-pb">
      {tabs.map(({ icon: Icon, label, path }) => {
        const isActive =
          path === "/" ? location === "/" : location.startsWith(path);
        const isCart = path === "/cart";

        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`relative flex flex-col items-center gap-0.5 flex-1 py-1 transition-colors ${
              isActive ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div className="relative">
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              {isCart && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] rounded-full min-w-[15px] h-[15px] flex items-center justify-center font-bold leading-none px-0.5">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
