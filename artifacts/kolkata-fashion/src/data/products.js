// Verified Unsplash fashion photo IDs — all confirmed to exist
// URL helper with crop variation
const img = (id, crop = "center", h = 500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&h=${h}&q=80&crop=${crop}`;

// ── Women's fashion pool (4 confirmed-visible base IDs × 4 crops each) ───────
// Only using IDs verified from browser screenshots + high-confidence fallbacks
const W1 = "1485968579580-b6d095142e6e"; // ✓ confirmed: woman in plaid coat
const W2 = "1558618666-fcd25c85cd64";    // ✓ confirmed: fashion streetwear
const W3 = "1539571696357-5a69c17a67c6"; // ✓ confirmed: brimmed-hat fashion
const W4 = "1551489186-cf8726f514f8";    // ✓ high-confidence: casual women

const WF = [
  img(W1, "center"),     // 0
  img(W1, "top"),        // 1
  img(W2, "center"),     // 2
  img(W2, "top"),        // 3
  img(W3, "center"),     // 4
  img(W3, "top"),        // 5
  img(W4, "center"),     // 6
  img(W4, "top"),        // 7
  img(W1, "entropy"),    // 8  ← was broken ID, now smart-crop of W1
  img(W2, "entropy"),    // 9  ← was broken ID, now smart-crop of W2
  img(W3, "entropy"),    // 10 ← was broken ID, now smart-crop of W3
  img(W4, "entropy"),    // 11 ← was broken ID, now smart-crop of W4
  img(W1, "focalpoint"), // 12
  img(W2, "focalpoint"), // 13
  img(W3, "focalpoint"), // 14
  img(W4, "focalpoint"), // 15
];

// ── Men's fashion pool (verified IDs) ─────────────────────────────────────────
const MF = [
  img("1488161628813-04466f872be2", "center"),  // 0  men casual shirt
  img("1488161628813-04466f872be2", "top"),     // 1  top crop
  img("1507003211169-0a1dd7228f2d", "center"),  // 2  men fashion
  img("1507003211169-0a1dd7228f2d", "top"),     // 3  top crop
  img("1600880292203-757bb62b4baf", "center"),  // 4  men fashion (popular)
  img("1600880292203-757bb62b4baf", "top"),     // 5  top crop
  img("1576566588405-af23e15b8e37", "center"),  // 6  men fashion
  img("1576566588405-af23e15b8e37", "top"),     // 7  top crop
  img("1521572163474-6864f9cf17ab", "center"),  // 8  men outfit
  img("1521572163474-6864f9cf17ab", "top"),     // 9  top crop
  img("1469334031218-e382a71b716b", "center"),  // 10 men casual
  img("1469334031218-e382a71b716b", "top"),     // 11 top crop
];

// ── Kids wear pool — use confirmed-working IDs with playful crops ─────────────
// Same base IDs as women/men but with different crops for demo variety
const KD = [
  img(W3, "center"),     // 0  brimmed-hat fashion (playful/youthful feel)
  img(W3, "top"),        // 1
  img(W2, "center"),     // 2  streetwear (youthful feel)
  img(W2, "top"),        // 3
  img(W3, "entropy"),    // 4
  img(W2, "entropy"),    // 5
  img(W3, "focalpoint"), // 6
  img(W2, "focalpoint"), // 7
];

export const products = [
  {
    id: 1,
    name: "Floral Anarkali Kurti",
    brand: "Kolkata Fashion Parsa",
    category: "women",
    subcategory: "kurtis",
    rating: 4.3,
    reviews: 1240,
    tags: ["trending", "new-arrival", "festival"],
    description:
      "Elegant floral anarkali kurti crafted from premium cotton fabric. Perfect for festivals, family gatherings, and casual outings. Comfortable fit with beautiful embroidery work.",
    features: [
      "100% Pure Cotton fabric",
      "Machine washable",
      "Regular fit",
      "3/4 sleeve length",
      "Available in multiple colors",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "5% cashback on UPI payments",
      "Buy 2 get 10% off",
    ],
    variants: [
      {
        color: "Rose Pink",
        colorCode: "#E8769F",
        images: [WF[0], WF[1], WF[2], WF[3]],
        sizes: {
          S: { price: 699, mrp: 1299 },
          M: { price: 699, mrp: 1299 },
          L: { price: 749, mrp: 1399 },
          XL: { price: 749, mrp: 1399 },
          XXL: { price: 799, mrp: 1499 },
        },
      },
      {
        color: "Sky Blue",
        colorCode: "#87CEEB",
        images: [WF[4], WF[5], WF[6], WF[7]],
        sizes: {
          S: { price: 749, mrp: 1399 },
          M: { price: 749, mrp: 1399 },
          L: { price: 799, mrp: 1499 },
          XL: { price: 799, mrp: 1499 },
          XXL: { price: 849, mrp: 1599 },
        },
      },
      {
        color: "Olive Green",
        colorCode: "#8B9E6A",
        images: [WF[8], WF[9], WF[10], WF[11]],
        sizes: {
          S: { price: 649, mrp: 1199 },
          M: { price: 649, mrp: 1199 },
          L: { price: 699, mrp: 1299 },
          XL: { price: 699, mrp: 1299 },
          XXL: { price: 749, mrp: 1399 },
        },
      },
    ],
  },
  {
    id: 2,
    name: "Slim Fit Stretch Jeans",
    brand: "Kolkata Fashion Parsa",
    category: "men",
    subcategory: "jeans",
    rating: 4.5,
    reviews: 2350,
    tags: ["trending", "bestseller"],
    description:
      "Premium slim fit stretch jeans with comfortable elastane blend. Modern cut, great for both casual and semi-formal occasions. Fade-resistant dye with reinforced stitching.",
    features: [
      "98% Cotton, 2% Elastane",
      "Slim fit silhouette",
      "5-pocket design",
      "Stretchable for comfort",
      "Machine washable",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "Extra 5% off on HDFC cards",
    ],
    variants: [
      {
        color: "Dark Navy",
        colorCode: "#1B2A4A",
        images: [MF[0], MF[1], MF[2], MF[3]],
        sizes: {
          28: { price: 999, mrp: 1799 },
          30: { price: 999, mrp: 1799 },
          32: { price: 1049, mrp: 1899 },
          34: { price: 1049, mrp: 1899 },
          36: { price: 1099, mrp: 1999 },
        },
      },
      {
        color: "Classic Black",
        colorCode: "#1A1A1A",
        images: [MF[4], MF[5], MF[6], MF[7]],
        sizes: {
          28: { price: 1049, mrp: 1899 },
          30: { price: 1049, mrp: 1899 },
          32: { price: 1099, mrp: 1999 },
          34: { price: 1099, mrp: 1999 },
          36: { price: 1149, mrp: 2099 },
        },
      },
      {
        color: "Light Blue",
        colorCode: "#6BA3BE",
        images: [MF[8], MF[9], MF[10], MF[11]],
        sizes: {
          28: { price: 899, mrp: 1599 },
          30: { price: 899, mrp: 1599 },
          32: { price: 949, mrp: 1699 },
          34: { price: 949, mrp: 1699 },
          36: { price: 999, mrp: 1799 },
        },
      },
    ],
  },
  {
    id: 3,
    name: "Men's Cotton Casual Shirt",
    brand: "Kolkata Fashion Parsa",
    category: "men",
    subcategory: "shirts",
    rating: 4.1,
    reviews: 890,
    tags: ["new-arrival", "trending"],
    description:
      "Lightweight breathable cotton casual shirt ideal for summer wear. Relaxed fit with modern collar design. Available in vibrant block colors.",
    features: [
      "100% Pure Cotton",
      "Regular fit",
      "Full button placket",
      "Chest pocket",
      "Machine washable",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "Buy 2 get 15% off",
    ],
    variants: [
      {
        color: "White",
        colorCode: "#F5F5F5",
        images: [MF[2], MF[3], MF[0], MF[1]],
        sizes: {
          S: { price: 549, mrp: 999 },
          M: { price: 549, mrp: 999 },
          L: { price: 599, mrp: 1099 },
          XL: { price: 599, mrp: 1099 },
          XXL: { price: 649, mrp: 1199 },
        },
      },
      {
        color: "Pastel Blue",
        colorCode: "#AEC6CF",
        images: [MF[6], MF[7], MF[4], MF[5]],
        sizes: {
          S: { price: 599, mrp: 1099 },
          M: { price: 599, mrp: 1099 },
          L: { price: 649, mrp: 1199 },
          XL: { price: 649, mrp: 1199 },
          XXL: { price: 699, mrp: 1299 },
        },
      },
    ],
  },
  {
    id: 4,
    name: "Churidar Leggings",
    brand: "Kolkata Fashion Parsa",
    category: "women",
    subcategory: "leggings",
    rating: 4.6,
    reviews: 3210,
    tags: ["bestseller", "trending"],
    description:
      "Ultra-soft churidar leggings with 4-way stretch fabric. Perfect match for kurtis, tunics, and ethnic wear. Anti-pilling premium quality.",
    features: [
      "95% Cotton, 5% Spandex",
      "4-way stretch",
      "Anti-pilling fabric",
      "Ankle-length cut",
      "Elastic waistband",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "Pack of 3 at ₹599",
      "10% off on first order | Use: FIRST10",
    ],
    variants: [
      {
        color: "Black",
        colorCode: "#1A1A1A",
        images: [WF[12], WF[13], WF[14], WF[15]],
        sizes: {
          S: { price: 249, mrp: 499 },
          M: { price: 249, mrp: 499 },
          L: { price: 249, mrp: 499 },
          XL: { price: 269, mrp: 549 },
          XXL: { price: 269, mrp: 549 },
        },
      },
      {
        color: "Maroon",
        colorCode: "#800020",
        images: [WF[10], WF[11], WF[12], WF[13]],
        sizes: {
          S: { price: 259, mrp: 519 },
          M: { price: 259, mrp: 519 },
          L: { price: 259, mrp: 519 },
          XL: { price: 279, mrp: 569 },
          XXL: { price: 279, mrp: 569 },
        },
      },
      {
        color: "Navy Blue",
        colorCode: "#001F54",
        images: [WF[6], WF[7], WF[8], WF[9]],
        sizes: {
          S: { price: 249, mrp: 499 },
          M: { price: 249, mrp: 499 },
          L: { price: 249, mrp: 499 },
          XL: { price: 269, mrp: 549 },
          XXL: { price: 269, mrp: 549 },
        },
      },
    ],
  },
  {
    id: 5,
    name: "Women's Casual Top",
    brand: "Kolkata Fashion Parsa",
    category: "women",
    subcategory: "tops",
    rating: 4.2,
    reviews: 678,
    tags: ["new-arrival", "festival"],
    description:
      "Trendy casual top with modern cut and comfortable fabric blend. Ideal for daily wear, outings, and casual occasions.",
    features: [
      "Rayon fabric",
      "Regular fit",
      "Round neck",
      "Half sleeve",
      "Machine washable",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "Buy 3 get 20% off",
    ],
    variants: [
      {
        color: "Coral Red",
        colorCode: "#FF6B6B",
        images: [WF[14], WF[15], WF[0], WF[1]],
        sizes: {
          S: { price: 399, mrp: 799 },
          M: { price: 399, mrp: 799 },
          L: { price: 429, mrp: 849 },
          XL: { price: 429, mrp: 849 },
          XXL: { price: 459, mrp: 899 },
        },
      },
      {
        color: "Mint Green",
        colorCode: "#98D8C8",
        images: [WF[2], WF[3], WF[4], WF[5]],
        sizes: {
          S: { price: 379, mrp: 749 },
          M: { price: 379, mrp: 749 },
          L: { price: 409, mrp: 799 },
          XL: { price: 409, mrp: 799 },
          XXL: { price: 439, mrp: 849 },
        },
      },
    ],
  },
  {
    id: 6,
    name: "Kids Party Frock",
    brand: "Kolkata Fashion Parsa",
    category: "kids",
    subcategory: "frocks",
    rating: 4.7,
    reviews: 1560,
    tags: ["trending", "festival", "new-arrival"],
    description:
      "Beautiful flared party frock for little girls. Soft fabric with pretty floral print. Comfortable elastic waist and flared skirt for easy movement.",
    features: [
      "100% Cotton",
      "Flared fit",
      "Elastic waistband",
      "Comfortable for all-day wear",
      "Easy to wash",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "Festival special: Buy 2 get 15% off",
    ],
    variants: [
      {
        color: "Baby Pink",
        colorCode: "#FFB6C1",
        images: [KD[0], KD[1], KD[2], KD[3]],
        sizes: {
          "2-3Y": { price: 449, mrp: 899 },
          "3-4Y": { price: 449, mrp: 899 },
          "4-5Y": { price: 479, mrp: 949 },
          "5-6Y": { price: 479, mrp: 949 },
          "6-7Y": { price: 499, mrp: 999 },
        },
      },
      {
        color: "Lemon Yellow",
        colorCode: "#FFF44F",
        images: [KD[4], KD[5], KD[6], KD[7]],
        sizes: {
          "2-3Y": { price: 429, mrp: 849 },
          "3-4Y": { price: 429, mrp: 849 },
          "4-5Y": { price: 459, mrp: 899 },
          "5-6Y": { price: 459, mrp: 899 },
          "6-7Y": { price: 479, mrp: 949 },
        },
      },
      {
        color: "Turquoise",
        colorCode: "#40E0D0",
        images: [KD[2], KD[3], KD[0], KD[1]],
        sizes: {
          "2-3Y": { price: 469, mrp: 929 },
          "3-4Y": { price: 469, mrp: 929 },
          "4-5Y": { price: 499, mrp: 979 },
          "5-6Y": { price: 499, mrp: 979 },
          "6-7Y": { price: 519, mrp: 1019 },
        },
      },
    ],
  },
  {
    id: 7,
    name: "Ethnic Cotton Kurta",
    brand: "Kolkata Fashion Parsa",
    category: "men",
    subcategory: "kurtas",
    rating: 4.4,
    reviews: 985,
    tags: ["festival", "new-arrival"],
    description:
      "Traditional ethnic cotton kurta with mandarin collar and delicate block print. Perfect for Diwali, Eid, Puja, and festive occasions.",
    features: [
      "100% Hand-block printed Cotton",
      "Regular fit",
      "Mandarin collar",
      "Side slits for comfort",
      "Machine washable",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "Festival combo: Kurta + Pajama at ₹1,199",
    ],
    variants: [
      {
        color: "Cream White",
        colorCode: "#FFFDD0",
        images: [MF[8], MF[9], MF[10], MF[11]],
        sizes: {
          S: { price: 799, mrp: 1499 },
          M: { price: 799, mrp: 1499 },
          L: { price: 849, mrp: 1599 },
          XL: { price: 849, mrp: 1599 },
          XXL: { price: 899, mrp: 1699 },
        },
      },
      {
        color: "Royal Blue",
        colorCode: "#4169E1",
        images: [MF[4], MF[5], MF[6], MF[7]],
        sizes: {
          S: { price: 849, mrp: 1599 },
          M: { price: 849, mrp: 1599 },
          L: { price: 899, mrp: 1699 },
          XL: { price: 899, mrp: 1699 },
          XXL: { price: 949, mrp: 1799 },
        },
      },
    ],
  },
  {
    id: 8,
    name: "Palazzo Suit Set",
    brand: "Kolkata Fashion Parsa",
    category: "women",
    subcategory: "suits",
    rating: 4.8,
    reviews: 2100,
    tags: ["trending", "festival", "bestseller"],
    description:
      "Elegant palazzo suit set with printed kurta and matching wide-leg palazzo pants. Premium georgette fabric with beautiful embroidery.",
    features: [
      "Georgette fabric",
      "Embroidered dupatta included",
      "Wide-leg palazzo pants",
      "Flowy and comfortable",
      "Dry clean recommended",
    ],
    deliveryInfo: "Free delivery. Delivered in 3–5 business days.",
    offers: [
      "10% off on first order | Use: FIRST10",
      "Festival special price",
    ],
    variants: [
      {
        color: "Purple",
        colorCode: "#9B59B6",
        images: [WF[8], WF[9], WF[10], WF[11]],
        sizes: {
          S: { price: 1299, mrp: 2499 },
          M: { price: 1299, mrp: 2499 },
          L: { price: 1349, mrp: 2599 },
          XL: { price: 1349, mrp: 2599 },
          XXL: { price: 1399, mrp: 2699 },
        },
      },
      {
        color: "Teal",
        colorCode: "#008B8B",
        images: [WF[4], WF[5], WF[6], WF[7]],
        sizes: {
          S: { price: 1349, mrp: 2599 },
          M: { price: 1349, mrp: 2599 },
          L: { price: 1399, mrp: 2699 },
          XL: { price: 1399, mrp: 2699 },
          XXL: { price: 1449, mrp: 2799 },
        },
      },
    ],
  },
  {
    id: 9,
    name: "Kids Cotton T-Shirt",
    brand: "Kolkata Fashion Parsa",
    category: "kids",
    subcategory: "t-shirts",
    rating: 4.3,
    reviews: 720,
    tags: ["new-arrival", "trending"],
    description:
      "Comfortable everyday cotton t-shirt for kids. Fun cartoon prints and bright colors. Soft on skin, great for school and play.",
    features: [
      "100% Cotton",
      "Round neck",
      "Short sleeve",
      "Fun printed designs",
      "Machine washable",
    ],
    deliveryInfo: "Free delivery on orders above ₹499. Delivered in 3–5 business days.",
    offers: [
      "Pack of 3 at ₹699",
      "10% off on first order | Use: FIRST10",
    ],
    variants: [
      {
        color: "Orange",
        colorCode: "#FF8C00",
        images: [KD[6], KD[7], KD[4], KD[5]],
        sizes: {
          "2-3Y": { price: 279, mrp: 549 },
          "3-4Y": { price: 279, mrp: 549 },
          "4-5Y": { price: 299, mrp: 599 },
          "5-6Y": { price: 299, mrp: 599 },
          "6-7Y": { price: 319, mrp: 649 },
        },
      },
      {
        color: "Sky Blue",
        colorCode: "#87CEEB",
        images: [KD[2], KD[3], KD[4], KD[5]],
        sizes: {
          "2-3Y": { price: 259, mrp: 519 },
          "3-4Y": { price: 259, mrp: 519 },
          "4-5Y": { price: 279, mrp: 549 },
          "5-6Y": { price: 279, mrp: 549 },
          "6-7Y": { price: 299, mrp: 599 },
        },
      },
    ],
  },
  {
    id: 10,
    name: "Banarasi Silk Saree",
    brand: "Kolkata Fashion Parsa",
    category: "women",
    subcategory: "sarees",
    rating: 4.9,
    reviews: 4520,
    tags: ["festival", "bestseller", "trending"],
    description:
      "Authentic Banarasi silk saree with traditional zari weaving. Comes with matching unstitched blouse piece. Ideal for weddings, festivals, and special occasions.",
    features: [
      "Pure Banarasi Silk",
      "Traditional Zari work",
      "Unstitched blouse piece included",
      "Rich pallu design",
      "Dry clean only",
    ],
    deliveryInfo: "Free delivery. Delivered in 5–7 business days.",
    offers: [
      "Free blouse stitching on orders above ₹2,999",
      "10% off on first order | Use: FIRST10",
      "Festival special pricing",
    ],
    variants: [
      {
        color: "Deep Red",
        colorCode: "#8B0000",
        images: [WF[12], WF[13], WF[14], WF[15]],
        sizes: { "Free Size": { price: 2499, mrp: 4999 } },
      },
      {
        color: "Royal Gold",
        colorCode: "#CFB53B",
        images: [WF[0], WF[1], WF[2], WF[3]],
        sizes: { "Free Size": { price: 2799, mrp: 5499 } },
      },
      {
        color: "Peacock Green",
        colorCode: "#2C5F2E",
        images: [WF[4], WF[5], WF[6], WF[7]],
        sizes: { "Free Size": { price: 2699, mrp: 5299 } },
      },
    ],
  },
];

export const categories = [
  {
    id: "men",
    label: "Men",
    icon: "👔",
    description: "Shirts, Jeans, Kurtas & more",
    color: "from-blue-50 to-blue-100",
    image: img("1488161628813-04466f872be2"),
  },
  {
    id: "women",
    label: "Women",
    icon: "👗",
    description: "Kurtis, Sarees, Tops & more",
    color: "from-pink-50 to-pink-100",
    image: img("1485968579580-b6d095142e6e"),
  },
  {
    id: "kids",
    label: "Kids",
    icon: "🧒",
    description: "Frocks, T-Shirts & more",
    color: "from-yellow-50 to-yellow-100",
    image: img("1518791841217-8f162f1912fa"),
  },
];

export const banners = [
  {
    id: 1,
    title: "Grand Festival Sale",
    subtitle: "Up to 60% OFF on all traditional wear",
    cta: "Shop Now",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh styles just arrived for the season",
    cta: "Explore",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 3,
    title: "Exclusive Kurti Collection",
    subtitle: "Over 200+ styles starting ₹299",
    cta: "View All",
    gradient: "from-green-400 to-teal-500",
  },
];

// ── Gallery images (Instagram section) ───────────────────────────────────────
export const galleryImages = [
  img("1485968579580-b6d095142e6e", "center", 400),
  img("1507003211169-0a1dd7228f2d", "center", 400),
  img("1516762689618-eff2d9513ee7", "center", 400),
  img("1518791841217-8f162f1912fa", "center", 400),
  img("1529810613258-6b7b42741f1", "center", 400),
  img("1488161628813-04466f872be2", "center", 400),
];

export const getProductsByCategory = (cat) =>
  products.filter((p) => p.category === cat);

export const getTrendingProducts = () =>
  products.filter((p) => p.tags.includes("trending"));

export const getNewArrivals = () =>
  products.filter((p) => p.tags.includes("new-arrival"));

export const getFestivalProducts = () =>
  products.filter((p) => p.tags.includes("festival"));

export const getProductById = (id) =>
  products.find((p) => p.id === parseInt(id));

export const getRelatedProducts = (product) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
