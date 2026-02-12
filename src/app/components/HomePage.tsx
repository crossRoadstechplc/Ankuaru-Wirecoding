import { Link } from 'react-router';

const tickerData = [
  { name: 'Coffee (Arabica)', price: 'ETB 145.50/kg', change: '+2.1%', trending: 'up' },
  { name: 'Coffee (Robusta)', price: 'ETB 98.25/kg', change: '+1.8%', trending: 'up' },
  { name: 'Black Pepper', price: 'ETB 285.00/kg', change: '+1.2%', trending: 'up' },
  { name: 'Turmeric', price: 'ETB 178.50/kg', change: '+0.8%', trending: 'up' },
  { name: 'Cinnamon', price: 'ETB 352.00/kg', change: '+1.5%', trending: 'up' },
];

const featuredCommodities = [
  { id: 1, name: 'Coffee (Arabica)', grade: 'Grade 1', price: 'ETB 145.50/kg', change: '+2.1%', volume: '850 MT', origin: 'Sidamo', trending: 'up' },
  { id: 2, name: 'Coffee (Robusta)', grade: 'Grade 2', price: 'ETB 98.25/kg', change: '+1.8%', volume: '620 MT', origin: 'Jimma', trending: 'up' },
  { id: 3, name: 'Coffee (Arabica)', grade: 'Grade 2', price: 'ETB 138.00/kg', change: '+1.5%', volume: '720 MT', origin: 'Yirgacheffe', trending: 'up' },
  { id: 4, name: 'Black Pepper', grade: 'Premium', price: 'ETB 285.00/kg', change: '+1.2%', volume: '125 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 5, name: 'Turmeric', grade: 'Grade A', price: 'ETB 178.50/kg', change: '+0.8%', volume: '95 MT', origin: 'Ethiopia', trending: 'up' },
  { id: 6, name: 'Cinnamon', grade: 'Premium', price: 'ETB 352.00/kg', change: '+1.5%', volume: '78 MT', origin: 'Ethiopia', trending: 'up' },
];

const tradingModes = [
  {
    title: 'IOI / RFQ',
    description: 'Request for Quotation workflows with multi-party negotiation and award',
    features: ['Structured RFQs', 'Multi-seller quotes', 'Award-to-trade conversion'],
    icon: '[icon]',
    link: '/trading-modes/rfq'
  },
  {
    title: 'Auctions',
    description: 'English, reverse, and scheduled call auctions with real-time bidding',
    features: ['Configurable rules', 'Reserve prices', 'Auto extensions'],
    icon: '[icon]',
    link: '/trading-modes/auctions'
  },
  {
    title: 'Order Book',
    description: 'Continuous real-time trading with FIFO/pro-rata matching',
    features: ['Live order book', 'Market & limit orders', 'Real-time execution'],
    icon: '[icon]',
    link: '/trading-modes/tenders'
  },
];

const platformFeatures = [
  {
    title: 'Bank-Backed Guarantees',
    description: 'Letters of Credit and Performance Bonds ensure secure settlements',
    icon: '[icon]',
  },
  {
    title: 'Blockchain Verified',
    description: 'Smart contracts and immutable records for transparency',
    icon: '[icon]',
  },
  {
    title: 'DvP Settlement',
    description: 'Delivery-versus-Payment ensures simultaneous goods and payment transfer',
    icon: '[icon]',
  },
];

const newsItems = [
  { title: 'Ethiopian coffee exports reach record high in Q1 2026', time: '2 hours ago', category: 'Market News' },
  { title: 'New warehouse integration enables real-time inventory tracking', time: '5 hours ago', category: 'Platform Updates' },
  { title: 'Spice trading volumes increase 25% month-over-month', time: '8 hours ago', category: 'Market News' },
  { title: 'Three major banks join ANKUARU for LC-backed trading', time: '1 day ago', category: 'Announcements' },
];

export default function HomePage() {
  return (
    <div className="app-page">
      {/* Hero Section */}
      <section className="bg-gray-100 border-b border-gray-300">
        <div className="app-shell py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-mono text-gray-900 mb-4 tracking-widest">
              ANKUARU
            </h1>
            <p className="text-xl font-mono text-gray-700 mb-2">
              Digital Commodity Trading Marketplace
            </p>
            <p className="text-lg font-mono text-gray-600 mb-8">
              Bank-backed, blockchain-verified trading for coffee and spices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <button className="px-8 py-3 border border-gray-700 text-gray-800 font-mono text-lg bg-white">
                  Start Trading
                </button>
              </Link>
              <Link to="/documentation">
                <button className="px-8 py-3 border border-gray-700 text-gray-800 font-mono text-lg bg-white">
                  View Documentation
                </button>
              </Link>
            </div>
          </div>

          {/* Live Ticker */}
          <div className="border border-gray-300 bg-gray-50 p-4">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="font-mono text-sm text-gray-700">MARKET PRICES</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tickerData.map((item, index) => (
                <div key={index} className="bg-white border border-gray-300 p-3">
                  <div className="font-mono text-xs text-gray-600 mb-1">{item.name}</div>
                  <div className="font-mono font-bold text-gray-900">{item.price}</div>
                  <div className="flex items-center font-mono text-xs text-gray-700">
                    <span className="mr-1">{item.trending === 'up' ? '▲' : '▼'}</span>
                    <span>{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Modes */}
      <section className="app-shell py-12">
        <h2 className="text-2xl md:text-3xl font-mono text-gray-900 mb-8 text-center">Three Trading Modes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {tradingModes.map((mode, index) => (
            <div key={index} className="bg-white border border-gray-300 p-6">
              <div className="text-sm font-mono text-gray-500 mb-4">{mode.icon}</div>
              <h3 className="font-mono text-xl text-gray-900 mb-3">{mode.title}</h3>
              <p className="font-mono text-sm text-gray-600 mb-4">{mode.description}</p>
              <ul className="space-y-2 mb-6">
                {mode.features.map((feature, idx) => (
                  <li key={idx} className="font-mono text-xs text-gray-700 flex items-center">
                    <span className="mr-2">-</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={mode.link}>
                <button className="w-full px-4 py-2 border border-gray-700 text-gray-800 font-mono bg-white">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-gray-100 border-y border-gray-300">
        <div className="app-shell py-12">
          <h2 className="text-2xl md:text-3xl font-mono text-gray-900 mb-8 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 border border-gray-400 text-gray-500 flex items-center justify-center text-xs font-mono">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-mono text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="font-mono text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Commodities */}
      <section className="app-shell py-12">
        <h2 className="text-2xl md:text-3xl font-mono text-gray-900 mb-8">Featured Commodities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCommodities.map((commodity) => (
            <Link key={commodity.id} to={`/commodity/${commodity.id}`}>
            <div className="bg-white border border-gray-300 p-6">
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-32 mb-4 flex items-center justify-center border border-gray-300">
                <span className="text-gray-500 font-mono text-xs">[COMMODITY IMAGE]</span>
              </div>

              <div className="mb-2">
                <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1 border border-gray-300">
                  {commodity.grade}
                </span>
              </div>
              <h3 className="font-mono text-lg text-gray-900 mb-2">{commodity.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-gray-600">Price</span>
                  <span className="font-mono text-lg text-gray-900">{commodity.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-gray-600">24h Change</span>
                  <span className="font-mono text-sm text-gray-700">
                    {commodity.change}
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

              <div className="grid grid-cols-2 gap-2">
                <Link key={commodity.id} to={`/commodity/${commodity.id}`}>
                  <button className="w-full px-4 py-2 border border-gray-700 text-gray-800 font-mono bg-white">
                    Buy
                  </button>
                </Link>
                <Link key={commodity.id} to={`/commodity/${commodity.id}`}>
                  <button className="w-full px-4 py-2 border border-gray-700 text-gray-800 font-mono bg-white">
                    RFQ
                  </button>
                </Link>
              </div>
            </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/marketplace">
            <button className="px-6 py-3 border border-gray-700 text-gray-800 font-mono bg-white">
              View All Commodities
            </button>
          </Link>
        </div>
      </section>

      {/* Market News */}
      <section className="bg-gray-100 border-y border-gray-300">
        <div className="app-shell py-12">
          <h2 className="text-2xl md:text-3xl font-mono text-gray-900 mb-8">Platform Updates & News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((news, index) => (
              <div key={index} className="border border-gray-300 p-6 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1 border border-gray-300">
                    {news.category}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{news.time}</span>
                </div>
                <h3 className="font-mono text-gray-900 mb-2">{news.title}</h3>
                <button className="font-mono text-sm text-gray-700 flex items-center">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KYC Requirements */}
      <section className="app-shell py-12">
        <h2 className="text-2xl md:text-3xl font-mono text-gray-900 mb-8 text-center">KYC Requirements</h2>
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8">
          <p className="font-mono text-sm text-gray-700 mb-6">
            To ensure secure and compliant trading, all users must complete KYC verification before accessing the platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-mono text-lg text-gray-900 mb-4">Required Documents</h3>
              <ul className="space-y-2 font-mono text-sm text-gray-700">
                <li>- Business registration certificate</li>
                <li>- Tax identification number (TIN)</li>
                <li>- Bank account verification letter</li>
                <li>- Authorized signatory ID (Passport/National ID)</li>
                <li>- Proof of business address</li>
                <li>- Trade license</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-lg text-gray-900 mb-4">Verification Process</h3>
              <ul className="space-y-2 font-mono text-sm text-gray-700">
                <li>1. Submit registration form</li>
                <li>2. Upload required documents</li>
                <li>3. Verification review (2-3 business days)</li>
                <li>4. Bank account linking</li>
                <li>5. Platform access granted</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link to="/kyc-registration">
              <button className="px-8 py-3 border border-gray-700 text-gray-800 font-mono text-lg bg-white">
                Start KYC Registration
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 text-gray-900 border-t border-gray-300">
        <div className="app-shell py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-mono mb-4">Ready to Trade?</h2>
          <p className="text-lg font-mono mb-8 text-gray-700">
            Join Ethiopia's first blockchain-enabled commodity trading platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/buyer">
              <button className="px-8 py-3 border border-gray-700 text-gray-800 font-mono text-lg bg-white">
                Register as Buyer
              </button>
            </Link>
            <Link to="/register/seller">
              <button className="px-8 py-3 border border-gray-700 text-gray-800 font-mono text-lg bg-white">
                Register as Seller
              </button>
            </Link>
            <Link to="/bank-integration">
              <button className="px-8 py-3 border border-gray-700 text-gray-800 font-mono text-lg bg-white">
                Bank Integration
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
