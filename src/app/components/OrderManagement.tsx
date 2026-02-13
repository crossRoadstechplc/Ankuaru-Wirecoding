import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Eye, Download, Filter, Search } from 'lucide-react';

const OrderManagement = () => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      commodity: 'Arabica Coffee - Grade 1',
      type: 'Buy',
      quantity: '500 kg',
      price: 'ETB 450/kg',
      totalAmount: 'ETB 225,000',
      seller: 'ABC Trading Corp',
      status: 'Completed',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-20',
    },
    {
      id: 'ORD-002',
      commodity: 'Black Pepper - Premium',
      type: 'Sell',
      quantity: '200 kg',
      price: 'ETB 800/kg',
      totalAmount: 'ETB 160,000',
      buyer: 'XYZ Exports Ltd',
      status: 'Pending',
      orderDate: '2024-01-22',
      deliveryDate: '2024-01-28',
    },
    {
      id: 'ORD-003',
      commodity: 'Robusta Coffee - Grade 2',
      type: 'Buy',
      quantity: '1000 kg',
      price: 'ETB 380/kg',
      totalAmount: 'ETB 380,000',
      seller: 'Global Spices Inc',
      status: 'In Progress',
      orderDate: '2024-01-20',
      deliveryDate: '2024-01-25',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.commodity.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    const matchesType = filterType === 'All' || order.type === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const stats = {
    total: orders.length,
    completed: orders.filter(o => o.status === 'Completed').length,
    pending: orders.filter(o => o.status === 'Pending').length,
    inProgress: orders.filter(o => o.status === 'In Progress').length,
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircle size={16} />;
      case 'Pending': return <Clock size={16} />;
      case 'In Progress': return <Package size={16} />;
      case 'Cancelled': return <XCircle size={16} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your commodity orders</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Total Orders</div>
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Completed</div>
            <div className="text-2xl font-bold text-gray-900">{stats.completed}</div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">In Progress</div>
            <div className="text-2xl font-bold text-gray-900">{stats.inProgress}</div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Pending</div>
            <div className="text-2xl font-bold text-gray-900">{stats.pending}</div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID or commodity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-600" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
              >
                <option value="All">All Types</option>
                <option value="Buy">Buy Orders</option>
                <option value="Sell">Sell Orders</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className={`${selectedOrder ? 'lg:col-span-3' : 'lg:col-span-5'} bg-white border-2 border-gray-300 rounded`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Commodity</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantity</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{order.id}</td>
                      <td className="py-3 px-4 text-gray-900">{order.commodity}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          order.type === 'Buy' ? 'bg-gray-200 text-gray-800' : 'bg-gray-300 text-gray-900'
                        }`}>
                          {order.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{order.quantity}</td>
                      <td className="py-3 px-4 font-medium text-gray-900">{order.totalAmount}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded ${
                          order.status === 'Completed' ? 'bg-gray-200 text-gray-800' :
                          order.status === 'Pending' ? 'bg-gray-100 text-gray-600 border border-gray-300' :
                          'bg-gray-300 text-gray-900'
                        }`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="p-2 border border-gray-400 hover:bg-gray-100 rounded"
                          >
                            <Eye size={16} className="text-gray-700" />
                          </button>
                          <button className="p-2 border border-gray-400 hover:bg-gray-100 rounded">
                            <Download size={16} className="text-gray-700" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {selectedOrder && (
            <div className="lg:col-span-2 bg-white border-2 border-gray-300 rounded">
              <div className="border-b-2 border-gray-300 bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Order Information</h3>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Order ID</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Order Date</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.orderDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Type</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.type}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Commodity Details</h3>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Commodity</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.commodity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Quantity</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Unit Price</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOrder.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="text-sm font-bold text-gray-900">{selectedOrder.totalAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-4">
                  <button className="w-full px-4 py-3 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
