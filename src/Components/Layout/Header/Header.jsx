import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-100/80 backdrop-blur-md">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Also Links to Home) */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 shadow-sm rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-4.35-7-10a7 7 0 0114 0c0 5.65-7 10-7 10z"
                />
              </svg>
            </div>

            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Vital+Flow
            </span>
          </Link>

          {/* Navigation */}
          <nav className="items-center hidden gap-10 font-medium text-gray-700 md:flex">
            <Link
              to="/"
              className="transition duration-300 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition duration-300 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              to="/services"
              className="transition duration-300 hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              to="/doctors"
              className="transition duration-300 hover:text-blue-600"
            >
              Doctors
            </Link>

            <Link
              to="/blog"
              className="transition duration-300 hover:text-blue-600"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div>
            <button className="px-6 py-3 font-medium text-white transition duration-300 bg-blue-600 rounded-full shadow-sm hover:bg-blue-700">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
