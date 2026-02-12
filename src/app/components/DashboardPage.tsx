import { Wallet, TrendingUp, TrendingDown, Clock, CheckCircle, XCircle } from 'lucide-react';

const portfolioItems = [
  { commodity: 'Gold', amount: '150 oz', avgPrice: '$2,020.00', currentPrice: '$2,045.50', value: '$306,825', pnl: '+$3,825', pnlPercent: '+1.3%', trending: 'up' },
  { commodity: 'Crude Oil', amount: '500 bbl', avgPrice: '$85.00', currentPrice: '$82.35', value: '$41,175', pnl: '-$1,325', pnlPercent: '-3.1%', trending: 'down' },
  { commodity: 'Coffee', amount: '2500 lbs', avgPrice: '$1.75', currentPrice: '$1.89', value: '$4,725', pnl: '+$350', pnlPercent: '+8.0%', trending: 'up' },
  { commodity: 'Silver', amount: '1200 oz', avgPrice: '$25.50', currentPrice: '$24.10', value: '$28,920', pnl: '-$1,680', pnlPercent: '-5.5%', trending: 'down' },
];

const openOrders = [
  { id: 'ORD-1234', commodity: 'Wheat', type: 'Buy', orderType: 'Limit', quantity: '500 bu', price: '$6.20', status: 'Open', date: '2026-02-11 09:15' },
  { id: 'ORD-1235', commodity: 'Natural Gas', type: 'Sell', orderType: 'Limit', quantity: '300 MMBtu', price: '$2.70', status: 'Open', date: '2026-02-11 08:45' },
  { id: 'ORD-1236', commodity: 'Copper', type: 'Buy', orderType: 'Market', quantity: '200 lbs', price: 'Market', status: 'Pending', date: '2026-02-11 10:20' },
];

const transactionHistory = [
  { id: 'TXN-5678', commodity: 'Gold', type: 'Buy', quantity: '50 oz', price: '$2,045.50', total: '$102,275', status: 'Completed', date: '2026-02-10 14:30' },
  { id: 'TXN-5679', commodity: 'Coffee', type: 'Buy', quantity: '1000 lbs', price: '$1.89', total: '$1,890', status: 'Completed', date: '2026-02-10 11:15' },
  { id: 'TXN-5680', commodity: 'Crude Oil', type: 'Sell', quantity: '200 bbl', price: '$82.35', total: '$16,470', status: 'Completed', date: '2026-02-09 16:45' },
  { id: 'TXN-5681', commodity: 'Silver', type: 'Buy', quantity: '400 oz', price: '$24.10', total: '$9,640', status: 'Completed', date: '2026-02-09 13:20' },
  { id: 'TXN-5682', commodity: 'Wheat', type: 'Sell', quantity: '800 bu', price: '$6.25', total: '$5,000', status: 'Failed', date: '2026-02-08 10:00' },
];

