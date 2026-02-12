import { useState } from 'react';
import { TrendingUp, Activity } from 'lucide-react';

const orderBookBids = [
  { price: 'ETB 145.20', amount: '125 kg', total: 'ETB 18,150', orders: 3 },
  { price: 'ETB 145.10', amount: '89 kg', total: 'ETB 12,913', orders: 2 },
  { price: 'ETB 145.00', amount: '203 kg', total: 'ETB 29,435', orders: 5 },
  { price: 'ETB 144.90', amount: '156 kg', total: 'ETB 22,604', orders: 4 },
  { price: 'ETB 144.80', amount: '92 kg', total: 'ETB 13,322', orders: 2 },
  { price: 'ETB 144.70', amount: '178 kg', total: 'ETB 25,757', orders: 3 },
];

const orderBookAsks = [
  { price: 'ETB 145.60', amount: '98 kg', total: 'ETB 14,269', orders: 2 },
  { price: 'ETB 145.70', amount: '145 kg', total: 'ETB 21,127', orders: 3 },
  { price: 'ETB 145.80', amount: '67 kg', total: 'ETB 9,769', orders: 1 },
  { price: 'ETB 145.90', amount: '188 kg', total: 'ETB 27,429', orders: 4 },
  { price: 'ETB 146.00', amount: '234 kg', total: 'ETB 34,164', orders: 5 },
  { price: 'ETB 146.10', amount: '121 kg', total: 'ETB 17,678', orders: 2 },
];

const recentTrades = [
  { time: '14:35:22', price: 'ETB 145.50', amount: '50 kg', type: 'buy' },
  { time: '14:35:18', price: 'ETB 145.45', amount: '75 kg', type: 'sell' },
  { time: '14:35:12', price: 'ETB 145.50', amount: '120 kg', type: 'buy' },
  { time: '14:35:08', price: 'ETB 145.40', amount: '65 kg', type: 'sell' },
  { time: '14:35:02', price: 'ETB 145.50', amount: '90 kg', type: 'buy' },
];

const openOrders = [
  { id: 'ORD-2026-0101', type: 'Limit Buy', commodity: 'Coffee (Arabica)', price: 'ETB 144.50', amount: '200 kg', status: 'Open', time: '14:20:15' },
  { id: 'ORD-2026-0102', type: 'Limit Sell', commodity: 'Coffee (Arabica)', price: 'ETB 146.00', amount: '150 kg', status: 'Open', time: '14:18:42' },
];

