import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function CreateAuctionPage() {
  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <Link to="/auctions" className="inline-flex items-center font-mono text-gray-700 hover:text-gray-900 mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Auctions
        </Link>

        <h1 className="text-3xl font-mono text-gray-900 mb-8">Create New Auction</h1>
        
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8">
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Auction Title</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" placeholder="e.g., Coffee Arabica Grade 1 - 250 MT" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Auction Type</label>
              <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                <option>English Auction (Ascending Price)</option>
                <option>Reverse Auction (Descending Price)</option>
                <option>Scheduled Call Auction</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Commodity</label>
                <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                  <option>Coffee (Arabica)</option>
                  <option>Coffee (Robusta)</option>
                  <option>Black Pepper</option>
                  <option>Turmeric</option>
                  <option>Cinnamon</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Grade</label>
                <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade A</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Quantity</label>
                <input type="number" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Unit</label>
                <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                  <option>MT (Metric Ton)</option>
                  <option>kg</option>
                  <option>quintal</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Starting Price (ETB/kg)</label>
                <input type="number" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Reserve Price (ETB/kg)</label>
                <input type="number" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Bid Increment (ETB)</label>
              <input type="number" className="w-full border border-gray-300 p-3 font-mono text-sm" placeholder="Minimum bid increment" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Start Date & Time</label>
                <input type="datetime-local" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">End Date & Time</label>
                <input type="datetime-local" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Auto Extension</label>
              <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                <option>Enabled (5 minutes)</option>
                <option>Enabled (10 minutes)</option>
                <option>Disabled</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Delivery Location</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" placeholder="e.g., Addis Ababa Warehouse" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Payment Terms</label>
              <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                <option>Letter of Credit (LC)</option>
                <option>Cash Against Documents (CAD)</option>
                <option>Advance Payment</option>
                <option>Net 30 Days</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Quality Standards</label>
              <textarea className="w-full border border-gray-300 p-3 font-mono text-sm" rows={3} placeholder="Specify quality requirements, certifications, inspection procedures"></textarea>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Additional Terms & Conditions</label>
              <textarea className="w-full border border-gray-300 p-3 font-mono text-sm" rows={4} placeholder="Any additional terms, conditions, or notes for bidders"></textarea>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h3 className="font-mono text-sm text-gray-900 mb-4">Auction Settings</h3>
              
              <div className="space-y-3">
                <label className="flex items-center font-mono text-sm text-gray-700">
                  <input type="checkbox" className="mr-3" />
                  Require bidder pre-qualification
                </label>
                <label className="flex items-center font-mono text-sm text-gray-700">
                  <input type="checkbox" className="mr-3" />
                  Allow proxy bidding
                </label>
                <label className="flex items-center font-mono text-sm text-gray-700">
                  <input type="checkbox" className="mr-3" />
                  Hide bidder identities
                </label>
                <label className="flex items-center font-mono text-sm text-gray-700">
                  <input type="checkbox" className="mr-3" />
                  Send notifications to watchers
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Create Auction
              </button>
              <button type="button" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Save as Draft
              </button>
              <Link to="/auctions">
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