export default function DashboardPage() {
  return (
    <div className="app-page">
      <div className="app-shell">
        <h1 className="app-page-title mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-600">Portfolio Value</span>
              <Wallet size={20} className="text-gray-400" />
            </div>
            <div className="font-mono text-2xl text-gray-900 mb-1">$381,645</div>
            <div className="flex items-center text-gray-700 font-mono text-sm">
              <TrendingUp size={14} />
              <span className="ml-1">+$1,170 (+0.3%)</span>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-600">Available Balance</span>
              <Wallet size={20} className="text-gray-400" />
            </div>
            <div className="font-mono text-2xl text-gray-900 mb-1">$50,000</div>
            <div className="font-mono text-sm text-gray-600">Ready to trade</div>
          </div>

          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-600">Today's P&L</span>
              <TrendingUp size={20} className="text-gray-400" />
            </div>
            <div className="font-mono text-2xl text-gray-900 mb-1">+$1,245</div>
            <div className="flex items-center text-gray-700 font-mono text-sm">
              <span>+0.33%</span>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-gray-600">Open Orders</span>
              <Clock size={20} className="text-gray-400" />
            </div>
            <div className="font-mono text-2xl text-gray-900 mb-1">{openOrders.length}</div>
            <div className="font-mono text-sm text-gray-600">Active positions</div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 p-6 mb-8">
          <h2 className="font-mono text-xl text-gray-900 mb-6">Portfolio Holdings</h2>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 text-gray-700">Commodity</th>
                  <th className="text-right py-3 text-gray-700">Amount</th>
                  <th className="text-right py-3 text-gray-700">Avg Price</th>
                  <th className="text-right py-3 text-gray-700">Current Price</th>
                  <th className="text-right py-3 text-gray-700">Value</th>
                  <th className="text-right py-3 text-gray-700">P&L</th>
                  <th className="text-right py-3 text-gray-700">P&L %</th>
                </tr>
              </thead>
              <tbody>
                {portfolioItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 text-gray-900">{item.commodity}</td>
                    <td className="text-right text-gray-900">{item.amount}</td>
                    <td className="text-right text-gray-600">{item.avgPrice}</td>
                    <td className="text-right text-gray-900">{item.currentPrice}</td>
                    <td className="text-right text-gray-900">{item.value}</td>
                    <td className="text-right text-gray-700">{item.pnl}</td>
                    <td className="text-right flex items-center justify-end py-3 text-gray-700">
                      {item.trending === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      <span className="ml-1">{item.pnlPercent}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 p-6 mb-8">
          <h2 className="font-mono text-xl text-gray-900 mb-6">Open Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 text-gray-700">Order ID</th>
                  <th className="text-left py-3 text-gray-700">Commodity</th>
                  <th className="text-left py-3 text-gray-700">Type</th>
                  <th className="text-left py-3 text-gray-700">Order Type</th>
                  <th className="text-right py-3 text-gray-700">Quantity</th>
                  <th className="text-right py-3 text-gray-700">Price</th>
                  <th className="text-left py-3 text-gray-700">Status</th>
                  <th className="text-left py-3 text-gray-700">Date</th>
                  <th className="text-center py-3 text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {openOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200">
                    <td className="py-3 text-gray-600">{order.id}</td>
                    <td className="text-gray-900">{order.commodity}</td>
                    <td>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300">{order.type}</span>
                    </td>
                    <td className="text-gray-900">{order.orderType}</td>
                    <td className="text-right text-gray-900">{order.quantity}</td>
                    <td className="text-right text-gray-900">{order.price}</td>
                    <td>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300">{order.status}</span>
                    </td>
                    <td className="text-gray-600">{order.date}</td>
                    <td className="text-center">
                      <button className="px-3 py-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 p-6 mb-8">
          <h2 className="font-mono text-xl text-gray-900 mb-6">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 text-gray-700">Transaction ID</th>
                  <th className="text-left py-3 text-gray-700">Commodity</th>
                  <th className="text-left py-3 text-gray-700">Type</th>
                  <th className="text-right py-3 text-gray-700">Quantity</th>
                  <th className="text-right py-3 text-gray-700">Price</th>
                  <th className="text-right py-3 text-gray-700">Total</th>
                  <th className="text-left py-3 text-gray-700">Status</th>
                  <th className="text-left py-3 text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((txn) => (
                  <tr key={txn.id} className="border-b border-gray-200">
                    <td className="py-3 text-gray-600">{txn.id}</td>
                    <td className="text-gray-900">{txn.commodity}</td>
                    <td>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300">{txn.type}</span>
                    </td>
                    <td className="text-right text-gray-900">{txn.quantity}</td>
                    <td className="text-right text-gray-900">{txn.price}</td>
                    <td className="text-right text-gray-900">{txn.total}</td>
                    <td>
                      <span className="flex items-center text-gray-700">
                        {txn.status === 'Completed' ? <CheckCircle size={14} className="mr-1" /> : <XCircle size={14} className="mr-1" />}
                        {txn.status}
                      </span>
                    </td>
                    <td className="text-gray-600">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 p-6">
          <h2 className="font-mono text-xl text-gray-900 mb-6">Wallet Balance</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-gray-300 p-4">
              <div className="font-mono text-sm text-gray-600 mb-2">Total Balance</div>
              <div className="font-mono text-2xl text-gray-900 mb-4">$431,645.00</div>
              <div className="font-mono text-xs text-gray-600">Portfolio + Available</div>
            </div>

            <div className="border-2 border-gray-300 p-4">
              <div className="font-mono text-sm text-gray-600 mb-2">In Trading</div>
              <div className="font-mono text-2xl text-gray-900 mb-4">$381,645.00</div>
              <div className="font-mono text-xs text-gray-600">Active positions</div>
            </div>

            <div className="border-2 border-gray-300 p-4">
              <div className="font-mono text-sm text-gray-600 mb-2">Available</div>
              <div className="font-mono text-2xl text-gray-900 mb-4">$50,000.00</div>
              <div className="font-mono text-xs text-gray-600">Ready to trade</div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100">Deposit Funds</button>
            <button className="px-6 py-3 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100">Withdraw Funds</button>
          </div>
        </div>
      </div>
    </div>
  );
}
