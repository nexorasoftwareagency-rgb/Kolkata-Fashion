import { useState, useMemo } from "react";
import { useParams, useLocation } from "wouter";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

const SORT_OPTIONS = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Rating", value: "rating" },
  { label: "Newest First", value: "newest" },
];

const PRICE_RANGES = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 – ₹1,000", min: 500, max: 1000 },
  { label: "₹1,000 – ₹2,000", min: 1000, max: 2000 },
  { label: "Above ₹2,000", min: 2000, max: Infinity },
];

const RATINGS = [4.5, 4, 3.5];

function FilterPanel({ filters, setFilters, onClose, isMobile }) {
  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const arr = prev[key] || [];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const setPriceRange = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange?.label === range.label ? null : range,
    }));
  };

  const setMinRating = (r) => {
    setFilters((prev) => ({ ...prev, minRating: prev.minRating === r ? null : r }));
  };

  return (
    <div className={`bg-white ${isMobile ? "p-4" : "rounded-xl border border-gray-100 p-4 sticky top-20"}`}>
      {isMobile && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Filters</h3>
          <button onClick={onClose}><X size={20} /></button>
        </div>
      )}
      {!isMobile && <h3 className="font-bold text-gray-900 mb-4">Filters</h3>}

      {/* Category */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Category</h4>
        <div className="space-y-2">
          {[
            { label: "All", value: "all" },
            { label: "Men", value: "men" },
            { label: "Women", value: "women" },
            { label: "Kids", value: "kids" },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-blue-600"
                checked={(filters.categories || []).includes(value)}
                onChange={() => toggleFilter("categories", value)}
              />
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Price Range</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                className="w-4 h-4 accent-blue-600"
                checked={filters.priceRange?.label === range.label}
                onChange={() => setPriceRange(range)}
              />
              <span className="text-sm text-gray-600">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Customer Rating</h4>
        <div className="space-y-2">
          {RATINGS.map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                className="w-4 h-4 accent-blue-600"
                checked={filters.minRating === r}
                onChange={() => setMinRating(r)}
              />
              <span className="text-sm text-gray-600">{r}★ & above</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear */}
      <button
        onClick={() => setFilters({})}
        className="w-full text-sm text-blue-600 font-semibold py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}

export default function Category() {
  const { category } = useParams();
  const [sort, setSort] = useState("relevance");
  const [filters, setFilters] = useState({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [, navigate] = useLocation();

  const catLabel =
    categories.find((c) => c.id === category)?.label ||
    (category === "all" ? "All Products" : category === "new" ? "New Arrivals" : "Sale");

  const filtered = useMemo(() => {
    let list = [...products];

    // Category filter
    if (category && category !== "all" && category !== "new" && category !== "sale") {
      list = list.filter((p) => p.category === category);
    }
    if (category === "new") list = list.filter((p) => p.tags.includes("new-arrival"));
    if (category === "sale") list = list.filter((p) => p.tags.includes("festival"));

    // UI filters
    if (filters.categories?.length && !filters.categories.includes("all")) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.priceRange) {
      list = list.filter((p) => {
        const v = p.variants[0];
        const price = Object.values(v.sizes)[0].price;
        return price >= filters.priceRange.min && price < filters.priceRange.max;
      });
    }
    if (filters.minRating) {
      list = list.filter((p) => p.rating >= filters.minRating);
    }

    // Sort
    if (sort === "price_asc") {
      list.sort((a, b) => {
        const pa = Object.values(a.variants[0].sizes)[0].price;
        const pb = Object.values(b.variants[0].sizes)[0].price;
        return pa - pb;
      });
    } else if (sort === "price_desc") {
      list.sort((a, b) => {
        const pa = Object.values(a.variants[0].sizes)[0].price;
        const pb = Object.values(b.variants[0].sizes)[0].price;
        return pb - pa;
      });
    } else if (sort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [category, filters, sort]);

  return (
    <div className="bg-gray-50 min-h-screen pb-20 sm:pb-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <button onClick={() => navigate("/")} className="hover:text-blue-600">Home</button>
          <span>/</span>
          <span className="text-gray-900 font-medium">{catLabel}</span>
        </div>

        {/* Top bar */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
            {catLabel}
            <span className="text-sm text-gray-400 font-normal ml-2">({filtered.length} items)</span>
          </h1>
          <div className="flex items-center gap-2">
            {/* Mobile filter btn */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                Sort <ChevronDown size={14} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 min-w-44 overflow-hidden">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSort(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${sort === opt.value ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700"}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Desktop sidebar */}
          <div className="hidden sm:block w-56 flex-shrink-0">
            <FilterPanel filters={filters} setFilters={setFilters} />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-5xl mb-3">🛍️</p>
                <p className="text-gray-500 font-medium">No products found</p>
                <button
                  onClick={() => setFilters({})}
                  className="mt-3 text-blue-600 text-sm font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 sm:hidden" onClick={() => setMobileFiltersOpen(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              onClose={() => setMobileFiltersOpen(false)}
              isMobile
            />
          </div>
        </div>
      )}
    </div>
  );
}
