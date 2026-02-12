import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-mono text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-600">
              <li><Link to="/" className="hover:text-gray-900">About Us</Link></li>
              <li><Link to="/" className="hover:text-gray-900">Careers</Link></li>
              <li><Link to="/" className="hover:text-gray-900">Press</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-gray-800 mb-4">Products</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-600">
              <li><Link to="/marketplace" className="hover:text-gray-900">Markets</Link></li>
              <li><Link to="/marketplace" className="hover:text-gray-900">Trading</Link></li>
              <li><Link to="/tenders" className="hover:text-gray-900">Tenders</Link></li>
              <li><Link to="/dashboard" className="hover:text-gray-900">Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-600">
              <li><Link to="/" className="hover:text-gray-900">Help Center</Link></li>
              <li><Link to="/" className="hover:text-gray-900">API Docs</Link></li>
              <li><Link to="/" className="hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-600">
              <li><Link to="/" className="hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-gray-900">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-300">
          <p className="text-center font-mono text-sm text-gray-600">
            © 2026 CommodityTrade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}