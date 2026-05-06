import { useState } from "react";
import { useLocation } from "wouter";
import { Heart } from "lucide-react";

function StarRating({ rating }) {
  return (
    <span className="inline-flex items-center gap-0.5 bg-green-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
      {rating} ★
    </span>
  );
}

export default function ProductCard({ product, compact = false }) {
  const [, navigate] = useLocation();
  const [wishlisted, setWishlisted] = useState(false);

  const firstVariant = product.variants[0];
  const firstSize = Object.keys(firstVariant.sizes)[0];
  const { price, mrp } = firstVariant.sizes[firstSize];
  const discount = Math.round(((mrp - price) / mrp) * 100);

  const handleClick = () => navigate(`/product/${product.id}`);
  const toggleWishlist = (e) => {
    e.stopPropagation();
    setWishlisted(!wishlisted);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow group"
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gray-50 ${compact ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
        <img
          src={firstVariant.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {discount >= 30 && (
          <span className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {discount}% OFF
          </span>
        )}
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            size={14}
            className={wishlisted ? "fill-pink-500 text-pink-500" : "text-gray-400"}
          />
        </button>
        {/* Color dots */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {product.variants.slice(0, 4).map((v, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-white/60 shadow-sm"
              style={{ backgroundColor: v.colorCode }}
            />
          ))}
          {product.variants.length > 4 && (
            <span className="w-3 h-3 rounded-full bg-gray-300 border border-white flex items-center justify-center text-[8px] text-gray-600">
              +{product.variants.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-2.5">
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide truncate">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mt-0.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <span className="text-base font-bold text-gray-900">₹{price.toLocaleString()}</span>
          <span className="text-xs text-gray-400 line-through">₹{mrp.toLocaleString()}</span>
          {discount > 0 && (
            <span className="text-xs font-semibold text-green-600">{discount}% off</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-gray-400">({product.reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
}
