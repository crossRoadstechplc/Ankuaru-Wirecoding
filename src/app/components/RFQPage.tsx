import { useState } from 'react';
import { FileText, Plus, Clock, CheckCircle, XCircle, Send } from 'lucide-react';
import { Link } from 'react-router';

const activeRFQs = [
  {
    id: 'RFQ-2026-001',
    title: 'Arabica Coffee Grade 1 - 500 MT',
    buyer: 'Ethiopian Coffee Exporters PLC',
    commodity: 'Coffee (Arabica)',
    grade: 'Grade 1',
    quantity: '500 MT',
    deliveryLocation: 'Addis Ababa Warehouse',
    deadline: '2026-02-25 17:00',
    status: 'Open',
    quotesReceived: 8,
    publishedDate: '2026-02-11',
  },
  {
    id: 'RFQ-2026-002',
    title: 'Premium Black Pepper - 50 MT',
    buyer: 'Spice Trading Corporation',
    commodity: 'Black Pepper',
    grade: 'Premium',
    quantity: '50 MT',
    deliveryLocation: 'Dire Dawa Warehouse',
    deadline: '2026-02-20 15:00',
    status: 'Open',
    quotesReceived: 5,
    publishedDate: '2026-02-10',
  },
  {
    id: 'RFQ-2026-003',
    title: 'Robusta Coffee Grade 2 - 300 MT',
    buyer: 'Global Coffee Traders',
    commodity: 'Coffee (Robusta)',
    grade: 'Grade 2',
    quantity: '300 MT',
    deliveryLocation: 'Jimma Processing Center',
    deadline: '2026-02-18 16:00',
    status: 'Closing Soon',
    quotesReceived: 12,
    publishedDate: '2026-02-08',
  },
];

const myRFQs = [
  {
    id: 'RFQ-2026-004',
    title: 'Turmeric Grade A - 75 MT',
    status: 'Awaiting Quotes',
    quotesReceived: 3,
    deadline: '2026-02-28',
  },
  {
    id: 'RFQ-2026-005',
    title: 'Cinnamon Premium - 40 MT',
    status: 'Under Evaluation',
    quotesReceived: 6,
    deadline: '2026-02-22',
  },
];

