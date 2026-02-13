import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Order Completed',
      message: 'Your order ORD-001 for Arabica Coffee has been completed successfully.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'info',
      title: 'Price Alert',
      message: 'Black Pepper price has increased by 5% in the last 24 hours.',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Payment Pending',
      message: 'Payment for order ORD-002 is pending. Please complete the payment.',
      time: '1 day ago',
      read: true,
    },
    {
      id: 4,
      type: 'success',
      title: 'Bank Account Verified',
      message: 'Your bank account has been successfully verified.',
      time: '2 days ago',
      read: true,
    },
  ]);

  const [filter, setFilter] = useState('All');

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'Unread') return !n.read;
    if (filter === 'Read') return n.read;
    return true;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} className="text-gray-700" />;
      case 'warning': return <AlertCircle size={20} className="text-gray-700" />;
      case 'info': return <Info size={20} className="text-gray-700" />;
      default: return <Bell size={20} className="text-gray-700" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">
              {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold"
            >
              Mark All as Read
            </button>
          )}
        </div>

        <div className="bg-white border-2 border-gray-300 rounded p-4 mb-6">
          <div className="flex gap-2">
            {['All', 'Unread', 'Read'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded font-medium ${
                  filter === f
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white border-2 border-gray-300 rounded p-8 text-center">
              <Bell size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No notifications to display</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white border-2 rounded p-4 flex items-start gap-4 ${
                  notification.read ? 'border-gray-300' : 'border-gray-400 bg-gray-50'
                }`}
              >
                <div className={`p-2 rounded ${
                  notification.type === 'success' ? 'bg-gray-200' :
                  notification.type === 'warning' ? 'bg-gray-300' :
                  'bg-gray-100'
                }`}>
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-900">{notification.title}</h3>
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-1 hover:bg-gray-200 rounded"
                      title="Delete"
                    >
                      <X size={16} className="text-gray-600" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{notification.time}</span>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-gray-700 hover:underline font-medium"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
