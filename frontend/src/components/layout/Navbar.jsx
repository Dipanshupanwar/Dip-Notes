import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Academics', href: '/academic' },
    { name: 'Upload', href: '/up' },
    { name: 'Explore Your Domain', href: '/roadmap' },
    { name: 'Feedback', href: '/feedback' },
    { name: 'RateUs', href: '/rateus' },
    { name: 'AboutUs', href: '/about' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-1000 to-black text-white shadow-lg w-full z-50 font-poppins shadow-custom">

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-pink-600">DIP</span>
            <span className="text-3xl font-bold text-white ml-2">Notes</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
              key={item.name}
              to={item.href}
              className="text-white hover:text-blue-600 px-3 py-2 transition-colors duration-200"
            >
              {item.name}
            </Link>
            ))}
<Link
  to="/signup"
  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
>
  Login
</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              

              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}