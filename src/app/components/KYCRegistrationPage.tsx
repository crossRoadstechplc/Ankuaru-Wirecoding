import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function KYCRegistrationPage() {
  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <Link to="/" className="inline-flex items-center font-mono text-gray-700 hover:text-gray-900 mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-mono text-gray-900 mb-8">KYC Registration</h1>
        
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8">
          <p className="font-mono text-sm text-gray-700 mb-6">
            Complete your KYC verification to access the trading platform. All information is encrypted and securely stored.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Company Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Business Registration Number</label>
                <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Tax Identification Number (TIN)</label>
                <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Business Address</label>
              <textarea className="w-full border border-gray-300 p-3 font-mono text-sm" rows={3}></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Authorized Signatory Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h3 className="font-mono text-sm text-gray-900 mb-4">Document Upload</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Business Registration Certificate</label>
                  <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Tax Identification Certificate</label>
                  <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Bank Account Verification Letter</label>
                  <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Authorized Signatory ID (Passport/National ID)</label>
                  <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Proof of Business Address</label>
                  <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Trade License</label>
                  <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <label className="flex items-start font-mono text-sm text-gray-700">
                <input type="checkbox" className="mr-3 mt-1" />
                <span>I confirm that all information provided is accurate and I agree to the terms and conditions of the platform</span>
              </label>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Submit KYC Application
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
