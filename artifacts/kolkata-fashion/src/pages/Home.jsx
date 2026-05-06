import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ChevronLeft, ChevronRight, Star, Shield, Truck, RefreshCw, MessageCircle } from "lucide-react";
import ProductCard from "../components/ProductCard";
import {
  products,
  categories,
  banners,
  galleryImages,
  getTrendingProducts,
  getNewArrivals,
  getFestivalProducts,
} from "../data/products";

function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className={`relative bg-gradient-to-r ${banner.gradient} rounded-xl overflow-hidden mx-3 sm:mx-0 mt-3`}>
      <div className="min-h-[180px] sm:min-h-[260px] flex items-center px-6 sm:px-12 py-8">
        <div className="text-white">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
            Limited Time Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight">{banner.title}</h2>
          <p className="text-white/85 text-sm sm:text-base mt-1 mb-4">{banner.subtitle}</p>
          <button
            onClick={() => navigate("/category/women")}
            className="bg-white text-gray-900 text-sm font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {banner.cta} →
          </button>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + banners.length) % banners.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % banners.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

function CategorySection() {
  const [, navigate] = useLocation();
  return (
    <section className="px-3 sm:px-0">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Shop by Category</h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/category/${cat.id}`)}
            className={`bg-gradient-to-br ${cat.color} rounded-xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow border border-gray-100`}
          >
            <span className="text-3xl sm:text-4xl block mb-2">{cat.icon}</span>
            <span className="text-sm sm:text-base font-bold text-gray-800 block">{cat.label}</span>
            <span className="text-[11px] text-gray-500 hidden sm:block mt-0.5">{cat.description}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProductRow({ title, products, link }) {
  const [, navigate] = useLocation();
  return (
    <section className="px-3 sm:px-0">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={() => navigate(link)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View All →
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function FestivalBanner() {
  const [, navigate] = useLocation();
  return (
    <div className="px-3 sm:px-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-5 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => navigate("/category/women")}
      >
        <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">Festival Special</p>
        <h3 className="text-white text-xl font-bold mt-1">Diwali Collection</h3>
        <p className="text-white/80 text-sm mt-1">Traditional wear up to 50% off</p>
        <button className="mt-3 bg-white text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full">
          Shop Now
        </button>
      </div>
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-5 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => navigate("/category/all")}
      >
        <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">New Season</p>
        <h3 className="text-white text-xl font-bold mt-1">Summer Styles</h3>
        <p className="text-white/80 text-sm mt-1">Fresh arrivals from ₹299</p>
        <button className="mt-3 bg-white text-purple-500 text-xs font-bold px-4 py-1.5 rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="px-3 sm:px-0">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Fashion Gallery</h2>
      <p className="text-sm text-gray-500 mb-3">Follow us on Instagram @kolkatafashionparsa</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {galleryImages.map((url, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={url.replace("w=400&h=500", "w=200&h=200")}
              alt="Fashion"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: Shield, title: "Quality Assured", desc: "All products quality checked before dispatch" },
    { icon: Truck, title: "Fast Delivery", desc: "Delivery in 3–5 business days across Bihar" },
    { icon: RefreshCw, title: "Easy Returns", desc: "7-day hassle-free returns & exchanges" },
    { icon: Star, title: "5000+ Happy Customers", desc: "Trusted by local families since 2018" },
  ];
  return (
    <section className="px-3 sm:px-0 bg-blue-50 rounded-xl p-5 sm:p-8">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 text-center">Why Choose Us?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {points.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Icon size={22} className="text-white" />
            </div>
            <h3 className="text-sm font-bold text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatsAppSection() {
  return (
    <section className="px-3 sm:px-0">
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="text-white flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">Need Help? Chat on WhatsApp</h3>
          <p className="text-green-100 text-sm mt-1">
            Get personalized fashion advice, check availability, or place a custom order directly with us.
          </p>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hi%20Kolkata%20Fashion%20Parsa%2C%20I%20need%20help%20with%20my%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-white text-green-600 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors flex items-center gap-2 text-sm"
        >
          <MessageCircle size={18} />
          Chat Now
        </a>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="px-3 sm:px-0">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Visit Our Shop</h2>
      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <iframe
          title="Kolkata Fashion Parsa Location"
          src="https://maps.google.com/maps?q=Parsa,Bihar,India&output=embed&z=14"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />
        <div className="p-4 bg-white">
          <p className="font-semibold text-gray-800 text-sm">Kolkata Fashion Parsa</p>
          <p className="text-xs text-gray-500 mt-0.5">Near Bus Stand, Main Market, Parsa, Saran District, Bihar - 841508</p>
          <a
            href="https://maps.google.com/?q=Parsa,Bihar,India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 text-xs font-semibold hover:underline"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const trending = getTrendingProducts();
  const newArrivals = getNewArrivals();
  const festival = getFestivalProducts();

  return (
    <div className="bg-gray-50 pb-16 sm:pb-0">
      <div className="max-w-7xl mx-auto sm:px-6 py-2 flex flex-col gap-6">
        <HeroBanner />
        <CategorySection />
        <ProductRow title="Trending Now 🔥" products={trending} link="/category/all" />
        <FestivalBanner />
        <ProductRow title="New Arrivals ✨" products={newArrivals} link="/category/new" />
        <ProductRow title="Festival Collection 🎉" products={festival} link="/category/sale" />
        <Gallery />
        <WhyUs />
        <WhatsAppSection />
        <MapSection />
      </div>
    </div>
  );
}
