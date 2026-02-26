import { Search, ShoppingCart, User, Menu, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { categories } from '../data/courses';
import { auth, User as AuthUser } from '../utils/auth';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    } catch (e) {
      console.error('Failed to parse cart', e);
    }
  };

  useEffect(() => {
    // Initial check
    setCurrentUser(auth.getCurrentUser());
    updateCartCount();

    // Listen for custom auth events
    const handleAuthChange = () => {
      setCurrentUser(auth.getCurrentUser());
    };

    window.addEventListener('auth-change', handleAuthChange);
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    auth.logout();
    setCurrentUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <header className="bg-white">
      {/* Sticky Top Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
                LearnHub
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl px-4 sm:px-6 lg:px-8 hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 md:hidden">
                <Search className="h-6 w-6" />
              </button>
              <Link to="/cart" className="text-gray-500 hover:text-gray-700 relative p-2">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* User Menu */}
              <div className="relative hidden sm:block">
                {currentUser ? (
                  <div>
                    <button 
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                        {currentUser.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium">{currentUser.username}</span>
                    </button>
                    
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900 truncate">{currentUser.username}</p>
                          <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                        </div>
                        <a
                          href="/user.html"
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Dashboard
                        </a>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Đăng xuất
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <a href="/user.html" className="text-gray-500 hover:text-indigo-600 p-2 flex items-center transition-colors">
                    <User className="h-6 w-6" />
                  </a>
                )}
              </div>

              <button className="text-gray-500 hover:text-gray-700 md:hidden p-2">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Non-sticky Category Navbar */}
      <div className="hidden md:block border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-3 no-scrollbar">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors"
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
