import { Link } from 'react-router';

export default function RegisterBuyerPage() {
  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <h1 className="text-3xl font-mono text-gray-900 mb-8">Register as Buyer</h1>
        
        <div className="max-w-2xl mx-auto bg-white border border-gray-300 p-8">
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Company Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Business Registration Number</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Tax ID</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Bank Account</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Submit Registration
              </button>
              <Link to="/">
                <button type="button" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