export default function RFQPage() {
  const [activeTab, setActiveTab] = useState('browse');
  const [showDetails, setShowDetails] = useState<{[key: string]: boolean}>({});
  const [submittedQuotes, setSubmittedQuotes] = useState<{[key: string]: boolean}>({});
  const [showQuotes, setShowQuotes] = useState<{[key: string]: boolean}>({});
  const [awarded, setAwarded] = useState<{[key: string]: boolean}>({});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-mono text-gray-900 mb-2">Request for Quotation (RFQ)</h1>
            <p className="font-mono text-sm text-gray-600">
              Create RFQs, receive quotes from sellers, and award trades
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-gray-800 text-white font-mono hover:bg-gray-700 flex items-center">
            <Link to="/rfq/create" className="flex items-center">
              <Plus size={20} className="mr-2" />
              Create New RFQ
            </Link>
            
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b-2 border-gray-300 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('browse')}
              className={`pb-4 font-mono ${
                activeTab === 'browse'
                  ? 'border-b-2 border-gray-800 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Browse RFQs
            </button>
            <button
              onClick={() => setActiveTab('my-rfqs')}
              className={`pb-4 font-mono ${
                activeTab === 'my-rfqs'
                  ? 'border-b-2 border-gray-800 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My RFQs
            </button>
            <button
              onClick={() => setActiveTab('quotes')}
              className={`pb-4 font-mono ${
                activeTab === 'quotes'
                  ? 'border-b-2 border-gray-800 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My Quotes
            </button>
          </div>
        </div>

        {/* Browse RFQs Tab */}
        {activeTab === 'browse' && (
          <div className="space-y-6">
            {activeRFQs.map((rfq) => (
              <div key={rfq.id} className="bg-white border-2 border-gray-300 p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-gray-500">{rfq.id}</span>
                      <span className={`font-mono text-xs px-2 py-1 ${
                        rfq.status === 'Open' 
                          ? 'bg-green-100 text-green-700' 
                          : rfq.status === 'Closing Soon'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {rfq.status}
                      </span>
                    </div>
                    <h3 className="font-mono text-xl text-gray-900 mb-2">{rfq.title}</h3>
                    <p className="font-mono text-sm text-gray-600">Buyer: {rfq.buyer}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <div className="font-mono text-2xl text-gray-900">{rfq.quotesReceived}</div>
                    <div className="font-mono text-xs text-gray-600">Quotes Received</div>
                  </div>
                </div>

                {/* Commodity Details */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 pb-4 border-b-2 border-gray-200">
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Commodity</div>
                    <div className="font-mono text-sm text-gray-900">{rfq.commodity}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Grade</div>
                    <div className="font-mono text-sm text-gray-900">{rfq.grade}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Quantity</div>
                    <div className="font-mono text-sm text-gray-900">{rfq.quantity}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-600 mb-1">Delivery Location</div>
                    <div className="font-mono text-sm text-gray-900">{rfq.deliveryLocation}</div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div className="flex items-center font-mono text-xs text-gray-600 mb-2 sm:mb-0">
                    <Clock size={14} className="mr-1" />
                    Published: {rfq.publishedDate}
                  </div>
                  <div className="flex items-center font-mono text-xs text-red-700">
                    <Clock size={14} className="mr-1" />
                    Deadline: {rfq.deadline}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => setShowDetails({...showDetails, [rfq.id]: !showDetails[rfq.id]})}
                    className={`flex-1 px-4 py-2 border text-gray-800 font-mono hover:bg-gray-100 flex items-center justify-center ${
                      showDetails[rfq.id] ? 'border-gray-700 bg-gray-100' : 'border-gray-700'
                    }`}
                  >
                    <FileText size={16} className="mr-2" />
                    {showDetails[rfq.id] ? 'Hide' : 'View'} Details
                  </button>
                  <button 
                    onClick={() => setSubmittedQuotes({...submittedQuotes, [rfq.id]: !submittedQuotes[rfq.id]})}
                    className={`flex-1 px-4 py-2 border font-mono flex items-center justify-center ${
                      submittedQuotes[rfq.id] ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-700 text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <Send size={16} className="mr-2" />
                    {submittedQuotes[rfq.id] ? 'Quote Submitted' : 'Submit Quote'}
                  </button>
                </div>

                {showDetails[rfq.id] && (
                  <div className="mt-4 border-t-2 border-gray-300 pt-4">
                    <h4 className="font-mono text-sm text-gray-900 mb-3">RFQ Details</h4>
                    <div className="space-y-2 font-mono text-sm text-gray-700">
                      <div><span className="text-gray-600">Payment Terms:</span> Letter of Credit (LC)</div>
                      <div><span className="text-gray-600">Delivery Date:</span> Within 30 days of award</div>
                      <div><span className="text-gray-600">Quality Standards:</span> International standards, inspection required</div>
                      <div><span className="text-gray-600">Additional Notes:</span> Samples may be requested before final award</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* My RFQs Tab */}
        {activeTab === 'my-rfqs' && (
          <div>
            <div className="bg-white border-2 border-gray-300 p-6 mb-6">
              <h3 className="font-mono text-lg text-gray-900 mb-4">Active RFQs</h3>
              <div className="space-y-4">
                {myRFQs.map((rfq) => (
                  <div key={rfq.id} className="border-2 border-gray-300 p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-mono text-xs text-gray-500 mb-1">{rfq.id}</div>
                        <h4 className="font-mono text-gray-900 mb-2">{rfq.title}</h4>
                        <div className="flex items-center gap-4 font-mono text-xs text-gray-600">
                          <span>Status: {rfq.status}</span>
                          <span>Quotes: {rfq.quotesReceived}</span>
                          <span>Deadline: {rfq.deadline}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setShowQuotes({...showQuotes, [rfq.id]: !showQuotes[rfq.id]})}
                          className={`px-4 py-2 border-2 text-gray-800 font-mono hover:bg-gray-100 ${
                            showQuotes[rfq.id] ? 'border-gray-800 bg-gray-100' : 'border-gray-800'
                          }`}
                        >
                          {showQuotes[rfq.id] ? 'Hide' : 'View'} Quotes
                        </button>
                        <button 
                          onClick={() => setAwarded({...awarded, [rfq.id]: !awarded[rfq.id]})}
                          className={`px-4 py-2 font-mono ${
                            awarded[rfq.id] ? 'bg-green-700 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'
                          }`}
                        >
                          {awarded[rfq.id] ? 'Awarded' : 'Award'}
                        </button>
                      </div>
                    </div>
                    {showQuotes[rfq.id] && (
                      <div className="mt-4 border-t-2 border-gray-300 pt-4">
                        <h4 className="font-mono text-sm text-gray-900 mb-3">Received Quotes</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between font-mono text-xs text-gray-700 border-b border-gray-300 pb-2">
                            <span>Seller</span>
                            <span>Price</span>
                            <span>Delivery</span>
                          </div>
                          <div className="flex justify-between font-mono text-xs text-gray-900">
                            <span>Seller #045</span>
                            <span>ETB 143.00/kg</span>
                            <span>15 days</span>
                          </div>
                          <div className="flex justify-between font-mono text-xs text-gray-900">
                            <span>Seller #089</span>
                            <span>ETB 145.50/kg</span>
                            <span>10 days</span>
                          </div>
                          <div className="flex justify-between font-mono text-xs text-gray-900">
                            <span>Seller #127</span>
                            <span>ETB 146.00/kg</span>
                            <span>12 days</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Create RFQ Form Placeholder */}
            <div className="bg-white border-2 border-gray-300 p-6">
              <h3 className="font-mono text-lg text-gray-900 mb-4">Create New RFQ</h3>
              <div className="bg-gray-100 border-2 border-gray-300 h-64 flex items-center justify-center">
                <span className="font-mono text-gray-500">[RFQ CREATION FORM]</span>
              </div>
            </div>
          </div>
        )}

        {/* My Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="bg-white border-2 border-gray-300 p-6">
            <h3 className="font-mono text-lg text-gray-900 mb-4">My Submitted Quotes</h3>
            <div className="bg-gray-100 border-2 border-gray-300 h-96 flex items-center justify-center">
              <span className="font-mono text-gray-500">[QUOTES LIST]</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
