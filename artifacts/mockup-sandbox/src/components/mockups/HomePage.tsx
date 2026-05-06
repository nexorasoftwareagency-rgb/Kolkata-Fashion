import { useState } from "react";
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Package,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

const products = [
  { id: 1, name: "Pure Cotton Saree", price: "₹2,499", image: "https://images.unsplash.com/photo-1610030469983-98c550dd283e?w=400&h=500&fit=crop", category: "Sarees" },
  { id: 2, name: "Silk Kurti Set", price: "₹1,899", image: "https://images.unsplash.com/photo-1583391728516-7ddb41ab1c98?w=400&h=500&fit=crop", category: "Kurtis" },
  { id: 3, name: "Woolen Shawl", price: "₹999", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop", category: "Accessories" },
  { id: 4, name: "Cotton Palazzo", price: "₹799", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop", category: "Bottomwear" },
  { id: 5, name: "Embroidered Dupatta", price: "₹1,299", image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&h=500&fit=crop", category: "Accessories" },
  { id: 6, name: "Lehenga Choli", price: "₹4,999", image: "https://images.unsplash.com/photo-1616366718762-fd9c243e29ae?w=400&h=500&fit=crop", category: "Lehengas" },
];

const categories = ["All", "Sarees", "Kurtis", "Lehengas", "Bottomwear", "Accessories"];

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👗</span>
              <span className="text-xl font-bold text-pink-600">Kolkata Fashion</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition">Home</a>
              <a href="#collection" className="text-gray-700 hover:text-pink-600 transition">Collection</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">
            <a href="#home" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#collection" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Collection</a>
            <a href="#about" className="block py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583391728516-7ddb41ab1c98?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Elegant Indian <span className="text-pink-600">Fashion</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover authentic Kolkata handloom and silk sarees, kurtis, and traditional wear crafted with love.
              </p>
              <a href="#collection" className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
                Shop Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Package className="w-10 h-10 mx-auto mb-3 text-pink-600" />
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders above ₹999</p>
            </div>
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-pink-600" />
              <h3 className="font-semibold mb-1">Based in Kolkata</h3>
              <p className="text-sm text-gray-500"> authentic Bengali handloom</p>
            </div>
            <div className="text-center">
              <ShoppingBag className="w-10 h-10 mx-auto mb-3 text-pink-600" />
              <h3 className="font-semibold mb-1">Quality Assured</h3>
              <p className="text-sm text-gray-500">100% authentic products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === cat 
                    ? "bg-pink-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-pink-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-pink-600 font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=500&fit=crop" 
                alt="Kolkata Fashion"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Kolkata Fashion</h2>
              <p className="text-gray-600 mb-4">
                We are a trusted Kolkata-based fashion house specializing in authentic Bengali handloom, 
                silk sarees, and traditional Indian wear. Our collection showcases the rich heritage of 
                Bengali craftsmanship with modern designs.
              </p>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience, we serve clients across India and abroad with 
                quality garments that reflect the elegance of Bengali tradition.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">10+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">5000+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">100+</div>
                  <div className="text-sm text-gray-500">Designs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/919724649971" className="text-pink-600 hover:underline">+91 9724649971</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-500">Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👗</span>
                <span className="text-xl font-bold">Kolkata Fashion</span>
              </div>
              <p className="text-gray-400 text-sm">
                Authentic Bengali handloom and traditional Indian wear from Kolkata.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#collection" className="hover:text-white">Collection</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://wa.me/919724649971" className="hover:text-white">WhatsApp: +91 9724649971</a></li>
                <li>Kolkata, WB</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2026 Kolkata Fashion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;