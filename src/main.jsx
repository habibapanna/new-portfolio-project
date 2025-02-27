import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Dropdown from './components/Dropdown/Dropdown';
import Contact from './components/Contact/Contact';
import { Outlet } from 'react-router-dom'; 
import Loader from './components/Loader/Loader';
import { FaArrowUp } from 'react-icons/fa';
import Details from './components/Details/Details';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll visibility for the top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || navigate.state === 'loading') {
    return <Loader />;
  }

  return (
    <div className="relative lg:flex">
      <Sidebar />
      <div className="flex-1 min-h-screen ml-0 lg:ml-72">
        <Outlet />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500"
          title="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1 className="text-5xl font-bold text-red-500">Page is not found</h1>,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'resume', element: <Resume /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'services', element: <Services /> },
      { path: 'dropdown', element: <Dropdown /> },
      { path: 'contact', element: <Contact /> },
      { path: 'details', element: <Details></Details> },
      { path: 'service-details', element: <ServiceDetails></ServiceDetails> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
