import { Link } from 'react-router';

export default function BankIntegrationPage() {
  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <h1 className="text-3xl font-mono text-gray-900 mb-8">Bank Integration</h1>
        
        <div className="max-w-2xl mx-auto bg-white border border-gray-300 p-8">
          <p className="font-mono text-sm text-gray-700 mb-6">
            Connect your bank account to enable LC-backed trading and automated settlements.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Bank Name</label>
              <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                <option>Commercial Bank of Ethiopia</option>
                <option>Awash Bank</option>
                <option>Dashen Bank</option>
                <option>Bank of Abyssinia</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Account Number</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Account Holder Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Branch</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">LC Facility Available</label>
              <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Connect Bank
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
