import { useState } from 'react';
import { Gavel, Clock, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router';

const liveAuctions = [
  {
    id: 'AUC-2026-001',
    title: 'Coffee (Arabica) Grade 1 - Yirgacheffe Origin',
    type: 'English Auction',
    commodity: 'Coffee (Arabica)',
    quantity: '250 MT',
    startingPrice: 'ETB 140.00/kg',
    currentBid: 'ETB 148.50/kg',
    reservePrice: 'ETB 145.00/kg',
    reserveMet: true,
    bidders: 12,
    timeRemaining: '2h 35m',
    status: 'Live',
    auctioneer: 'Ethiopian Coffee Cooperative',
  },
  {
    id: 'AUC-2026-002',
    title: 'Black Pepper Premium Grade - 100 MT',
    type: 'Reverse Auction',
    commodity: 'Black Pepper',
    quantity: '100 MT',
    startingPrice: 'ETB 290.00/kg',
    currentBid: 'ETB 282.00/kg',
    reservePrice: 'ETB 280.00/kg',
    reserveMet: false,
    bidders: 8,
    timeRemaining: '4h 15m',
    status: 'Live',
    auctioneer: 'Spice Exporters Association',
  },
];

const scheduledAuctions = [
  {
    id: 'AUC-2026-003',
    title: 'Turmeric Grade A - 150 MT',
    type: 'Scheduled Call Auction',
    commodity: 'Turmeric',
    quantity: '150 MT',
    startingPrice: 'ETB 175.00/kg',
    reservePrice: 'ETB 178.00/kg',
    startTime: '2026-02-12 10:00',
    auctioneer: 'National Spice Board',
  },
  {
    id: 'AUC-2026-004',
    title: 'Coffee (Robusta) Grade 2 - Mixed Origins',
    type: 'English Auction',
    commodity: 'Coffee (Robusta)',
    quantity: '400 MT',
    startingPrice: 'ETB 95.00/kg',
    reservePrice: 'ETB 98.00/kg',
    startTime: '2026-02-13 14:00',
    auctioneer: 'Coffee Trading Alliance',
  },
];

const completedAuctions = [
  {
    id: 'AUC-2026-005',
    title: 'Cinnamon Premium - 60 MT',
    finalPrice: 'ETB 355.00/kg',
    winner: 'Global Spice Traders',
    totalBids: 18,
    completedDate: '2026-02-10',
  },
];

export default function AuctionsPage() {
  const [activeTab, setActiveTab] = useState('live');
  const [showBidHistory, setShowBidHistory] = useState<{[key: string]: boolean}>({});
  const [watchingAuctions, setWatchingAuctions] = useState<{[key: string]: boolean}>({});
  const [bidAmounts, setBidAmounts] = useState<{[key: string]: string}>({});
  const [bidPlaced, setBidPlaced] = useState<{[key: string]: boolean}>({});

  return (
    <div className="app-page">
      <div className="app-shell">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="app-page-title mb-2">Commodity Auctions</h1>
            <p className="app-page-subtitle">
              English, reverse, and scheduled call auctions with real-time bidding
            </p>
          </div>
          <Link to="/auctions/create">
            <button className="mt-4 md:mt-0 px-6 py-3 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100 flex items-center">
              <Gavel size={20} className="mr-2" />
              Create Auction
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="font-mono text-2xl text-gray-900 mb-1">2</div>
            <div className="font-mono text-xs text-gray-600">Live Auctions</div>
          </div>
          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="font-mono text-2xl text-gray-900 mb-1">2</div>
            <div className="font-mono text-xs text-gray-600">Scheduled</div>
          </div>
          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="font-mono text-2xl text-gray-900 mb-1">20</div>
            <div className="font-mono text-xs text-gray-600">Active Bidders</div>
          </div>
          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="font-mono text-2xl text-gray-900 mb-1">810 MT</div>
            <div className="font-mono text-xs text-gray-600">Total Volume</div>
          </div>
        </div>

        <div className="border-b-2 border-gray-300 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('live')}
              className={`pb-4 font-mono ${
                activeTab === 'live'
                  ? 'border-b-2 border-gray-800 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Live Auctions
            </button>
            <button
              onClick={() => setActiveTab('scheduled')}
              className={`pb-4 font-mono ${
                activeTab === 'scheduled'
                  ? 'border-b-2 border-gray-800 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Scheduled
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`pb-4 font-mono ${
                activeTab === 'completed'
                  ? 'border-b-2 border-gray-800 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {activeTab === 'live' && (
          <div className="space-y-6">
            {liveAuctions.map((auction) => (
              <div key={auction.id} className="bg-white border-2 border-gray-300 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-gray-500">{auction.id}</span>
                      <span className="font-mono text-xs px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300">
                        {auction.status}
                      </span>
                      <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1">
                        {auction.type}
                      </span>
                    </div>
                    <h3 className="font-mono text-xl text-gray-900 mb-2">{auction.title}</h3>
                    <p className="font-mono text-sm text-gray-600">Auctioneer: {auction.auctioneer}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end font-mono text-gray-700 mb-2">
                      <Clock size={16} className="mr-1" />
                      <span className="text-lg font-bold">{auction.timeRemaining}</span>
                    </div>
                    <div className="font-mono text-xs text-gray-600">Time Remaining</div>
                  </div>
                </div>

                <div className="bg-gray-100 border-2 border-gray-300 p-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="font-mono text-xs text-gray-600 mb-1">Starting Price</div>
                      <div className="font-mono text-lg text-gray-700">{auction.startingPrice}</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-600 mb-1">Current Bid</div>
                      <div className="font-mono text-2xl text-gray-700 flex items-center">
                        <TrendingUp size={20} className="mr-2" />
                        {auction.currentBid}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-600 mb-1">Reserve Price</div>
                      <div className="font-mono text-lg text-gray-900">
                        {auction.reservePrice}
                        {auction.reserveMet && (
                          <span className="ml-2 text-xs text-gray-700">(Met)</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Commodity</div>
                    <div className="font-mono text-sm text-gray-900">{auction.commodity}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Quantity</div>
                    <div className="font-mono text-sm text-gray-900">{auction.quantity}</div>
                  </div>
                  <div>
                    <div className="flex items-center font-mono text-sm text-gray-900">
                      <Users size={16} className="mr-2" />
                      {auction.bidders} Active Bidders
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 p-4 mb-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="font-mono text-xs text-gray-700 mb-2 block">Your Bid (ETB/kg)</label>
                      <input
                        type="text"
                        value={bidAmounts[auction.id] || ''}
                        onChange={(e) => setBidAmounts({...bidAmounts, [auction.id]: e.target.value})}
                        placeholder="Enter bid amount"
                        className="w-full border-2 border-gray-300 p-3 font-mono text-gray-900"
                        disabled={bidPlaced[auction.id]}
                      />
                    </div>
                    <div className="flex items-end">
                      <button 
                        onClick={() => setBidPlaced({...bidPlaced, [auction.id]: true})}
                        disabled={bidPlaced[auction.id]}
                        className={`px-6 py-3 border-2 font-mono whitespace-nowrap ${
                          bidPlaced[auction.id] 
                            ? 'border-green-700 bg-green-700 text-white cursor-not-allowed' 
                            : 'border-gray-800 text-gray-800 hover:bg-gray-100'
                        }`}
                      >
                        {bidPlaced[auction.id] ? 'Bid Placed' : 'Place Bid'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowBidHistory({...showBidHistory, [auction.id]: !showBidHistory[auction.id]})}
                    className={`flex-1 px-4 py-2 border-2 text-gray-800 font-mono hover:bg-gray-100 ${
                      showBidHistory[auction.id] ? 'border-gray-800 bg-gray-100' : 'border-gray-800'
                    }`}
                  >
                    {showBidHistory[auction.id] ? 'Hide' : 'View'} Bid History
                  </button>
                  <button 
                    onClick={() => setWatchingAuctions({...watchingAuctions, [auction.id]: !watchingAuctions[auction.id]})}
                    className={`flex-1 px-4 py-2 border-2 font-mono hover:bg-gray-100 ${
                      watchingAuctions[auction.id] ? 'border-gray-800 bg-gray-800 text-white' : 'border-gray-800 text-gray-800'
                    }`}
                  >
                    {watchingAuctions[auction.id] ? 'Watching' : 'Watch Auction'}
                  </button>
                </div>

                {showBidHistory[auction.id] && (
                  <div className="mt-4 border-t-2 border-gray-300 pt-4">
                    <h4 className="font-mono text-sm text-gray-900 mb-3">Bid History</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between font-mono text-xs text-gray-700 border-b border-gray-300 pb-2">
                        <span>Bidder</span>
                        <span>Amount</span>
                        <span>Time</span>
                      </div>
                      <div className="flex justify-between font-mono text-xs text-gray-900">
                        <span>Bidder #127</span>
                        <span>ETB 148.00/kg</span>
                        <span>2 min ago</span>
                      </div>
                      <div className="flex justify-between font-mono text-xs text-gray-900">
                        <span>Bidder #089</span>
                        <span>ETB 147.50/kg</span>
                        <span>5 min ago</span>
                      </div>
                      <div className="flex justify-between font-mono text-xs text-gray-900">
                        <span>Bidder #045</span>
                        <span>ETB 147.00/kg</span>
                        <span>8 min ago</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'scheduled' && (
          <div className="space-y-6">
            {scheduledAuctions.map((auction) => (
              <div key={auction.id} className="bg-white border-2 border-gray-300 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-gray-500">{auction.id}</span>
                      <span className="font-mono text-xs text-gray-500 bg-gray-200 px-2 py-1">
                        {auction.type}
                      </span>
                    </div>
                    <h3 className="font-mono text-xl text-gray-900 mb-2">{auction.title}</h3>
                    <p className="font-mono text-sm text-gray-600">Auctioneer: {auction.auctioneer}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end font-mono text-gray-700 mb-1">
                      <Clock size={16} className="mr-1" />
                      <span className="text-lg">{auction.startTime}</span>
                    </div>
                    <div className="font-mono text-xs text-gray-600">Start Time</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Commodity</div>
                    <div className="font-mono text-sm text-gray-900">{auction.commodity}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Quantity</div>
                    <div className="font-mono text-sm text-gray-900">{auction.quantity}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Starting Price</div>
                    <div className="font-mono text-sm text-gray-900">{auction.startingPrice}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Reserve Price</div>
                    <div className="font-mono text-sm text-gray-900">{auction.reservePrice}</div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="bg-white border-2 border-gray-300 p-6">
            <h3 className="font-mono text-lg text-gray-900 mb-4">Recent Completed Auctions</h3>
            <div className="space-y-4">
              {completedAuctions.map((auction) => (
                <div key={auction.id} className="border-2 border-gray-300 p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-mono text-xs text-gray-500 mb-1">{auction.id}</div>
                      <h4 className="font-mono text-gray-900 mb-2">{auction.title}</h4>
                      <div className="flex items-center gap-4 font-mono text-xs text-gray-600">
                        <span>Winner: {auction.winner}</span>
                        <span>Final Price: {auction.finalPrice}</span>
                        <span>Total Bids: {auction.totalBids}</span>
                        <span>Completed: {auction.completedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
