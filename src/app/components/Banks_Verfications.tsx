import React, { useState } from 'react';
import { Eye, Check, X, FileText, Building2, User, CreditCard, MapPin, Search, Filter, Download, RefreshCw, AlertCircle } from 'lucide-react';

const Banks_Verfications = () => {
  const [banks, setBanks] = useState([
    {
      id: 1,
      name: 'Example Bank',
      accountNumber: '1234567890',
      accountHolder: 'John Doe',
      accountType: 'Current Account',
      branch: 'Main Branch',
      branchAddress: '123 Financial District, New York, NY 10004',
      ifscCode: 'EXMP0001234',
      swiftCode: 'EXMPUS33',
      verificationStatus: 'Verified',
      submittedDate: '2024-01-15',
      verifiedDate: '2024-01-16',
      documentType: 'Bank Statement',
      companyName: 'ABC Trading Corp',
      businessType: 'Commodity Trading',
      taxId: 'TAX123456789',
      registrationNumber: 'REG987654321',
      contactPerson: 'John Doe',
      contactEmail: 'john@abctrading.com',
      contactPhone: '+1 (555) 123-4567',
    },
    {
      id: 2,
      name: 'Sample Bank',
      accountNumber: '0987654321',
      accountHolder: 'Jane Smith',
      accountType: 'Savings Account',
      branch: 'Downtown Branch',
      branchAddress: '456 Commerce Ave, Los Angeles, CA 90012',
      ifscCode: 'SMPL0005678',
      swiftCode: 'SMPLUS44',
      verificationStatus: 'Pending',
      submittedDate: '2024-01-20',
      verifiedDate: null,
      documentType: 'Cancelled Cheque',
      companyName: 'XYZ Exports Ltd',
      businessType: 'Coffee Export',
      taxId: 'TAX987654321',
      registrationNumber: 'REG123456789',
      contactPerson: 'Jane Smith',
      contactEmail: 'jane@xyzexports.com',
      contactPhone: '+1 (555) 987-6543',
    },
    {
      id: 3,
      name: 'Test Bank',
      accountNumber: '1122334455',
      accountHolder: 'Bob Johnson',
      accountType: 'Business Account',
      branch: 'North Branch',
      branchAddress: '789 Trade Center, Chicago, IL 60601',
      ifscCode: 'TEST0009012',
      swiftCode: 'TESTUS55',
      verificationStatus: 'Rejected',
      submittedDate: '2024-01-18',
      verifiedDate: '2024-01-19',
      documentType: 'Bank Letter',
      companyName: 'Global Spices Inc',
      businessType: 'Spice Trading',
      rejectionReason: 'Document quality insufficient',
      taxId: 'TAX555666777',
      registrationNumber: 'REG444555666',
      contactPerson: 'Bob Johnson',
      contactEmail: 'bob@globalspices.com',
      contactPhone: '+1 (555) 456-7890',
    },
    {
      id: 4,
      name: 'Commerce Bank',
      accountNumber: '5566778899',
      accountHolder: 'Sarah Williams',
      accountType: 'Current Account',
      branch: 'East Branch',
      branchAddress: '321 Market Street, Boston, MA 02101',
      ifscCode: 'COMM0002468',
      swiftCode: 'COMMUS66',
      verificationStatus: 'Pending',
      submittedDate: '2024-01-22',
      verifiedDate: null,
      documentType: 'Bank Statement',
      companyName: 'Premium Coffee Traders',
      businessType: 'Coffee Trading',
      taxId: 'TAX111222333',
      registrationNumber: 'REG777888999',
      contactPerson: 'Sarah Williams',
      contactEmail: 'sarah@premiumcoffee.com',
      contactPhone: '+1 (555) 234-5678',
    },
    {
      id: 5,
      name: 'National Bank',
      accountNumber: '9988776655',
      accountHolder: 'Michael Chen',
      accountType: 'Business Account',
      branch: 'West Branch',
      branchAddress: '654 Business Park, Seattle, WA 98101',
      ifscCode: 'NATL0003579',
      swiftCode: 'NATLUS77',
      verificationStatus: 'Verified',
      submittedDate: '2024-01-10',
      verifiedDate: '2024-01-12',
      documentType: 'Bank Statement',
      companyName: 'Spice World Imports',
      businessType: 'Spice Import',
      taxId: 'TAX444555666',
      registrationNumber: 'REG111222333',
      contactPerson: 'Michael Chen',
      contactEmail: 'michael@spiceworld.com',
      contactPhone: '+1 (555) 345-6789',
    },
  ]);

  const [selectedBank, setSelectedBank] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedBanks, setSelectedBanks] = useState([]);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [rejectingBankId, setRejectingBankId] = useState(null);

  const handleView = (bank) => {
    setSelectedBank(bank);
  };

  const handleApprove = (id) => {
    setBanks(banks.map(bank => 
      bank.id === id ? { ...bank, verificationStatus: 'Verified', verifiedDate: new Date().toISOString().split('T')[0] } : bank
    ));
    if (selectedBank?.id === id) {
      setSelectedBank({ ...selectedBank, verificationStatus: 'Verified' });
    }
  };

  const openRejectModal = (id) => {
    setRejectingBankId(id);
    setShowRejectModal(true);
  };

  const handleReject = () => {
    setBanks(banks.map(bank => 
      bank.id === rejectingBankId ? { ...bank, verificationStatus: 'Rejected', rejectionReason, verifiedDate: new Date().toISOString().split('T')[0] } : bank
    ));
    if (selectedBank?.id === rejectingBankId) {
      setSelectedBank({ ...selectedBank, verificationStatus: 'Rejected', rejectionReason });
    }
    setShowRejectModal(false);
    setRejectionReason('');
    setRejectingBankId(null);
  };

  const handleBulkApprove = () => {
    setBanks(banks.map(bank => 
      selectedBanks.includes(bank.id) ? { ...bank, verificationStatus: 'Verified', verifiedDate: new Date().toISOString().split('T')[0] } : bank
    ));
    setSelectedBanks([]);
  };

  const handleSelectBank = (id) => {
    setSelectedBanks(prev => 
      prev.includes(id) ? prev.filter(bankId => bankId !== id) : [...prev, id]
    );
  };

  const handleExport = () => {
    const csv = 'Company,Bank,Account Number,Status,Submitted Date\n' + 
      filteredBanks.map(b => 
        `${b.companyName},${b.name},${b.accountNumber},${b.verificationStatus},${b.submittedDate}`
      ).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bank_verifications.csv';
    a.click();
  };

  const filteredBanks = banks.filter(bank => {
    const matchesSearch = bank.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bank.accountNumber.includes(searchQuery);
    const matchesFilter = filterStatus === 'All' || bank.verificationStatus === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: banks.length,
    verified: banks.filter(b => b.verificationStatus === 'Verified').length,
    pending: banks.filter(b => b.verificationStatus === 'Pending').length,
    rejected: banks.filter(b => b.verificationStatus === 'Rejected').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Bank Account Verifications</h1>
          <p className="text-gray-600 mt-1">Review and verify bank accounts for trading platform users</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Total Accounts</div>
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Verified</div>
            <div className="text-2xl font-bold text-gray-900">{stats.verified}</div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Pending Review</div>
            <div className="text-2xl font-bold text-gray-900">{stats.pending}</div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-4">
            <div className="text-sm text-gray-600 mb-1">Rejected</div>
            <div className="text-2xl font-bold text-gray-900">{stats.rejected}</div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by company, bank, or account..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-600" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                >
                  <option value="All">All Status</option>
                  <option value="Verified">Verified</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              {selectedBanks.length > 0 && (
                <button
                  onClick={handleBulkApprove}
                  className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 flex items-center gap-2"
                >
                  <Check size={16} />
                  Approve ({selectedBanks.length})
                </button>
              )}
              <button
                onClick={handleExport}
                className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded flex items-center gap-2"
              >
                <Download size={16} />
                Export
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded flex items-center gap-2"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className={`${selectedBank ? 'lg:col-span-3' : 'lg:col-span-5'} bg-white border-2 border-gray-300 rounded`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      <input
                        type="checkbox"
                        checked={selectedBanks.length === filteredBanks.length && filteredBanks.length > 0}
                        onChange={(e) => setSelectedBanks(e.target.checked ? filteredBanks.map(b => b.id) : [])}
                        className="w-4 h-4"
                      />
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Company</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Bank Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Account Number</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Submitted</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBanks.map((bank) => (
                    <tr key={bank.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <input
                          type="checkbox"
                          checked={selectedBanks.includes(bank.id)}
                          onChange={() => handleSelectBank(bank.id)}
                          className="w-4 h-4"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{bank.companyName}</div>
                        <div className="text-sm text-gray-600">{bank.businessType}</div>
                      </td>
                      <td className="py-3 px-4 text-gray-900">{bank.name}</td>
                      <td className="py-3 px-4 text-gray-700">{bank.accountNumber}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{bank.submittedDate}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                            bank.verificationStatus === 'Verified'
                              ? 'bg-gray-200 text-gray-800'
                              : bank.verificationStatus === 'Pending'
                              ? 'bg-gray-100 text-gray-600 border border-gray-300'
                              : 'bg-gray-300 text-gray-900'
                          }`}
                        >
                          {bank.verificationStatus}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleView(bank)}
                            className="p-2 border border-gray-400 hover:bg-gray-100 rounded" 
                            title="View"
                          >
                            <Eye size={16} className="text-gray-700" />
                          </button>
                          <button 
                            onClick={() => handleApprove(bank.id)}
                            className="p-2 border border-gray-400 hover:bg-gray-100 rounded" 
                            title="Approve"
                            disabled={bank.verificationStatus === 'Verified'}
                          >
                            <Check size={16} className="text-gray-700" />
                          </button>
                          <button 
                            onClick={() => openRejectModal(bank.id)}
                            className="p-2 border border-gray-400 hover:bg-gray-100 rounded" 
                            title="Reject"
                            disabled={bank.verificationStatus === 'Rejected'}
                          >
                            <X size={16} className="text-gray-700" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {selectedBank && (
            <div className="lg:col-span-2 bg-white border-2 border-gray-300 rounded">
              <div className="border-b-2 border-gray-300 bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-900">Verification Details</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <Building2 size={16} className="mr-2" />
                    Company Information
                  </h3>
                  <div className="space-y-2 pl-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Company Name</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Business Type</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.businessType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tax ID</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.taxId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Registration Number</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.registrationNumber}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <User size={16} className="mr-2" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 pl-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Contact Person</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.contactPerson}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Email</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.contactEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Phone</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.contactPhone}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <CreditCard size={16} className="mr-2" />
                    Bank Account Details
                  </h3>
                  <div className="space-y-2 pl-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Bank Name</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Account Holder</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.accountHolder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Account Number</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Account Type</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.accountType}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    Branch Information
                  </h3>
                  <div className="space-y-2 pl-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Branch Name</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.branch}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Branch Address</span>
                      <p className="text-sm font-medium text-gray-900 mt-1">{selectedBank.branchAddress}</p>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">IFSC Code</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.ifscCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">SWIFT Code</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.swiftCode}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <FileText size={16} className="mr-2" />
                    Verification Status
                  </h3>
                  <div className="space-y-2 pl-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Document Type</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.documentType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Submitted Date</span>
                      <span className="text-sm font-medium text-gray-900">{selectedBank.submittedDate}</span>
                    </div>
                    {selectedBank.verifiedDate && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Verified Date</span>
                        <span className="text-sm font-medium text-gray-900">{selectedBank.verifiedDate}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Status</span>
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                          selectedBank.verificationStatus === 'Verified'
                            ? 'bg-gray-200 text-gray-800'
                            : selectedBank.verificationStatus === 'Pending'
                            ? 'bg-gray-100 text-gray-600 border border-gray-300'
                            : 'bg-gray-300 text-gray-900'
                        }`}
                      >
                        {selectedBank.verificationStatus}
                      </span>
                    </div>
                    {selectedBank.rejectionReason && (
                      <div>
                        <span className="text-sm text-gray-600">Rejection Reason</span>
                        <p className="text-sm font-medium text-gray-900 mt-1">{selectedBank.rejectionReason}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(selectedBank.id)}
                      className="flex-1 px-4 py-3 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold flex items-center justify-center"
                      disabled={selectedBank.verificationStatus === 'Verified'}
                    >
                      <Check size={18} className="mr-2" />
                      Approve Account
                    </button>
                    <button
                      onClick={() => openRejectModal(selectedBank.id)}
                      className="flex-1 px-4 py-3 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold flex items-center justify-center"
                      disabled={selectedBank.verificationStatus === 'Rejected'}
                    >
                      <X size={18} className="mr-2" />
                      Reject Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-gray-300 rounded p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={24} className="text-gray-700" />
              <h3 className="text-xl font-bold text-gray-900">Reject Bank Account</h3>
            </div>
            <p className="text-gray-600 mb-4">Please provide a reason for rejecting this bank account verification.</p>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Enter rejection reason..."
              className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500 mb-4"
              rows={4}
            />
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-semibold"
                disabled={!rejectionReason.trim()}
              >
                Confirm Rejection
              </button>
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectionReason('');
                  setRejectingBankId(null);
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
};

export default Banks_Verfications;
