import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, TrendingUp } from 'lucide-react';

export default function CommodityDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');

  return (
    <div className="app-page">
      <div className="app-shell">
        <Link to="/marketplace" className="inline-flex items-center font-mono text-gray-700 hover:text-gray-900 mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-300 p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-mono text-gray-900">Coffee (Arabica)</h1>
                    <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1 border border-gray-300">Grade 1</span>
                    {id && <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1 border border-gray-300">ID: {id}</span>}
                  </div>
                  <p className="font-mono text-sm text-gray-600">Origin: Sidamo, Ethiopia</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <div className="font-mono text-3xl text-gray-900 mb-1">ETB 145.50/kg</div>
                  <div className="flex items-center text-gray-700 font-mono">
                    <TrendingUp size={16} />
                    <span className="ml-1">+2.1%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm mb-4">
                <div>
                  <div className="text-gray-600 mb-1">Region</div>
                  <div className="text-gray-900">Sidamo</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Grade</div>
                  <div className="text-gray-900">Grade 1</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Available</div>
                  <div className="text-gray-900">850 MT</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Category</div>
                  <div className="text-gray-900">Coffee</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm mb-4">
                <div>
                  <div className="text-gray-600 mb-1">Processing Method</div>
                  <div className="text-gray-900">Fully Washed</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Harvest Season</div>
                  <div className="text-gray-900">Nov - Feb</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Moisture Content</div>
                  <div className="text-gray-900">11.5%</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Screen Size</div>
                  <div className="text-gray-900">15+</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
                <div>
                  <div className="text-gray-600 mb-1">Certification</div>
                  <div className="text-gray-900">Organic, Fair Trade</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Packaging</div>
                  <div className="text-gray-900">60kg Jute Bags</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Min Order</div>
                  <div className="text-gray-900">5 MT</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Delivery Time</div>
                  <div className="text-gray-900">7-14 Days</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300">
                <h3 className="font-mono text-sm text-gray-700 mb-2">Product Description</h3>
                <p className="font-mono text-sm text-gray-600">Premium Arabica coffee beans from Sidamo region. Known for exceptional quality with floral and citrus notes. Fully washed processing method. Meets international quality standards.</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300">
                <h3 className="font-mono text-sm text-gray-700 mb-2">Flavor Profile</h3>
                <p className="font-mono text-sm text-gray-600">Bright acidity, medium body, notes of bergamot, lemon, and jasmine. Clean finish with lingering sweetness.</p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-6 mb-8">
              <h2 className="font-mono text-lg text-gray-900 mb-4">Price History</h2>
              <div className="bg-gray-100 border border-gray-300 p-4 mb-4 h-48 flex items-center justify-center">
                <div className="font-mono text-xs text-gray-500">[PRICE CHART]</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 text-gray-700">Date</th>
                      <th className="text-right py-2 text-gray-700">Price (ETB/kg)</th>
                      <th className="text-right py-2 text-gray-700">Change</th>
                      <th className="text-right py-2 text-gray-700">Volume (MT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-900">2026-02-15</td>
                      <td className="text-right text-gray-900">145.50</td>
                      <td className="text-right text-green-700">+2.1%</td>
                      <td className="text-right text-gray-600">850</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-900">2026-02-14</td>
                      <td className="text-right text-gray-900">142.50</td>
                      <td className="text-right text-green-700">+1.5%</td>
                      <td className="text-right text-gray-600">720</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-900">2026-02-13</td>
                      <td className="text-right text-gray-900">140.40</td>
                      <td className="text-right text-red-700">-0.8%</td>
                      <td className="text-right text-gray-600">680</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-900">2026-02-12</td>
                      <td className="text-right text-gray-900">141.50</td>
                      <td className="text-right text-green-700">+1.2%</td>
                      <td className="text-right text-gray-600">790</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-900">2026-02-11</td>
                      <td className="text-right text-gray-900">139.80</td>
                      <td className="text-right text-green-700">+0.5%</td>
                      <td className="text-right text-gray-600">650</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-300 p-6 sticky top-4">
              <h2 className="font-mono text-lg text-gray-900 mb-6">Place Order</h2>

              <form className="space-y-4">
                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Category</label>
                  <input type="text" value="Coffee" disabled className="w-full border border-gray-300 p-3 font-mono text-sm bg-gray-50" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Product Name</label>
                  <input type="text" value="Coffee (Arabica)" disabled className="w-full border border-gray-300 p-3 font-mono text-sm bg-gray-50" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Region</label>
                  <input type="text" value="Sidamo" disabled className="w-full border border-gray-300 p-3 font-mono text-sm bg-gray-50" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Grade</label>
                  <input type="text" value="Grade 1" disabled className="w-full border border-gray-300 p-3 font-mono text-sm bg-gray-50" />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Quantity</label>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    className="w-full border border-gray-300 p-3 font-mono text-sm" 
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm text-gray-700 mb-2">Unit</label>
                  <select 
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full border border-gray-300 p-3 font-mono text-sm"
                  >
                    <option value="kg">kg</option>
                    <option value="quintal">quintal</option>
                    <option value="Ton">Ton</option>
                    <option value="FCL">FCL</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <div className="flex justify-between font-mono text-sm mb-2">
                    <span className="text-gray-600">Price per {unit}:</span>
                    <span className="text-gray-900">ETB 145.50</span>
                  </div>
                  <div className="flex justify-between font-mono text-lg">
                    <span className="text-gray-700">Total:</span>
                    <span className="text-gray-900">ETB {quantity ? (145.50 * parseFloat(quantity)).toFixed(2) : '0.00'}</span>
                  </div>
                </div>

                <Link to="/buy">
                  <button type="button" className="w-full px-6 py-3 border-2 border-gray-800 text-gray-800 font-mono text-lg hover:bg-gray-100">
                    Proceed to Buy
                  </button>
                </Link>

                <Link to="/sell">
                  <button type="button" className="w-full px-6 py-3 border border-gray-700 text-gray-800 font-mono hover:bg-gray-100">
                    List for Sale
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
