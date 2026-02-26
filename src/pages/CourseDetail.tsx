import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, Clock, BookOpen, Infinity, Users, CheckCircle, PlayCircle, Zap, ShoppingCart } from 'lucide-react';
import CourseTabs from '../components/CourseTabs';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image
    };

    const existingCart = localStorage.getItem('cart');
    let cart = [];
    if (existingCart) {
      try {
        cart = JSON.parse(existingCart);
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }

    // Check if already in cart
    if (!cart.some((item: any) => item.id === course.id)) {
      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
    }
    
    navigate('/cart');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to courses
        </Link>

        {/* Top Section: 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Column (40-45%) */}
          <div className="w-full lg:w-[42%] flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4 aspect-video bg-gray-100 shadow-sm border border-gray-200">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <button className="w-full text-center text-blue-600 font-medium hover:underline mb-3 flex items-center justify-center">
              <PlayCircle className="w-5 h-5 mr-2" />
              Học thử (Preview course)
            </button>
            
            <div className="flex flex-col space-y-3">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-blue-100 text-blue-700 font-bold py-4 px-4 rounded-xl hover:bg-blue-200 transition-colors flex justify-center items-center text-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to cart
              </button>
              <button 
                onClick={handleAddToCart}
                className="w-full bg-blue-900 text-white font-bold py-4 px-4 rounded-xl hover:bg-blue-800 transition-colors text-lg"
              >
                Buy now
              </button>
            </div>
          </div>

          {/* Right Column (55-60%) */}
          <div className="w-full lg:w-[58%] flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {course.title}
            </h1>
            
            <div className="flex items-end space-x-3 mb-6">
              <span className="text-4xl font-extrabold text-red-600">${course.price}</span>
              <span className="text-xl text-gray-400 line-through mb-1">${course.originalPrice}</span>
            </div>

            {/* Info Box (Rows) */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-gray-400" />
                    <span className="font-medium">Duration</span>
                  </div>
                  <span className="font-bold text-gray-900">14 hours</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-5 h-5 mr-3 text-gray-400" />
                    <span className="font-medium">Curriculum</span>
                  </div>
                  <span className="font-bold text-gray-900">{course.curriculum.length} lessons</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center text-gray-600">
                    <Infinity className="w-5 h-5 mr-3 text-gray-400" />
                    <span className="font-medium">Ownership</span>
                  </div>
                  <span className="font-bold text-gray-900">Lifetime</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3 text-gray-400" />
                    <span className="font-medium">Students</span>
                  </div>
                  <span className="font-bold text-gray-900">{course.students.toLocaleString()}</span>
                </li>
              </ul>
            </div>

            {/* Feature Grid (3 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Full lessons</h3>
                <p className="text-xs text-gray-500">Access all course materials</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                  <PlayCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Learn online</h3>
                <p className="text-xs text-gray-500">Study anywhere, anytime</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Instant activation</h3>
                <p className="text-xs text-gray-500">Start learning immediately</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
          <CourseTabs 
            description={course.description} 
            guide={course.guide || "Sau khi thanh toán thành công, khóa học sẽ tự động được thêm vào tài khoản của bạn. Truy cập 'Khóa học của tôi' để bắt đầu học."} 
            feedback={course.feedback || "Khóa học rất tuyệt vời, giảng viên nhiệt tình và kiến thức thực tế. Đánh giá: 5/5 sao."} 
          />
        </div>
      </div>
    </div>
  );
}
