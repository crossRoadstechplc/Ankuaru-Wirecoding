import { Link } from 'react-router';

export default function CreateRFQPage() {
  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <h1 className="text-3xl font-mono text-gray-900 mb-8">Create New RFQ</h1>
        
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8">
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">RFQ Title</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" placeholder="e.g., Coffee Arabica Grade 1 - 100 MT" />
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
                  <option>FCL</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Delivery Location</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" placeholder="e.g., Addis Ababa" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Delivery Date</label>
              <input type="date" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Quote Submission Deadline</label>
              <input type="date" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Additional Requirements</label>
              <textarea className="w-full border border-gray-300 p-3 font-mono text-sm" rows={4} placeholder="Specify quality standards, packaging requirements, certifications, etc."></textarea>
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

            <div className="flex gap-4">
              <button type="submit" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Publish RFQ
              </button>
              <button type="button" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                Save as Draft
              </button>
              <Link to="/rfq">
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
