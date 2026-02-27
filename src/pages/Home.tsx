import { Course } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { useState } from "react";

const PAYMENT_CONFIG = {
  bankId: "BIDV",
  accountNo: "96247E9SE8",
};

const MAKE_WEBHOOK_URL =
  "https://hook.eu1.make.com/e6n3zul4kq9pr3ctfac9kfcfhtuq3rls";

interface HomeProps {
  courses: Course[];
  searchQuery: string;
}

export default function Home({ courses, searchQuery }: HomeProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [qrUrl, setQrUrl] = useState("");
  const [email, setEmail] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  // giữ nguyên logic filter
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // logic thanh toán (hồn)
  const handlePayment = async (course: Course) => {
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }

    const txID = `KHT${Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase()}`;

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          txId: txID,
          email,
          courseId: course.id,
          amount: course.price,
        }),
      });

      const url = `https://img.vietqr.io/image/${PAYMENT_CONFIG.bankId}-${PAYMENT_CONFIG.accountNo}-compact2.jpg?amount=${course.price}&addInfo=${txID}`;

      setQrUrl(url);
    } catch (err) {
      console.error(err);
      alert("Lỗi tạo thanh toán");
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* HERO — giữ nguyên KHUNG */}
      {!searchQuery && (
        <div className="mb-12 bg-indigo-900 rounded-2xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/pattern/1200/400')] bg-cover bg-center mix-blend-overlay"></div>

          <div className="relative px-8 py-16 md:py-20 md:px-12 max-w-3xl">
            {/* chỉ thay text */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Khoá học Pentest Web thực chiến
            </h1>

            <p className="text-lg text-indigo-100 mb-8 max-w-xl">
              Học từ cơ bản đến nâng cao. Thanh toán nhanh bằng QR và nhận khoá
              học qua email tự động.
            </p>

            <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
              Xem khoá học
            </button>
          </div>
        </div>
      )}

      {/* COURSE GRID — giữ nguyên KHUNG */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {searchQuery
              ? `Kết quả cho "${searchQuery}"`
              : "Danh sách khoá học"}
          </h2>

          {filteredCourses.length > 0 && (
            <span className="text-sm text-gray-500 font-medium">
              {filteredCourses.length} khoá học
            </span>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => {
                  setSelectedCourse(course);
                  setShowPayment(true);
                  setQrUrl("");
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
            <p className="text-lg text-gray-500">Không tìm thấy khoá học</p>
          </div>
        )}
      </div>

      {/* PAYMENT MODAL — thêm logic, KHÔNG phá layout */}
      {showPayment && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl">
            <button
              onClick={() => setShowPayment(false)}
              className="absolute right-3 top-3 text-gray-400 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">
              Thanh toán: {selectedCourse.title}
            </h2>

            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl p-3 mb-4"
            />

            <button
              onClick={() => handlePayment(selectedCourse)}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Tạo QR thanh toán
            </button>

            {qrUrl && (
              <div className="mt-6 text-center">
                <img src={qrUrl} className="mx-auto w-56" />
                <p className="text-sm text-gray-500 mt-2">Quét để thanh toán</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
