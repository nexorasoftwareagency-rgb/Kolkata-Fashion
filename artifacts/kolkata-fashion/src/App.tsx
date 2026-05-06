import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
      <p className="text-6xl">🛍️</p>
      <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
      <p className="text-gray-500 text-sm">The page you are looking for doesn't exist.</p>
      <a href="/" className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
        Go Home
      </a>
    </div>
  );
}

function Router() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/category/:category" component={Category} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/admin" component={Admin} />
          <Route path="/wishlist">
            <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4 pb-16 sm:pb-0">
              <p className="text-6xl">💝</p>
              <h2 className="text-xl font-bold text-gray-900">Your Wishlist</h2>
              <p className="text-gray-500 text-sm">Save your favourite items here. Start browsing!</p>
              <a href="/" className="mt-2 bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors">
                Browse Products
              </a>
            </div>
          </Route>
          <Route path="/cart">
            <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4 pb-16 sm:pb-0">
              <p className="text-6xl">🛒</p>
              <h2 className="text-xl font-bold text-gray-900">Your Cart is Empty</h2>
              <p className="text-gray-500 text-sm">Add items to your cart and they will appear here.</p>
              <a href="/" className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                Shop Now
              </a>
            </div>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
