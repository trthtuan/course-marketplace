import { BookOpen, MonitorPlay, CheckCircle, HelpCircle } from 'lucide-react';

export default function Guide() {
  const steps = [
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      title: "1. Đăng nhập và tìm khóa học",
      description: "Đăng nhập vào tài khoản của bạn. Sử dụng thanh tìm kiếm hoặc duyệt qua các danh mục để tìm khóa học phù hợp với nhu cầu của bạn."
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-indigo-600" />,
      title: "2. Bắt đầu học tập",
      description: "Truy cập vào 'Khóa học của tôi' và nhấp vào khóa học bạn muốn học. Hệ thống sẽ lưu lại tiến trình học tập của bạn tự động."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
      title: "3. Hoàn thành bài kiểm tra",
      description: "Sau mỗi chương, bạn sẽ có các bài tập và bài kiểm tra trắc nghiệm để củng cố kiến thức. Hãy hoàn thành chúng để mở khóa chương tiếp theo."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-indigo-600" />,
      title: "4. Thảo luận và hỏi đáp",
      description: "Nếu có thắc mắc, hãy để lại câu hỏi trong phần Q&A của mỗi bài giảng. Giảng viên và cộng đồng học viên sẽ hỗ trợ bạn."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Hướng dẫn sử dụng nền tảng
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá cách tận dụng tối đa các tính năng của LearnHub để có trải nghiệm học tập hiệu quả nhất.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
              Các bước học tập cơ bản
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
          
          <div className="bg-indigo-50 p-8 text-center">
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Bạn vẫn cần hỗ trợ?</h3>
            <p className="text-indigo-700 mb-6">Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng giúp đỡ bạn.</p>
            <button className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
              Liên hệ hỗ trợ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
