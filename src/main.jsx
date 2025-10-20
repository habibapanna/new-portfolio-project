import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Dropdown from "./components/Dropdown/Dropdown";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import Details from "./components/Details/Details";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import AllPortfolio from "./components/AllPortfolio/AllPortfolio";


const Layout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll visibility for the top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to down handler
  const scrollToDown = () => {
    const scrollHeight = window.innerHeight;
    window.scrollBy({ top: scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || navigate.state === "loading") {
    return <Loader />;
  }

  return (
    <div className="relative lg:flex mx-auto">
      <Sidebar />
      <div className="flex-1 min-h-screen ml-0 lg:ml-72 relative overflow-hidden">
        <Outlet />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 bg-blue-800 text-white rounded-full shadow-lg hover:cursor-pointer z-40 transition-transform duration-300 hover:scale-110"
          title="Scroll to Top"
        >
          <FaChevronUp className="md:text-2xl" />
        </button>
      )}

      {/* Scroll Down Button */}
      {!showScrollTop && (
        <button
          onClick={scrollToDown}
          className="fixed bottom-6 right-6 p-2 text-blue-800 bg-white shadow-lg hover:bg-blue-800 hover:text-white hover:cursor-pointer z-50 transition-transform duration-300 hover:scale-110"
          title="Scroll Down"
        >
          <FaArrowDownLong className="md:text-2xl" />
        </button>
      )}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <h1 className="text-5xl font-bold text-red-500">Page is not found <Link className="text-blue-800 hover:underline" to="/">Go Back to Home</Link></h1>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "services", element: <Services /> },
      { path: "dropdown", element: <Dropdown /> },
      { path: "contact", element: <Contact /> },
      { path: "details/:id", element: <Details /> },
      { path: "service-details", element: <ServiceDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogDetails /> },
      {
    path: "/all",
    element: <AllPortfolio />, // ✅ new page
  },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
