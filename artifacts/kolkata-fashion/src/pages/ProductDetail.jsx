import { useState } from "react";
import { useParams, useLocation } from "wouter";
import {
  Heart, ShoppingCart, MessageCircle, Truck, RefreshCw,
  Shield, ChevronLeft, ChevronRight, Star
} from "lucide-react";
import { getProductById, getRelatedProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

function ImageGallery({ images }) {
  const [main, setMain] = useState(0);

  const prev = () => setMain((m) => (m - 1 + images.length) % images.length);
  const next = () => setMain((m) => (m + 1) % images.length);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={images[main]}
          alt="Product"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <ChevronRight size={16} />
        </button>
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
          {main + 1}/{images.length}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setMain(i)}
            className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-colors ${i === main ? "border-blue-500" : "border-gray-200"}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function RatingBar({ label, count, total }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-8 text-gray-500">{label}★</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 text-gray-400 text-right">{count}</span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const product = getProductById(id);

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <p className="text-5xl">😕</p>
        <p className="text-gray-600 font-medium">Product not found</p>
        <button onClick={() => navigate("/")} className="text-blue-600 font-semibold text-sm">
          ← Back to Home
        </button>
      </div>
    );
  }

  const variant = product.variants[selectedColorIdx];
  const sizes = Object.keys(variant.sizes);
  const currentPrice = selectedSize ? variant.sizes[selectedSize].price : Object.values(variant.sizes)[0].price;
  const currentMrp = selectedSize ? variant.sizes[selectedSize].mrp : Object.values(variant.sizes)[0].mrp;
  const discount = Math.round(((currentMrp - currentPrice) / currentMrp) * 100);
  const related = getRelatedProducts(product);

  const handleColorChange = (idx) => {
    setSelectedColorIdx(idx);
    setSelectedSize(null);
  };

  const handleAddToCart = () => {
    if (!selectedSize) { alert("Please select a size first!"); return; }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Sample rating breakdown
  const ratingBreakdown = { 5: 720, 4: 380, 3: 90, 2: 30, 1: 20 };
  const totalRatings = Object.values(ratingBreakdown).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-gray-50 min-h-screen pb-24 sm:pb-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <button onClick={() => navigate("/")} className="hover:text-blue-600">Home</button>
          <span>/</span>
          <button onClick={() => navigate(`/category/${product.category}`)} className="hover:text-blue-600 capitalize">
            {product.category}
          </button>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-40">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left – Images */}
          <ImageGallery images={variant.images} key={selectedColorIdx} />

          {/* Right – Details */}
          <div className="flex flex-col gap-4">
            {/* Title & Rating */}
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{product.brand}</p>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 leading-snug">{product.name}</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="inline-flex items-center gap-1 bg-green-600 text-white text-sm font-bold px-2.5 py-1 rounded">
                  {product.rating} ★
                </span>
                <span className="text-sm text-gray-400">{product.reviews.toLocaleString()} ratings</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-end gap-3 flex-wrap">
                <span className="text-3xl font-bold text-gray-900">₹{currentPrice.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">₹{currentMrp.toLocaleString()}</span>
                <span className="text-lg font-bold text-green-600">{discount}% off</span>
              </div>
              {discount >= 40 && (
                <p className="text-xs text-green-700 bg-green-50 rounded px-2 py-1 mt-2 inline-block font-medium">
                  Great deal! Save ₹{(currentMrp - currentPrice).toLocaleString()}
                </p>
              )}
            </div>

            {/* Color Selector */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Color: <span className="font-bold text-gray-900">{variant.color}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => handleColorChange(i)}
                    title={v.color}
                    className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                      i === selectedColorIdx ? "border-blue-500 scale-110 shadow-md" : "border-gray-200 hover:scale-105"
                    }`}
                    style={{ backgroundColor: v.colorCode }}
                  >
                    {i === selectedColorIdx && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-2 h-2 bg-white rounded-full shadow" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">{product.variants.length} colors available</p>
            </div>

            {/* Size Selector */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-700">
                  Size: {selectedSize && <span className="text-blue-600 font-bold">{selectedSize}</span>}
                </p>
                <button className="text-xs text-blue-600 font-semibold">Size Guide</button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-xs text-gray-500 mt-2">
                  ₹{variant.sizes[selectedSize].price.toLocaleString()} for size {selectedSize}
                </p>
              )}
            </div>

            {/* Action buttons – Desktop */}
            <div className="hidden sm:flex gap-3">
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold text-sm transition-colors ${
                  wishlisted ? "border-pink-400 bg-pink-50 text-pink-600" : "border-gray-200 text-gray-700 hover:border-pink-300"
                }`}
              >
                <Heart size={18} className={wishlisted ? "fill-pink-500 text-pink-500" : ""} />
                {wishlisted ? "Wishlisted" : "Wishlist"}
              </button>
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors ${
                  addedToCart ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ShoppingCart size={18} />
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20this%20product"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Delivery */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-3">
              <h3 className="text-sm font-bold text-gray-800">Delivery & Returns</h3>
              <div className="flex items-start gap-3">
                <Truck size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Free Delivery</p>
                  <p className="text-xs text-gray-500">{product.deliveryInfo}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">7-Day Returns</p>
                  <p className="text-xs text-gray-500">Hassle-free returns & exchanges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Quality Assured</p>
                  <p className="text-xs text-gray-500">100% authentic products</p>
                </div>
              </div>
            </div>

            {/* Offers */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Available Offers</h3>
              <ul className="space-y-2">
                {product.offers.map((offer, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-600">{offer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-2">Product Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              <ul className="mt-3 space-y-1">
                {product.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Ratings & Reviews</h3>
              <div className="flex gap-5 items-start">
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-gray-900">{product.rating}</p>
                  <div className="flex gap-0.5 justify-center my-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className={s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{product.reviews.toLocaleString()} ratings</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5, 4, 3, 2, 1].map((r) => (
                    <RatingBar key={r} label={r} count={ratingBreakdown[r]} total={totalRatings} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Similar Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile sticky footer */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-2 z-40">
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`flex items-center justify-center w-11 h-11 rounded-xl border-2 transition-colors ${
            wishlisted ? "border-pink-400 bg-pink-50 text-pink-500" : "border-gray-200 text-gray-500"
          }`}
        >
          <Heart size={18} className={wishlisted ? "fill-pink-500" : ""} />
        </button>
        <button
          onClick={handleAddToCart}
          className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-colors ${
            addedToCart ? "bg-green-600 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {addedToCart ? "Added!" : "Add to Cart"}
        </button>
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-green-500 text-white font-bold text-sm"
        >
          <MessageCircle size={16} />
          Chat
        </a>
      </div>
    </div>
  );
}
