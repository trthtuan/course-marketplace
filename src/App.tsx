import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Guide from './pages/Guide';
import PurchaseGuide from './pages/PurchaseGuide';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { courses } from './data/courses';

// Wrapper component to conditionally render Header/Footer
function Layout() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  // Don't show header/footer on auth pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      {!isAuthPage && <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home courses={courses} searchQuery={searchQuery} />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/purchase-guide" element={<PurchaseGuide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
