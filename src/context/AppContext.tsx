import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageId } from '../types';

interface AppContextProps {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  
  wishlist: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  
  couponCode: string;
  discountPercentage: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  
  selectedProductId: number | null;
  setSelectedProductId: (id: number | null) => void;
  
  selectedBlogId: number | null;
  setSelectedBlogId: (id: number | null) => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial cart and wishlist from localStorage if available
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('pawmart_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<number[]>(() => {
    const saved = localStorage.getItem('pawmart_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    // Standard starting page is home
    return 'home';
  });

  const [selectedProductId, setSelectedProductId] = useState<number | null>(1);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('pawmart_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('pawmart_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart operations
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    setIsCartOpen(true); // Open cart drawer automatically!
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode('');
    setDiscountPercentage(0);
  };

  // Wishlist operations
  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: number) => wishlist.includes(productId);

  // Coupon configuration
  const applyCoupon = (code: string): boolean => {
    const normalized = code.trim().toUpperCase();
    if (normalized === 'PAWLOVE30' || normalized === 'PAWMART30') {
      setCouponCode(normalized);
      setDiscountPercentage(30);
      return true;
    }
    if (normalized === 'WELCOME15') {
      setCouponCode(normalized);
      setDiscountPercentage(15);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountPercentage(0);
  };

  // Navigation tracking that scrolls to top of viewport
  const handleSetPage = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        couponCode,
        discountPercentage,
        applyCoupon,
        removeCoupon,
        currentPage,
        setCurrentPage: handleSetPage,
        selectedProductId,
        setSelectedProductId,
        selectedBlogId,
        setSelectedBlogId,
        searchQuery,
        setSearchQuery,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside an AppProvider');
  }
  return context;
};
