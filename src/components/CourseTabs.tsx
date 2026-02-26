import { useState } from 'react';

interface CourseTabsProps {
  description: string;
  guide: string;
  feedback: string;
}

export default function CourseTabs({ description, guide, feedback }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto no-scrollbar" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('description')}
            className={`${
              activeTab === 'description'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`${
              activeTab === 'guide'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
          >
            Purchase Guide
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`${
              activeTab === 'feedback'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
          >
            Customer Feedback
          </button>
        </nav>
      </div>

      <div className="py-6 h-auto overflow-visible">
        {activeTab === 'description' && (
          <div className="prose max-w-none text-gray-600 leading-relaxed h-auto overflow-visible">
            <p className="whitespace-pre-wrap">{description}</p>
            <p className="mt-4">
              This comprehensive course is designed to take you from beginner to advanced. 
              You will learn through practical examples, hands-on projects, and expert guidance.
              By the end of this course, you will have the skills and confidence to apply what you've learned in real-world scenarios.
            </p>
            
            {/* Added long content to demonstrate unlimited height */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Detailed Course Overview</h3>
              <p>
                Welcome to the most comprehensive and up-to-date course on this subject. In this program, we leave no stone unturned. 
                Whether you are a complete beginner looking to start from scratch, or an experienced professional looking to brush up on your skills, 
                this course has something for everyone. We have carefully structured the curriculum to ensure a smooth learning curve, 
                starting with the absolute basics and gradually moving towards advanced, industry-level concepts.
              </p>
              <p>
                Throughout this journey, you will not only learn the theoretical foundations but also apply them in real-world scenarios. 
                We believe in learning by doing, which is why this course is packed with hands-on exercises, quizzes, and massive capstone projects. 
                You will build a portfolio of work that you can proudly show to potential employers or clients.
              </p>
              <p>
                Our expert instructors have years of industry experience and have distilled their knowledge into bite-sized, easy-to-understand lessons. 
                We cover best practices, common pitfalls to avoid, and insider tips that you won't find in standard documentation. 
                Furthermore, the course is continuously updated to reflect the latest trends and technologies in the field, ensuring your skills remain relevant.
              </p>
              <p>
                Beyond the video lectures, you will get access to a vibrant community of learners. You can ask questions, share your progress, 
                and collaborate on projects. Our teaching assistants are also available to help you whenever you get stuck. 
                We are committed to your success and will provide all the support you need to achieve your learning goals.
              </p>
              <p>
                By the end of this course, you will have transformed from a novice into a confident practitioner. 
                You will be equipped with the tools, knowledge, and practical experience needed to tackle complex problems and build robust solutions. 
                Don't miss this opportunity to invest in your future and take your career to the next level. Enroll now and start learning today!
              </p>
            </div>
          </div>
        )}
        {activeTab === 'guide' && (
          <div className="prose max-w-none text-gray-600 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900 mb-2">How to purchase and access this course:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Click the "Buy now" or "Add to cart" button.</li>
              <li>Complete the checkout process using your preferred payment method (Visa, Mastercard, Momo, or Bank Transfer).</li>
              <li>Once payment is confirmed, the course will be instantly activated.</li>
              <li>Go to "My Courses" in your account dashboard to start learning immediately.</li>
            </ul>
            <p className="mt-4 italic text-sm">{guide}</p>
          </div>
        )}
        {activeTab === 'feedback' && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <span className="ml-2 text-sm font-bold text-gray-900">Nguyen Van A</span>
                <span className="ml-2 text-xs text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-600 text-sm">"This course exceeded my expectations. The instructor explains complex concepts in a very simple and easy-to-understand way. Highly recommended!"</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <span className="ml-2 text-sm font-bold text-gray-900">Tran Thi B</span>
                <span className="ml-2 text-xs text-gray-500">1 week ago</span>
              </div>
              <p className="text-gray-600 text-sm">"Great content and very well structured. The practical exercises really helped me solidify my understanding."</p>
            </div>
            <p className="text-sm text-gray-500 italic mt-4">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}
