import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gray-400 flex items-center justify-center">
              <span className="text-white text-xs">LOGO</span>
            </div>
            <span className="ml-2 text-lg font-mono text-gray-800">ANKUARU</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-700 hover:text-gray-900 font-mono">
              Markets
            </Link>
            <Link to="/rfq" className="text-gray-700 hover:text-gray-900 font-mono">
              RFQ
            </Link>
            <Link to="/auctions" className="text-gray-700 hover:text-gray-900 font-mono">
              Auctions
            </Link>
            <Link to="/tenders" className="text-gray-700 hover:text-gray-900 font-mono">
              Order Book
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 font-mono">
              Dashboard
            </Link>
            <Link to="/banks" className="text-gray-700 hover:text-gray-900 font-mono">
              Banks 
              
            </Link>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border-2 border-gray-800 text-gray-800 font-mono">
                Login
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white font-mono">
                Register
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-gray-300">
            <div className="flex flex-col space-y-4">
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-gray-900 font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                Markets
              </Link>
              <Link
                to="/rfq"
                className="text-gray-700 hover:text-gray-900 font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                RFQ
              </Link>
              <Link
                to="/auctions"
                className="text-gray-700 hover:text-gray-900 font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                Auctions
              </Link>
              <Link
                to="/tenders"
                className="text-gray-700 hover:text-gray-900 font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Book
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-gray-900 font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link to="/banks"
              className='text-gray-700 hover:text-gray-900 font-mono'
              onClick={() => setMobileMenuOpen(false)}
              >
                Banks 

              </Link>
              <button className="px-4 py-2 border-2 border-gray-800 text-gray-800 font-mono text-left">
                Login
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white font-mono">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}   