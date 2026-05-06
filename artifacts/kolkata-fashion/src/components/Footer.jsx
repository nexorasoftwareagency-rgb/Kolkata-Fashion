import { useLocation } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-1">
              Kolkata<span className="text-blue-400">Fashion</span>
            </h3>
            <p className="text-pink-400 text-xs font-medium tracking-widest uppercase mb-3">
              Parsa, Bihar
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted local fashion destination. Quality garments at affordable prices for the entire family.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={15} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Men's Collection", path: "/category/men" },
                { label: "Women's Collection", path: "/category/women" },
                { label: "Kids' Collection", path: "/category/kids" },
                { label: "New Arrivals", path: "/category/new" },
                { label: "Festival Sale", path: "/category/sale" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Near Bus Stand, Main Market, Parsa, Saran District, Bihar - 841508</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-green-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-pink-400 flex-shrink-0" />
                <a href="mailto:info@kolkatafashionparsa.com" className="hover:text-white transition-colors text-xs">
                  info@kolkatafashionparsa.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500">Shop Hours</p>
              <p className="text-sm text-gray-300">Mon–Sat: 9:00 AM – 9:00 PM</p>
              <p className="text-sm text-gray-300">Sunday: 10:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold mb-3">Customer Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Return Policy", "Size Guide", "Shipping Info", "Privacy Policy", "Terms of Service", "FAQ"].map((item) => (
                <li key={item}>
                  <button className="hover:text-blue-400 transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2025 Kolkata Fashion Parsa. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with ❤️ in Bihar, India
          </p>
        </div>
      </div>
    </footer>
  );
}
