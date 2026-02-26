import { ShoppingCart, CreditCard, Key, CheckCircle } from 'lucide-react';

export default function PurchaseGuide() {
  const steps = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-indigo-600" />,
      title: "1. Chọn khóa học",
      description: "Tìm kiếm và chọn khóa học bạn muốn mua. Nhấp vào nút 'Thêm vào giỏ hàng' hoặc 'Mua ngay' trên trang chi tiết khóa học."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
      title: "2. Thanh toán",
      description: "Kiểm tra lại giỏ hàng và tiến hành thanh toán. Chúng tôi hỗ trợ nhiều phương thức: Thẻ Visa/Mastercard, Ví Momo, hoặc Chuyển khoản ngân hàng."
    },
    {
      icon: <Key className="w-6 h-6 text-indigo-600" />,
      title: "3. Kích hoạt khóa học",
      description: "Sau khi thanh toán thành công, khóa học sẽ tự động được thêm vào tài khoản của bạn. Nếu bạn có mã kích hoạt, hãy nhập vào mục 'Kích hoạt khóa học'."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
      title: "4. Hoàn tất",
      description: "Bạn đã sẵn sàng! Truy cập vào 'Khóa học của tôi' để bắt đầu hành trình học tập ngay lập tức."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Hướng dẫn mua hàng
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Các bước đơn giản để sở hữu khóa học và bắt đầu hành trình nâng cao kiến thức của bạn.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
              Quy trình mua khóa học
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin chuyển khoản</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Ngân hàng:</span> Vietcombank - Chi nhánh TP.HCM</p>
              <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Số tài khoản:</span> 0123456789</p>
              <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Chủ tài khoản:</span> CÔNG TY TNHH LEARNHUB</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Nội dung:</span> [Số điện thoại] - Mua khoa hoc [Tên khóa học]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
