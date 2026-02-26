import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, CreditCard, Smartphone, Building, ShieldCheck, Zap, Tag, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <div className="mt-auto">
      {/* Features / Trust Section */}
      <section className="max-w-[1200px] mx-auto py-10 mt-[60px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex items-center p-5 rounded-[10px] bg-[#f3f4f6]">
            <div className="flex-shrink-0 mr-4">
              <ShieldCheck className="w-12 h-12 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Uy Tín Chất Lượng</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Được kiểm tra khóa và học thử trước khi mua</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center p-5 rounded-[10px] bg-[#f3f4f6]">
            <div className="flex-shrink-0 mr-4">
              <Zap className="w-12 h-12 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Kích Hoạt Nhanh</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Kích hoạt khóa học tự động trong vòng 1 - 3 phút</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center p-5 rounded-[10px] bg-[#f3f4f6]">
            <div className="flex-shrink-0 mr-4">
              <Tag className="w-12 h-12 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Mua Hàng Tiết Kiệm</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Khóa học với giá rẻ nhất thị trường hiện nay</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center p-5 rounded-[10px] bg-[#f3f4f6]">
            <div className="flex-shrink-0 mr-4">
              <Headphones className="w-12 h-12 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Hỗ Trợ Trực Tuyến</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Liên hệ Fanpage hoặc Zalo để được hỗ trợ ngay</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand info */}
            <div>
              <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight mb-4 inline-block">
                LearnHub
              </Link>
              <p className="text-sm text-gray-600 mb-6">
                Nền tảng học trực tuyến hàng đầu với hàng ngàn khóa học chất lượng từ các chuyên gia. Nâng cao kỹ năng của bạn ngay hôm nay.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:contact@learnhub.com" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+123456789" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Course categories */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Danh mục khóa học</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Combo Khóa Học</Link></li>
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Công nghệ thông tin</Link></li>
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Ngoại ngữ</Link></li>
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Marketing</Link></li>
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Tin học văn phòng</Link></li>
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Thiết kế</Link></li>
              </ul>
            </div>

            {/* Column 3: Support / Guides */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Hỗ trợ khách hàng</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Trang chủ</Link></li>
                <li><Link to="/guide" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Hướng dẫn sử dụng</Link></li>
                <li><Link to="/purchase-guide" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Hướng dẫn mua hàng</Link></li>
                <li><Link to="/faq" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Câu hỏi thường gặp</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Liên hệ</Link></li>
              </ul>
            </div>

            {/* Column 4: Payment methods */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Phương thức thanh toán</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-600 bg-white p-2 rounded border border-gray-200 shadow-sm">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-medium">Visa</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 bg-white p-2 rounded border border-gray-200 shadow-sm">
                  <CreditCard className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-medium">Mastercard</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 bg-white p-2 rounded border border-gray-200 shadow-sm">
                  <Smartphone className="w-5 h-5 text-pink-600" />
                  <span className="text-xs font-medium">Momo</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 bg-white p-2 rounded border border-gray-200 shadow-sm">
                  <Building className="w-5 h-5 text-green-600" />
                  <span className="text-xs font-medium">Chuyển khoản</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Điều khoản</Link>
              <Link to="/" className="hover:text-indigo-600 transition-colors">Bảo mật</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
