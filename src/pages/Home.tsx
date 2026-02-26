import { Course } from '../data/courses';
import CourseCard from '../components/CourseCard';

interface HomeProps {
  courses: Course[];
  searchQuery: string;
}

export default function Home({ courses, searchQuery }: HomeProps) {
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      {!searchQuery && (
        <div className="mb-12 bg-indigo-900 rounded-2xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/pattern/1200/400')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative px-8 py-16 md:py-20 md:px-12 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Learn without limits
            </h1>
            <p className="text-lg text-indigo-100 mb-8 max-w-xl">
              Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
            </p>
            <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
              Explore Courses
            </button>
          </div>
        </div>
      )}

      {/* Course Grid */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {searchQuery ? `Search results for "${searchQuery}"` : "Top courses in Development"}
          </h2>
          {filteredCourses.length > 0 && (
            <span className="text-sm text-gray-500 font-medium">
              {filteredCourses.length} results
            </span>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
            <p className="text-lg text-gray-500">No courses found matching your search.</p>
            <button 
              className="mt-4 text-indigo-600 font-medium hover:text-indigo-800"
              onClick={() => window.location.reload()}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
