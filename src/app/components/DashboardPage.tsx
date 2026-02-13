import { Wallet, TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, Activity, Bell, FileText, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const portfolioItems = [
  { commodity: 'Arabica Coffee', amount: '500 kg', avgPrice: 'ETB 420.00', currentPrice: 'ETB 450.00', value: 'ETB 225,000', pnl: '+ETB 15,000', pnlPercent: '+7.1%', trending: 'up' },
  { commodity: 'Black Pepper', amount: '200 kg', avgPrice: 'ETB 750.00', currentPrice: 'ETB 800.00', value: 'ETB 160,000', pnl: '+ETB 10,000', pnlPercent: '+6.7%', trending: 'up' },
  { commodity: 'Robusta Coffee', amount: '1000 kg', avgPrice: 'ETB 400.00', currentPrice: 'ETB 380.00', value: 'ETB 380,000', pnl: '-ETB 20,000', pnlPercent: '-5.0%', trending: 'down' },
  { commodity: 'Cardamom', amount: '150 kg', avgPrice: 'ETB 1150.00', currentPrice: 'ETB 1200.00', value: 'ETB 180,000', pnl: '+ETB 7,500', pnlPercent: '+4.3%', trending: 'up' },
];

const openOrders = [
  { id: 'ORD-001', commodity: 'Arabica Coffee', type: 'Buy', orderType: 'Limit', quantity: '500 kg', price: 'ETB 450', status: 'Open', date: '2024-01-22' },
  { id: 'ORD-002', commodity: 'Black Pepper', type: 'Sell', orderType: 'Limit', quantity: '200 kg', price: 'ETB 800', status: 'Open', date: '2024-01-22' },
  { id: 'ORD-003', commodity: 'Cardamom', type: 'Buy', orderType: 'Market', quantity: '100 kg', price: 'Market', status: 'Pending', date: '2024-01-23' },
];

const transactionHistory = [
  { id: 'TXN-001', commodity: 'Arabica Coffee', type: 'Buy', quantity: '500 kg', price: 'ETB 450', total: 'ETB 225,000', status: 'Completed', date: '2024-01-20' },
  { id: 'TXN-002', commodity: 'Black Pepper', type: 'Sell', quantity: '200 kg', price: 'ETB 800', total: 'ETB 160,000', status: 'Completed', date: '2024-01-19' },
  { id: 'TXN-003', commodity: 'Robusta Coffee', type: 'Buy', quantity: '1000 kg', price: 'ETB 380', total: 'ETB 380,000', status: 'Completed', date: '2024-01-18' },
  { id: 'TXN-004', commodity: 'Cardamom', type: 'Buy', quantity: '150 kg', price: 'ETB 1200', total: 'ETB 180,000', status: 'Completed', date: '2024-01-17' },
  { id: 'TXN-005', commodity: 'White Pepper', type: 'Sell', quantity: '100 kg', price: 'ETB 900', total: 'ETB 90,000', status: 'Failed', date: '2024-01-16' },
];

const recentActivity = [
  { action: 'Order Placed', description: 'Buy order for Arabica Coffee - 500 kg', time: '2 hours ago' },
  { action: 'Payment Received', description: 'ETB 160,000 from Black Pepper sale', time: '5 hours ago' },
  { action: 'Order Completed', description: 'Robusta Coffee purchase completed', time: '1 day ago' },
  { action: 'Bank Verified', description: 'Your bank account has been verified', time: '2 days ago' },
];

export default function DashboardPage() {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    alert(`Deposit request for ETB ${amount} submitted successfully!`);
    setShowDepositModal(false);
    setAmount('');
  };

  const handleWithdraw = () => {
    alert(`Withdrawal request for ETB ${amount} submitted successfully!`);
    setShowWithdrawModal(false);
    setAmount('');
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your trading overview</p>
          </div>
          <div className="flex gap-3">
            <Link to="/notifications">
              <button className="p-3 border-2 border-gray-400 hover:bg-gray-100 rounded relative">
                <Bell size={20} className="text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full"></span>
              </button>
            </Link>
            <Link to="/profile">
              <button className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold">
                Profile
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Portfolio Value</span>
              <Wallet size={20} className="text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">ETB 945,000</div>
            <div className="flex items-center text-gray-700 text-sm">
              <TrendingUp size={14} />
              <span className="ml-1">+ETB 12,500 (+1.3%)</span>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Available Balance</span>
              <Wallet size={20} className="text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">ETB 150,000</div>
            <div className="text-sm text-gray-600">Ready to trade</div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Today's P&L</span>
              <TrendingUp size={20} className="text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">+ETB 3,200</div>
            <div className="flex items-center text-gray-700 text-sm">
              <span>+0.34%</span>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Open Orders</span>
              <Clock size={20} className="text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{openOrders.length}</div>
            <div className="text-sm text-gray-600">Active positions</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white border-2 border-gray-300 rounded p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Portfolio Holdings</h2>
              <Link to="/orders">
                <button className="text-sm text-gray-700 hover:underline font-medium">View All</button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
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

          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity size={20} className="text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{activity.action}</div>
                  <div className="text-sm text-gray-600 mb-1">{activity.description}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
            <Link to="/notifications">
              <button className="w-full mt-4 px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold">
                View All Activity
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Open Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
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

        <div className="bg-white border-2 border-gray-300 rounded p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
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

        <div className="bg-white border-2 border-gray-300 rounded p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Wallet Balance</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-gray-300 rounded p-4">
              <div className="text-sm text-gray-600 mb-2">Total Balance</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">ETB 1,095,000</div>
              <div className="text-xs text-gray-600">Portfolio + Available</div>
            </div>

            <div className="border-2 border-gray-300 rounded p-4">
              <div className="text-sm text-gray-600 mb-2">In Trading</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">ETB 945,000</div>
              <div className="text-xs text-gray-600">Active positions</div>
            </div>

            <div className="border-2 border-gray-300 rounded p-4">
              <div className="text-sm text-gray-600 mb-2">Available</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">ETB 150,000</div>
              <div className="text-xs text-gray-600">Ready to trade</div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => setShowDepositModal(true)}
              className="px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-100 rounded font-semibold"
            >
              Deposit Funds
            </button>
            <button 
              onClick={() => setShowWithdrawModal(true)}
              className="px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-100 rounded font-semibold"
            >
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>

      {showDepositModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-gray-300 rounded p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <ArrowUpCircle size={24} className="text-gray-700" />
              <h3 className="text-xl font-bold text-gray-900">Deposit Funds</h3>
            </div>
            <p className="text-gray-600 mb-4">Enter the amount you want to deposit to your trading account.</p>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (ETB)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="bg-gray-100 border-2 border-gray-300 rounded p-3 mb-4">
              <p className="text-xs text-gray-600">Funds will be transferred via bank transfer. Processing time: 1-2 business days.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDeposit}
                className="flex-1 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-semibold"
                disabled={!amount || parseFloat(amount) <= 0}
              >
                Confirm Deposit
              </button>
              <button
                onClick={() => {
                  setShowDepositModal(false);
                  setAmount('');
                }}
                className="flex-1 px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-gray-300 rounded p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <ArrowDownCircle size={24} className="text-gray-700" />
              <h3 className="text-xl font-bold text-gray-900">Withdraw Funds</h3>
            </div>
            <p className="text-gray-600 mb-4">Enter the amount you want to withdraw from your trading account.</p>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (ETB)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />
              <p className="text-xs text-gray-500 mt-1">Available balance: ETB 150,000</p>
            </div>
            <div className="bg-gray-100 border-2 border-gray-300 rounded p-3 mb-4">
              <p className="text-xs text-gray-600">Funds will be transferred to your verified bank account. Processing time: 2-3 business days.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleWithdraw}
                className="flex-1 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-semibold"
                disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > 150000}
              >
                Confirm Withdrawal
              </button>
              <button
                onClick={() => {
                  setShowWithdrawModal(false);
                  setAmount('');
                }}
                className="flex-1 px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
