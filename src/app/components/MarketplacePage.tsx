import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Filter, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';

const commodities = [
  { id: 1, name: 'Coffee (Arabica)', grade: 'Grade 1', price: 'ETB 145.50/kg', change: '+2.1%', volume: '850 MT', origin: 'Sidamo', trending: 'up' },
  { id: 2, name: 'Coffee (Robusta)', grade: 'Grade 2', price: 'ETB 98.25/kg', change: '+1.8%', volume: '620 MT', origin: 'Jimma', trending: 'up' },
  { id: 3, name: 'Coffee (Arabica)', grade: 'Grade 2', price: 'ETB 138.00/kg', change: '+1.5%', volume: '720 MT', origin: 'Yirgacheffe', trending: 'up' },
  { id: 4, name: 'Coffee (Arabica)', grade: 'Grade 3', price: 'ETB 125.50/kg', change: '+0.9%', volume: '480 MT', origin: 'Harrar', trending: 'up' },
  { id: 5, name: 'Coffee (Robusta)', grade: 'Grade 1', price: 'ETB 110.00/kg', change: '+2.2%', volume: '550 MT', origin: 'Jimma', trending: 'up' },
  { id: 6, name: 'Black Pepper', grade: 'Premium', price: 'ETB 285.00/kg', change: '+1.2%', volume: '125 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 7, name: 'Black Pepper', grade: 'Grade A', price: 'ETB 265.00/kg', change: '+0.9%', volume: '95 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 8, name: 'Turmeric', grade: 'Premium', price: 'ETB 185.00/kg', change: '+0.8%', volume: '110 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 9, name: 'Turmeric', grade: 'Grade A', price: 'ETB 178.50/kg', change: '+0.7%', volume: '95 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 10, name: 'Cinnamon', grade: 'Premium', price: 'ETB 352.00/kg', change: '+1.5%', volume: '78 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 11, name: 'Cinnamon', grade: 'Grade A', price: 'ETB 325.00/kg', change: '+1.2%', volume: '65 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 12, name: 'Cardamom', grade: 'Premium', price: 'ETB 425.00/kg', change: '+2.5%', volume: '45 MT', origin: 'Ethiopia', trending: 'up' },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="app-page">
      <div className="app-shell">
        <h1 className="app-page-title mb-2">Commodity Marketplace</h1>
        <p className="app-page-subtitle mb-8">
          Browse and trade coffee and spices with bank-backed guarantees
        </p>

        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden mb-4 px-4 py-2 border-2 border-gray-800 text-gray-800 font-mono flex items-center"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
        >
          <Filter size={20} className="mr-2" />
          Filters
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className={`md:w-64 md:sticky md:top-8 md:self-start md:max-h-[calc(100vh-4rem)] ${mobileFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white border-2 border-gray-300 p-6 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto">
              <h2 className="font-mono text-lg text-gray-900 mb-4">Filters</h2>

              {/* Commodity Type */}
              <div className="mb-6">
                <h3 className="font-mono text-sm text-gray-700 mb-3">Commodity Type</h3>
                <div className="space-y-2 font-mono text-sm">
                  {['All', 'Coffee', 'Spices'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>

              {/* Coffee Variety */}
              <div className="mb-6">
                <h3 className="font-mono text-sm text-gray-700 mb-3">Coffee Variety</h3>
                <div className="space-y-2 font-mono text-sm">
                  {['Arabica', 'Robusta'].map((variety) => (
                    <label key={variety} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {variety}
                    </label>
                  ))}
                </div>
              </div>

              {/* Grade */}
              <div className="mb-6">
                <h3 className="font-mono text-sm text-gray-700 mb-3">Grade</h3>
                <div className="space-y-2 font-mono text-sm">
                  {['Premium', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade A'].map((grade) => (
                    <label key={grade} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {grade}
                    </label>
                  ))}
                </div>
              </div>

              {/* Origin */}
              <div className="mb-6">
                <h3 className="font-mono text-sm text-gray-700 mb-3">Origin</h3>
                <div className="space-y-2 font-mono text-sm">
                  {['Sidamo', 'Yirgacheffe', 'Jimma', 'Harrar', 'Ethiopia'].map((origin) => (
                    <label key={origin} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {origin}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-mono text-sm text-gray-700 mb-3">Price Range (ETB/kg)</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="w-full border-2 border-gray-300 p-2 font-mono text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="w-full border-2 border-gray-300 p-2 font-mono text-sm"
                  />
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-gray-800 text-white font-mono hover:bg-gray-700">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search by commodity, origin, grade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 font-mono text-gray-900 bg-white"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="font-mono text-sm text-gray-600">
                Showing {commodities.length} commodities
              </p>
            </div>

            {/* Commodity Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {commodities.map((commodity) => (
                <Link key={commodity.id} to={`/commodity/${commodity.id}`}>
                  <div className="bg-white border-2 border-gray-300 p-5 hover:shadow-lg transition-shadow h-full">
                    {/* Image Placeholder */}
                    <div className="bg-gray-300 h-32 mb-4 flex items-center justify-center">
                      <span className="text-gray-500 font-mono text-xs">[COMMODITY IMAGE]</span>
                    </div>

                    <div className="mb-2">
                      <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1">
                        {commodity.grade}
                      </span>
                    </div>

                    <h3 className="font-mono text-lg text-gray-900 mb-3">{commodity.name}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-600">Price</span>
                        <span className="font-mono text-lg text-gray-900">{commodity.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-600">24h Change</span>
                        <span className={`font-mono text-sm flex items-center ${
                          commodity.trending === 'up' ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {commodity.trending === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                          <span className="ml-1">{commodity.change}</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-600">Available</span>
                        <span className="font-mono text-sm text-gray-900">{commodity.volume}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-600">Origin</span>
                        <span className="font-mono text-sm text-gray-900">{commodity.origin}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4 border-t-2 border-gray-200">
                      
                          <button className="w-full px-4 py-2 border border-gray-700 text-gray-800 font-mono bg-white">

                        Buy
                      </button>
                                      <button className="w-full px-4 py-2 border border-gray-700 text-gray-800 font-mono bg-white">
                        RFQ
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4">
              <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 font-mono hover:bg-gray-100 flex items-center">
                <ChevronLeft size={20} />
                Previous
              </button>
              <div className="flex space-x-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 border-2 font-mono ${
                      page === 1
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 font-mono hover:bg-gray-100 flex items-center">
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
