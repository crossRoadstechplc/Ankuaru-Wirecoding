import React, { useState } from 'react';
import { User, Mail, Phone, Building2, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    companyName: 'ABC Trading Corp',
    businessType: 'Commodity Trading',
    address: '123 Financial District, New York, NY 10004',
    registeredDate: '2024-01-15',
    accountType: 'Buyer',
    verificationStatus: 'Verified',
    kycStatus: 'Completed',
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedProfile({ ...editedProfile, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">User Profile</h1>
          <p className="text-gray-600 mt-1">Manage your account information</p>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded">
          <div className="border-b-2 border-gray-300 bg-gray-100 p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <User size={40} className="text-gray-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile.fullName}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">{profile.accountType}</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded">
                    {profile.verificationStatus}
                  </span>
                </div>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold flex items-center gap-2"
              >
                <Edit2 size={16} />
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded font-semibold flex items-center gap-2"
                >
                  <Save size={16} />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold flex items-center gap-2"
                >
                  <X size={16} />
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  <User size={16} className="mr-2" />
                  Personal Information
                </h3>
                <div className="space-y-4 pl-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      <Mail size={14} className="inline mr-1" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      <Phone size={14} className="inline mr-1" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedProfile.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 size={16} className="mr-2" />
                  Business Information
                </h3>
                <div className="space-y-4 pl-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Company Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Business Type
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.businessType}
                        onChange={(e) => handleChange('businessType', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.businessType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      <MapPin size={14} className="inline mr-1" />
                      Address
                    </label>
                    {isEditing ? (
                      <textarea
                        value={editedProfile.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        rows={3}
                      />
                    ) : (
                      <p className="text-gray-900">{profile.address}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                <Calendar size={16} className="mr-2" />
                Account Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Account Type
                  </label>
                  <p className="text-gray-900">{profile.accountType}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Registration Date
                  </label>
                  <p className="text-gray-900">{profile.registeredDate}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Verification Status
                  </label>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded">
                    {profile.verificationStatus}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    KYC Status
                  </label>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded">
                    {profile.kycStatus}
                  </span>
                </div>
            </div>
              
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Security Settings</h3>
            <p className="text-sm text-gray-600 mb-4">Manage your password and security preferences</p>
            <button className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold">
              Change Password
            </button>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bank Accounts</h3>
            <p className="text-sm text-gray-600 mb-4">View and manage your linked bank accounts</p>
            <button className="px-4 py-2 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold">
              Manage Banks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
