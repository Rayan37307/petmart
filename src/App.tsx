import React from 'react';
import { useApp, AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Pages list
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginRegister from './pages/LoginRegister';

function AppLayout() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'shop':
        return <Shop />;
      case 'product-details':
        return <ProductDetails />;
      case 'cart':
        return <Cart />;
      case 'checkout':
        return <Checkout />;
      case 'wishlist':
        return <Wishlist />;
      case 'faq':
        return <FAQ />;
      case 'blog':
        return <Blog />;
      case 'blog-details':
        return <SingleBlog />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'login':
      case 'register':
        return <LoginRegister />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-sans overflow-x-hidden antialiased selection:bg-brand-blue selection:text-white pb-0">
      {/* Header and Sliding overlays */}
      <Header />
      <CartDrawer />

      {/* Main page router viewport flow */}
      <main className="flex-grow z-10">
        {renderPage()}
      </main>

      {/* Playful footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
