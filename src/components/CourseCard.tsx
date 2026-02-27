import { Link } from "react-router-dom";
import { Course } from "../data/courses";
import { Users, Eye } from "lucide-react";
import React from "react";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const discountPercentage = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100,
  );

  // Mock view count
  const views = course.students * 3 + 1200;

  return (
    <Link to={`/course/${course.id}`} className="group block h-full">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
        {/* 1. Course image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
            Bestseller
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          {/* 2. Course title */}
          <h3 className="font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-indigo-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>

          <div className="mt-auto flex flex-col">
            {/* 3. Price */}
            <div className="flex items-end space-x-2 mb-3">
              <span className="text-lg font-bold text-gray-900">
                ${course.price}
              </span>
              <span className="text-sm text-gray-400 line-through mb-0.5">
                ${course.originalPrice}
              </span>
              <span className="text-sm font-medium text-red-600 mb-0.5">
                -{discountPercentage}%
              </span>
            </div>

            {/* 4. Stats row */}
            <div className="flex items-center text-[13px] text-gray-500 mb-4 space-x-4">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1.5" />
                <span>{views.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1.5" />
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>

            {/* 5. CTA button */}
            <button className="w-full bg-indigo-50 text-indigo-700 font-medium py-2 px-4 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
