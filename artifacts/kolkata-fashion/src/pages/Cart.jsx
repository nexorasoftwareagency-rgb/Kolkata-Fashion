import { useState } from "react";
import { useLocation } from "wouter";
import {
  Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowLeft,
  Truck, Tag, ChevronRight
} from "lucide-react";
import { useCart } from "../context/CartContext";

const WA_NUMBER = "919724649971";

function buildWhatsAppMessage(cart, grandTotal, delivery, customerName) {
  const name = customerName.trim() || "Customer";
  const itemLines = cart
    .map(
      (item, i) =>
        `${i + 1}. *${item.name}*\n` +
        `   • Color: ${item.color}\n` +
        `   • Size: ${item.size}\n` +
        `   • Qty: ${item.qty} pc${item.qty > 1 ? "s" : ""}\n` +
        `   • ₹${item.price.toLocaleString()} × ${item.qty} = ₹${(item.price * item.qty).toLocaleString()}`
    )
    .join("\n\n");

  return (
    `🛍️ *Kolkata Fashion Parsa – New Order*\n\n` +
    `*Customer:* ${name}\n\n` +
    `*Order Items:*\n${itemLines}\n\n` +
    `━━━━━━━━━━━━━━━\n` +
    `*Delivery:* ${delivery === 0 ? "FREE" : `₹${delivery}`}\n` +
    `*Total Amount: ₹${grandTotal.toLocaleString()}*\n` +
    `━━━━━━━━━━━━━━━\n\n` +
    `Please confirm my order. Thank you! 🙏`
  );
}

function CartItem({ item, onRemove, onQty }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-lg flex-shrink-0 bg-gray-50"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
          Kolkata Fashion Parsa
        </p>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mt-0.5 leading-snug">
          {item.name}
        </h3>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span
            className="w-3.5 h-3.5 rounded-full border border-gray-200 flex-shrink-0"
            style={{ backgroundColor: item.colorCode }}
          />
          <span className="text-xs text-gray-500">{item.color}</span>
          <span className="text-gray-200 text-xs">|</span>
          <span className="text-xs text-gray-500 font-medium">
            Size: <strong className="text-gray-700">{item.size}</strong>
          </span>
        </div>
        {item.mrp > item.price && (
          <p className="text-xs text-green-600 font-medium mt-1">
            Saving ₹{((item.mrp - item.price) * item.qty).toLocaleString()}
          </p>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => onQty(item.key, -1)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors active:bg-gray-100"
            >
              <Minus size={13} />
            </button>
            <span className="w-8 text-center text-sm font-bold text-gray-800">
              {item.qty}
            </span>
            <button
              onClick={() => onQty(item.key, 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors active:bg-gray-100"
            >
              <Plus size={13} />
            </button>
          </div>
          <div className="text-right">
            <p className="text-base font-bold text-gray-900">
              ₹{(item.price * item.qty).toLocaleString()}
            </p>
            {item.qty > 1 && (
              <p className="text-[11px] text-gray-400">
                ₹{item.price.toLocaleString()} each
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.key)}
        className="self-start p-1.5 text-gray-300 hover:text-red-400 transition-colors mt-1"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

export default function Cart() {
  const [, navigate] = useLocation();
  const { cart, removeFromCart, updateQty, cartTotal, cartSavings } = useCart();
  const [customerName, setCustomerName] = useState("");

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const delivery = cartTotal >= 499 ? 0 : 49;
  const grandTotal = cartTotal + delivery;

  const handleWhatsAppOrder = () => {
    const msg = buildWhatsAppMessage(cart, grandTotal, delivery, customerName);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4 pb-16 sm:pb-0">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
          <ShoppingBag size={40} className="text-blue-300" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Your Cart is Empty</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          Looks like you haven't added anything yet. Browse our latest styles!
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-2 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors"
        >
          Shop Now
        </button>
        <button
          onClick={() => navigate("/category/women")}
          className="text-sm text-blue-600 font-semibold flex items-center gap-1"
        >
          Browse Women's Collection <ChevronRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-36 sm:pb-8">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">
            My Cart{" "}
            <span className="text-gray-400 font-normal text-base">
              ({totalQty} item{totalQty !== 1 ? "s" : ""})
            </span>
          </h1>
        </div>

        {/* Free delivery banner */}
        {delivery > 0 && (
          <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-2.5 mb-3 flex items-center gap-2 text-sm">
            <Truck size={16} className="text-orange-400 flex-shrink-0" />
            <span className="text-orange-700">
              Add <strong>₹{(499 - cartTotal).toLocaleString()}</strong> more for{" "}
              <strong>FREE delivery</strong>
            </span>
          </div>
        )}
        {delivery === 0 && (
          <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-2.5 mb-3 flex items-center gap-2 text-sm">
            <Truck size={16} className="text-green-500 flex-shrink-0" />
            <span className="text-green-700 font-medium">
              You've unlocked FREE delivery! 🎉
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3">
            {cart.map((item) => (
              <CartItem
                key={item.key}
                item={item}
                onRemove={removeFromCart}
                onQty={updateQty}
              />
            ))}
          </div>

          {/* Right panel */}
          <div className="space-y-3">
            {/* Customer name */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                Your Name (for order)
              </h3>
              <input
                type="text"
                placeholder="e.g. Priya Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-50 transition-colors"
              />
              <p className="text-xs text-gray-400 mt-1.5">
                Name will appear in the WhatsApp order message
              </p>
            </div>

            {/* Offers */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag size={15} className="text-blue-500" />
                <h3 className="text-sm font-bold text-gray-800">Offers</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>10% off on first order | Use: <strong>FIRST10</strong></span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>5% cashback on UPI payments</span>
                </div>
              </div>
            </div>

            {/* Price summary */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-3">
                Price Details
              </h3>
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    Price ({totalQty} item{totalQty !== 1 ? "s" : ""})
                  </span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                {cartSavings > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>−₹{cartSavings.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery Charges</span>
                  <span
                    className={
                      delivery === 0 ? "text-green-600 font-semibold" : ""
                    }
                  >
                    {delivery === 0 ? "FREE" : `₹${delivery}`}
                  </span>
                </div>
                <div className="border-t border-dashed border-gray-100 pt-2.5 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total Amount</span>
                  <span>₹{grandTotal.toLocaleString()}</span>
                </div>
                {cartSavings > 0 && (
                  <p className="text-xs text-green-600 bg-green-50 rounded-lg px-3 py-1.5 font-medium text-center">
                    🎉 You're saving ₹{cartSavings.toLocaleString()} on this order!
                  </p>
                )}
              </div>
            </div>

            {/* WhatsApp order button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-colors text-sm"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </button>
            <p className="text-xs text-center text-gray-400 leading-relaxed">
              Your order details will be pre-filled in WhatsApp.
              <br />
              We'll confirm your order within minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-40 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">
            {totalQty} item{totalQty !== 1 ? "s" : ""} · Total
          </span>
          <span className="text-base font-bold text-gray-900">
            ₹{grandTotal.toLocaleString()}
          </span>
        </div>
        <button
          onClick={handleWhatsAppOrder}
          className="w-full flex items-center justify-center gap-2 bg-green-500 active:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors"
        >
          <MessageCircle size={18} />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}
