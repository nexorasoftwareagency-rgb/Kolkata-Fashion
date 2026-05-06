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
        images: [
          "https://picsum.photos/seed/kurti1a/400/500",
          "https://picsum.photos/seed/kurti1b/400/500",
          "https://picsum.photos/seed/kurti1c/400/500",
          "https://picsum.photos/seed/kurti1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kurti2a/400/500",
          "https://picsum.photos/seed/kurti2b/400/500",
          "https://picsum.photos/seed/kurti2c/400/500",
          "https://picsum.photos/seed/kurti2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kurti3a/400/500",
          "https://picsum.photos/seed/kurti3b/400/500",
          "https://picsum.photos/seed/kurti3c/400/500",
          "https://picsum.photos/seed/kurti3d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/jeans1a/400/500",
          "https://picsum.photos/seed/jeans1b/400/500",
          "https://picsum.photos/seed/jeans1c/400/500",
          "https://picsum.photos/seed/jeans1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/jeans2a/400/500",
          "https://picsum.photos/seed/jeans2b/400/500",
          "https://picsum.photos/seed/jeans2c/400/500",
          "https://picsum.photos/seed/jeans2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/jeans3a/400/500",
          "https://picsum.photos/seed/jeans3b/400/500",
          "https://picsum.photos/seed/jeans3c/400/500",
          "https://picsum.photos/seed/jeans3d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/shirt1a/400/500",
          "https://picsum.photos/seed/shirt1b/400/500",
          "https://picsum.photos/seed/shirt1c/400/500",
          "https://picsum.photos/seed/shirt1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/shirt2a/400/500",
          "https://picsum.photos/seed/shirt2b/400/500",
          "https://picsum.photos/seed/shirt2c/400/500",
          "https://picsum.photos/seed/shirt2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/legs1a/400/500",
          "https://picsum.photos/seed/legs1b/400/500",
          "https://picsum.photos/seed/legs1c/400/500",
          "https://picsum.photos/seed/legs1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/legs2a/400/500",
          "https://picsum.photos/seed/legs2b/400/500",
          "https://picsum.photos/seed/legs2c/400/500",
          "https://picsum.photos/seed/legs2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/legs3a/400/500",
          "https://picsum.photos/seed/legs3b/400/500",
          "https://picsum.photos/seed/legs3c/400/500",
          "https://picsum.photos/seed/legs3d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/top1a/400/500",
          "https://picsum.photos/seed/top1b/400/500",
          "https://picsum.photos/seed/top1c/400/500",
          "https://picsum.photos/seed/top1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/top2a/400/500",
          "https://picsum.photos/seed/top2b/400/500",
          "https://picsum.photos/seed/top2c/400/500",
          "https://picsum.photos/seed/top2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kids1a/400/500",
          "https://picsum.photos/seed/kids1b/400/500",
          "https://picsum.photos/seed/kids1c/400/500",
          "https://picsum.photos/seed/kids1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kids2a/400/500",
          "https://picsum.photos/seed/kids2b/400/500",
          "https://picsum.photos/seed/kids2c/400/500",
          "https://picsum.photos/seed/kids2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kids3a/400/500",
          "https://picsum.photos/seed/kids3b/400/500",
          "https://picsum.photos/seed/kids3c/400/500",
          "https://picsum.photos/seed/kids3d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kurta1a/400/500",
          "https://picsum.photos/seed/kurta1b/400/500",
          "https://picsum.photos/seed/kurta1c/400/500",
          "https://picsum.photos/seed/kurta1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kurta2a/400/500",
          "https://picsum.photos/seed/kurta2b/400/500",
          "https://picsum.photos/seed/kurta2c/400/500",
          "https://picsum.photos/seed/kurta2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/palazzo1a/400/500",
          "https://picsum.photos/seed/palazzo1b/400/500",
          "https://picsum.photos/seed/palazzo1c/400/500",
          "https://picsum.photos/seed/palazzo1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/palazzo2a/400/500",
          "https://picsum.photos/seed/palazzo2b/400/500",
          "https://picsum.photos/seed/palazzo2c/400/500",
          "https://picsum.photos/seed/palazzo2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kidst1a/400/500",
          "https://picsum.photos/seed/kidst1b/400/500",
          "https://picsum.photos/seed/kidst1c/400/500",
          "https://picsum.photos/seed/kidst1d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/kidst2a/400/500",
          "https://picsum.photos/seed/kidst2b/400/500",
          "https://picsum.photos/seed/kidst2c/400/500",
          "https://picsum.photos/seed/kidst2d/400/500",
        ],
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
        images: [
          "https://picsum.photos/seed/saree1a/400/500",
          "https://picsum.photos/seed/saree1b/400/500",
          "https://picsum.photos/seed/saree1c/400/500",
          "https://picsum.photos/seed/saree1d/400/500",
        ],
        sizes: {
          "Free Size": { price: 2499, mrp: 4999 },
        },
      },
      {
        color: "Royal Gold",
        colorCode: "#CFB53B",
        images: [
          "https://picsum.photos/seed/saree2a/400/500",
          "https://picsum.photos/seed/saree2b/400/500",
          "https://picsum.photos/seed/saree2c/400/500",
          "https://picsum.photos/seed/saree2d/400/500",
        ],
        sizes: {
          "Free Size": { price: 2799, mrp: 5499 },
        },
      },
      {
        color: "Peacock Green",
        colorCode: "#2C5F2E",
        images: [
          "https://picsum.photos/seed/saree3a/400/500",
          "https://picsum.photos/seed/saree3b/400/500",
          "https://picsum.photos/seed/saree3c/400/500",
          "https://picsum.photos/seed/saree3d/400/500",
        ],
        sizes: {
          "Free Size": { price: 2699, mrp: 5299 },
        },
      },
    ],
  },
];

export const categories = [
  { id: "men", label: "Men", icon: "👔", description: "Shirts, Jeans, Kurtas & more", color: "from-blue-50 to-blue-100", image: "https://picsum.photos/seed/mencat/400/300" },
  { id: "women", label: "Women", icon: "👗", description: "Kurtis, Sarees, Tops & more", color: "from-pink-50 to-pink-100", image: "https://picsum.photos/seed/womencat/400/300" },
  { id: "kids", label: "Kids", icon: "🧒", description: "Frocks, T-Shirts & more", color: "from-yellow-50 to-yellow-100", image: "https://picsum.photos/seed/kidscat/400/300" },
];

export const banners = [
  { id: 1, title: "Grand Festival Sale", subtitle: "Up to 60% OFF on all traditional wear", cta: "Shop Now", gradient: "from-orange-400 to-pink-500" },
  { id: 2, title: "New Arrivals", subtitle: "Fresh styles just arrived for the season", cta: "Explore", gradient: "from-blue-500 to-purple-600" },
  { id: 3, title: "Exclusive Kurti Collection", subtitle: "Over 200+ styles starting ₹299", cta: "View All", gradient: "from-green-400 to-teal-500" },
];

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getTrendingProducts = () =>
  products.filter((p) => p.tags.includes("trending"));

export const getNewArrivals = () =>
  products.filter((p) => p.tags.includes("new-arrival"));

export const getFestivalProducts = () =>
  products.filter((p) => p.tags.includes("festival"));

export const getProductById = (id) =>
  products.find((p) => p.id === parseInt(id));

export const getRelatedProducts = (product) =>
  products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
