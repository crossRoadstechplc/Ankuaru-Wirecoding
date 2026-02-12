import { Link } from 'react-router';

export default function SellPage() {
  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <h1 className="text-3xl font-mono text-gray-900 mb-8">Sell Commodity</h1>
        
        <div className="max-w-2xl mx-auto bg-white border border-gray-300 p-8">
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Category</label>
              <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                <option>Coffee</option>
                <option>Spices</option>
                <option>Pulses</option>
                <option>Grains</option>
                <option>Cereals</option>
                <option>Fruits</option>
                <option>Vegetables</option>
                <option>Oil Seeds</option>
                <option>Herbs</option>
                <option>Legumes</option>
                <option>Daily Banks Forex Rate</option>
                <option>herbs</option>
                <option>oil seeds</option>

              </select>
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Product Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Product Photo</label>
              <input type="file" className="w-full border border-gray-300 p-3 font-mono text-sm" />
            </div>

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Region</label>
              <input type="text" className="w-full border border-gray-300 p-3 font-mono text-sm" />
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

            <div>
              <label className="block font-mono text-sm text-gray-700 mb-2">Product Description</label>
              <textarea className="w-full border border-gray-300 p-3 font-mono text-sm" rows={4}></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Quantity</label>
                <input type="number" className="w-full border border-gray-300 p-3 font-mono text-sm" />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">Unit</label>
                <select className="w-full border border-gray-300 p-3 font-mono text-sm">
                  <option>kg</option>
                  <option>quintal</option>
                  <option>Ton</option>
                  <option>FCL</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="px-8 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
                List for Sale
              </button>
              <Link to="/marketplace">
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