export default function TendersPage() {
  const [orderType, setOrderType] = useState('limit');
  const [buySell, setBuySell] = useState('buy');

  return (
    <div className="app-page">
      <div className="app-shell">
        <div className="mb-8">
          <h1 className="app-page-title mb-2">Order Book Trading</h1>
          <p className="app-page-subtitle">Continuous real-time trading with FIFO/pro-rata price-time matching</p>
        </div>

        <div className="bg-white border-2 border-gray-300 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-mono text-2xl text-gray-900 mb-1">Coffee (Arabica) - Grade 1</h2>
              <p className="font-mono text-xs text-gray-600">Sidamo Origin - Spot Market</p>
            </div>
            <div className="text-right">
              <div className="font-mono text-3xl text-gray-900 mb-1">ETB 145.50</div>
              <div className="flex items-center justify-end text-gray-700 font-mono text-sm">
                <TrendingUp size={16} className="mr-1" />
                <span>+ETB 3.50 (+2.47%)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
            <div>
              <div className="text-gray-600 mb-1">24h High</div>
              <div className="text-gray-900">ETB 146.20</div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">24h Low</div>
              <div className="text-gray-900">ETB 142.80</div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">24h Volume</div>
              <div className="text-gray-900">2,845 kg</div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">Last Update</div>
              <div className="text-gray-900 flex items-center">
                <Activity size={14} className="mr-1 text-gray-500" />
                Live
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-mono text-lg text-gray-900 mb-4">Order Book</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-sm text-gray-700 mb-3">BIDS (Buy Orders)</h4>
                  <div className="space-y-1">
                    <div className="grid grid-cols-4 gap-2 font-mono text-xs text-gray-600 mb-2 pb-2 border-b border-gray-200">
                      <div>Price</div>
                      <div className="text-right">Amount</div>
                      <div className="text-right">Total</div>
                      <div className="text-right">Orders</div>
                    </div>
                    {orderBookBids.map((bid, index) => (
                      <div key={index} className="grid grid-cols-4 gap-2 font-mono text-sm hover:bg-gray-100">
                        <div className="text-gray-700">{bid.price}</div>
                        <div className="text-right text-gray-900">{bid.amount}</div>
                        <div className="text-right text-gray-600 text-xs">{bid.total}</div>
                        <div className="text-right text-gray-600 text-xs">{bid.orders}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-sm text-gray-700 mb-3">ASKS (Sell Orders)</h4>
                  <div className="space-y-1">
                    <div className="grid grid-cols-4 gap-2 font-mono text-xs text-gray-600 mb-2 pb-2 border-b border-gray-200">
                      <div>Price</div>
                      <div className="text-right">Amount</div>
                      <div className="text-right">Total</div>
                      <div className="text-right">Orders</div>
                    </div>
                    {orderBookAsks.map((ask, index) => (
                      <div key={index} className="grid grid-cols-4 gap-2 font-mono text-sm hover:bg-gray-100">
                        <div className="text-gray-700">{ask.price}</div>
                        <div className="text-right text-gray-900">{ask.amount}</div>
                        <div className="text-right text-gray-600 text-xs">{ask.total}</div>
                        <div className="text-right text-gray-600 text-xs">{ask.orders}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-mono text-lg text-gray-900 mb-4">Recent Trades</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-4 gap-2 font-mono text-xs text-gray-600 mb-2 pb-2 border-b border-gray-200">
                  <div>Time</div>
                  <div className="text-right">Price</div>
                  <div className="text-right">Amount</div>
                  <div className="text-right">Type</div>
                </div>
                {recentTrades.map((trade, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 font-mono text-sm">
                    <div className="text-gray-600">{trade.time}</div>
                    <div className="text-right text-gray-700">{trade.price}</div>
                    <div className="text-right text-gray-900">{trade.amount}</div>
                    <div className="text-right">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300">{trade.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-mono text-lg text-gray-900 mb-4">My Open Orders</h3>
              <div className="space-y-3">
                {openOrders.map((order) => (
                  <div key={order.id} className="border-2 border-gray-300 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-1">{order.id}</div>
                        <div className="font-mono text-sm text-gray-900">{order.commodity}</div>
                      </div>
                      <span className="font-mono text-xs px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300">{order.type}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 font-mono text-xs mb-2">
                      <div>
                        <span className="text-gray-600">Price: </span>
                        <span className="text-gray-900">{order.price}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Amount: </span>
                        <span className="text-gray-900">{order.amount}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Time: </span>
                        <span className="text-gray-900">{order.time}</span>
                      </div>
                    </div>
                    <button className="px-4 py-1 border-2 border-gray-800 text-gray-800 font-mono text-xs hover:bg-gray-100">Cancel Order</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-300 p-6 sticky top-8">
              <h3 className="font-mono text-lg text-gray-900 mb-6">Place Order</h3>

              <div className="grid grid-cols-2 gap-2 mb-6">

                                {/* <button className="px-4 py-2 border border-gray-700 text-gray-800 font-mono bg-white"> */}

                <button
                  onClick={() => setBuySell('buy')}
                  className={`px-4 py-3 font-mono ${
                    buySell === 'buy'
                      ? 'border-2 border-gray-800 text-gray-800 '
                      : 'border-2 border-gray-300 text-gray-700 '
                  }`}
                >
                  BUY
                </button>


                
                <button
                  onClick={() => setBuySell('sell')}
                  className={`px-4 py-3 font-mono ${
                    buySell === 'sell'
                      ? 'border-2 border-gray-800 text-gray-800 '
                      : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  SELL
                </button>
              </div>

              <div className="mb-6">
                <label className="font-mono text-sm text-gray-700 mb-2 block">Order Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setOrderType('limit')}
                    className={`px-4 py-2 font-mono text-sm ${
                      orderType === 'limit'
                        ? 'border-2 border-gray-800 text-gray-800 bg-white'
                        : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Limit
                  </button>
                  <button
                    onClick={() => setOrderType('market')}
                    className={`px-4 py-2 font-mono text-sm ${
                      orderType === 'market'
                        ? 'border-2 border-gray-800 text-gray-800 bg-white'
                        : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Market
                  </button>
                </div>
              </div>

              {orderType === 'limit' && (
                <div className="mb-4">
                  <label className="font-mono text-sm text-gray-700 mb-2 block">Price (ETB/kg)</label>
                  <input type="text" placeholder="145.50" className="w-full border-2 border-gray-300 p-3 font-mono text-gray-900" />
                </div>
              )}

              <div className="mb-4">
                <label className="font-mono text-sm text-gray-700 mb-2 block">Amount (kg)</label>
                <input type="text" placeholder="0" className="w-full border-2 border-gray-300 p-3 font-mono text-gray-900" />
              </div>

              <div className="mb-6 p-4 bg-gray-100 border-2 border-gray-300">
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-gray-900">ETB 0.00</span>
                </div>
              </div>

              <button className="w-full px-4 py-3 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100">
                {buySell === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
              </button>

              <div className="pt-4 mt-4 border-t-2 border-gray-300">
                <div className="font-mono text-xs text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Available Balance:</span>
                    <span className="text-gray-900">ETB 500,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bank Guarantee:</span>
                    <span className="text-gray-700">Active (LC-2026-001)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
