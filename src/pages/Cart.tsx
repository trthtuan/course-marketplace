import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const formatCurrency = (number: number) => {
    return new Intl.NumberFormat('vi-VN').format(number) + ' đ';
  };

  const checkout = async () => {
    // will integrate backend and SePay later
    window.location.href = '/checkout.html';
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Giỏ hàng</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-200">
            <p className="text-gray-500 mb-6 text-lg">Giỏ hàng của bạn đang trống</p>
            <Link to="/" className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              ← Tiếp tục xem sản phẩm
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column (70%) */}
            <div className="w-full lg:w-[70%]">
              {/* Header Row */}
              <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4 px-2">
                <span className="font-semibold text-gray-700 uppercase tracking-wider text-sm">Sản Phẩm</span>
                <span className="font-semibold text-gray-700 uppercase tracking-wider text-sm">Giá</span>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-[10px] p-[15px] flex items-center justify-between shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4 flex-1 pr-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-[80px] h-[80px] object-cover rounded-[8px] flex-shrink-0 border border-gray-100"
                        referrerPolicy="no-referrer"
                      />
                      <h3 className="text-[16px] font-medium text-gray-900 line-clamp-2">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-6 flex-shrink-0">
                      <span className="text-red-600 font-bold whitespace-nowrap">
                        {formatCurrency(item.price)}
                      </span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Xóa sản phẩm"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Button */}
              <div className="mt-8">
                <Link to="/" className="inline-block bg-blue-600 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  ← Tiếp tục xem sản phẩm
                </Link>
              </div>
            </div>

            {/* Right Column (30%) */}
            <div className="w-full lg:w-[30%]">
              <div className="bg-white rounded-[10px] p-6 shadow-sm border border-gray-200 sticky top-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">
                  CỘNG GIỎ HÀNG
                </h2>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-medium text-gray-700">TỔNG</span>
                  <span className="text-red-600 font-bold text-xl">
                    {formatCurrency(calculateTotal())}
                  </span>
                </div>
                <button 
                  onClick={checkout}
                  className="w-full bg-red-600 text-white font-bold py-3.5 px-4 rounded-lg hover:bg-red-700 transition-colors text-lg"
                >
                  Thanh toán ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
