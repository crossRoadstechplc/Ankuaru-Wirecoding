import { Link } from 'react-router';
import { useState } from 'react';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <div className="app-page">
      <div className="app-shell py-12">
        <h1 className="text-3xl md:text-4xl font-mono text-gray-900 mb-8">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-300 p-4 sticky top-4">
              <nav className="space-y-2">
                <button onClick={() => setActiveSection('getting-started')} className={`w-full text-left px-3 py-2 font-mono text-sm ${activeSection === 'getting-started' ? 'bg-gray-200 border border-gray-400' : 'border border-transparent'}`}>Getting Started</button>
                <button onClick={() => setActiveSection('trading-modes')} className={`w-full text-left px-3 py-2 font-mono text-sm ${activeSection === 'trading-modes' ? 'bg-gray-200 border border-gray-400' : 'border border-transparent'}`}>Trading Modes</button>
                <button onClick={() => setActiveSection('settlement')} className={`w-full text-left px-3 py-2 font-mono text-sm ${activeSection === 'settlement' ? 'bg-gray-200 border border-gray-400' : 'border border-transparent'}`}>Settlement</button>
                <button onClick={() => setActiveSection('api')} className={`w-full text-left px-3 py-2 font-mono text-sm ${activeSection === 'api' ? 'bg-gray-200 border border-gray-400' : 'border border-transparent'}`}>API Reference</button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white border border-gray-300 p-8">
              {activeSection === 'getting-started' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-mono text-gray-900 mb-4">Getting Started</h2>
                  
                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Platform Overview</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">ANKUARU is a digital commodity trading marketplace specializing in Ethiopian coffee and spices. The platform combines traditional trading mechanisms with modern technology including blockchain verification and bank-backed guarantees.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Account Setup</h3>
                    <p className="font-mono text-sm text-gray-700 mb-2">To start trading on ANKUARU:</p>
                    <ol className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>1. Register with your business details</li>
                      <li>2. Complete KYC verification</li>
                      <li>3. Link your bank account</li>
                      <li>4. Set up trading preferences</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">KYC Requirements</h3>
                    <p className="font-mono text-sm text-gray-700 mb-2">Required documents:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- Business registration certificate</li>
                      <li>- Tax identification number</li>
                      <li>- Bank account verification</li>
                      <li>- Authorized signatory identification</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'trading-modes' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-mono text-gray-900 mb-4">Trading Modes</h2>
                  
                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">IOI / RFQ</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">Request for Quotation allows buyers to solicit quotes from multiple sellers. The process includes:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- Create structured RFQ with specifications</li>
                      <li>- Receive quotes from qualified sellers</li>
                      <li>- Negotiate terms and conditions</li>
                      <li>- Award to selected seller</li>
                      <li>- Automatic conversion to binding trade</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Auctions</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">Multiple auction formats supported:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- English Auction: Ascending price, highest bid wins</li>
                      <li>- Reverse Auction: Descending price, lowest offer wins</li>
                      <li>- Call Auction: Scheduled batch matching</li>
                      <li>- Reserve prices and auto-extensions available</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Order Book</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">Continuous trading with real-time order matching:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- Market orders: Immediate execution at best price</li>
                      <li>- Limit orders: Execute at specified price or better</li>
                      <li>- FIFO/Pro-rata matching algorithms</li>
                      <li>- Real-time order book visibility</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'settlement' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-mono text-gray-900 mb-4">Settlement & Security</h2>
                  
                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">DvP Settlement</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">Delivery-versus-Payment ensures simultaneous exchange of goods and payment, eliminating counterparty risk. The process is automated and verified through smart contracts.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Bank-Backed Guarantees</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">All trades are secured with:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- Letters of Credit (LC) for payment assurance</li>
                      <li>- Performance Bonds for delivery guarantee</li>
                      <li>- Integration with major Ethiopian banks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Blockchain Verification</h3>
                    <p className="font-mono text-sm text-gray-700 mb-3">Every transaction is recorded on blockchain for:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- Immutable audit trail</li>
                      <li>- Transparent price discovery</li>
                      <li>- Smart contract automation</li>
                      <li>- Dispute resolution evidence</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'api' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-mono text-gray-900 mb-4">API Reference</h2>
                  
                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Authentication</h3>
                    <div className="bg-gray-100 border border-gray-300 p-4 font-mono text-xs mb-3">
                      <div>POST /api/v1/auth/token</div>
                      <div className="text-gray-600 mt-2">Headers: API-Key, API-Secret</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Market Data</h3>
                    <div className="bg-gray-100 border border-gray-300 p-4 font-mono text-xs mb-3">
                      <div>GET /api/v1/market/prices</div>
                      <div>GET /api/v1/market/orderbook/:commodity</div>
                      <div>GET /api/v1/market/trades/recent</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Trading API</h3>
                    <div className="bg-gray-100 border border-gray-300 p-4 font-mono text-xs mb-3">
                      <div>POST /api/v1/orders/create</div>
                      <div>PUT /api/v1/orders/:id/cancel</div>
                      <div>GET /api/v1/orders/status/:id</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-gray-900 mb-2">Webhooks</h3>
                    <p className="font-mono text-sm text-gray-700 mb-2">Subscribe to real-time events:</p>
                    <ul className="font-mono text-sm text-gray-700 space-y-1 ml-4">
                      <li>- order.filled</li>
                      <li>- order.cancelled</li>
                      <li>- trade.settled</li>
                      <li>- price.alert</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/">
            <button className="px-6 py-2 border border-gray-700 text-gray-800 font-mono bg-white">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
