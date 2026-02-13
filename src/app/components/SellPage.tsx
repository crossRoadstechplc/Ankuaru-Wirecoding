import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Package, DollarSign, FileText, Upload } from 'lucide-react';
import { useLocation } from 'react-router';

export default function SellPage() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    region: '',
    grade: '',
    description: '',
    quantity: '',
    unit: 'kg',
    pricePerUnit: '',
    minOrder: '',
  });

  useEffect(() => {
    if (location.state) {
      setFormData(prev => ({
        ...prev,
        category: location.state.category || '',
        productName: location.state.productName || '',
        region: location.state.region || '',
        grade: location.state.grade || '',
        description: location.state.description || '',
      }));
    }
  }, [location.state]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const totalValue = formData.quantity && formData.pricePerUnit ? parseFloat(formData.quantity) * parseFloat(formData.pricePerUnit) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sell Commodity</h1>
        <p className="text-gray-600 mb-8">List your product in 3 easy steps</p>

        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {s}
              </div>
              <div className="flex-1 mx-2">
                <div className={`h-1 ${
                  step > s ? 'bg-gray-900' : 'bg-gray-300'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white border-2 border-gray-300 rounded p-8">
          {step === 1 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Package size={24} className="text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900">Product Information</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Product Name</label>
                  <input 
                    type="text" 
                    value={formData.productName}
                    onChange={(e) => handleChange('productName', e.target.value)}
                    placeholder="e.g., Arabica Coffee"
                    className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Product Photo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center hover:bg-gray-50 cursor-pointer">
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Region</label>
                    <input 
                      type="text" 
                      value={formData.region}
                      onChange={(e) => handleChange('region', e.target.value)}
                      placeholder="e.g., Sidamo"
                      className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Grade</label>
                    <select 
                      value={formData.grade}
                      onChange={(e) => handleChange('grade', e.target.value)}
                      className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                    >
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                      <option>Grade A</option>
                      <option>Premium</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Product Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Describe your product quality, origin, certifications, etc."
                    className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500" 
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <DollarSign size={24} className="text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900">Pricing & Quantity</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Available Quantity</label>
                    <input 
                      type="number" 
                      value={formData.quantity}
                      onChange={(e) => handleChange('quantity', e.target.value)}
                      placeholder="Enter quantity"
                      className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Unit</label>
                    <select 
                      value={formData.unit}
                      onChange={(e) => handleChange('unit', e.target.value)}
                      className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                    >
                      <option>kg</option>
                      <option>quintal</option>
                      <option>Ton</option>
                      <option>FCL</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Price per Unit (ETB)</label>
                    <input 
                      type="number" 
                      value={formData.pricePerUnit}
                      onChange={(e) => handleChange('pricePerUnit', e.target.value)}
                      placeholder="Enter price"
                      className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Minimum Order</label>
                    <input 
                      type="number" 
                      value={formData.minOrder}
                      onChange={(e) => handleChange('minOrder', e.target.value)}
                      placeholder="Min quantity"
                      className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 rounded p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Listing Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product</span>
                      <span className="font-medium text-gray-900">{formData.productName || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available Quantity</span>
                      <span className="font-medium text-gray-900">{formData.quantity} {formData.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per Unit</span>
                      <span className="font-medium text-gray-900">ETB {formData.pricePerUnit || '0'}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                      <span className="font-bold text-gray-900">Total Value</span>
                      <span className="font-bold text-gray-900">ETB {totalValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText size={24} className="text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900">Review & Publish</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 border-2 border-gray-300 rounded p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Listing Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Category</span>
                      <p className="font-medium text-gray-900">{formData.category}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Product Name</span>
                      <p className="font-medium text-gray-900">{formData.productName}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Region</span>
                        <p className="font-medium text-gray-900">{formData.region}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Grade</span>
                        <p className="font-medium text-gray-900">{formData.grade}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Description</span>
                      <p className="font-medium text-gray-900">{formData.description || 'N/A'}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Quantity</span>
                        <p className="font-medium text-gray-900">{formData.quantity} {formData.unit}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Price per Unit</span>
                        <p className="font-medium text-gray-900">ETB {formData.pricePerUnit}</p>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-gray-900">Total Listing Value</span>
                        <span className="font-bold text-lg text-gray-900">ETB {totalValue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 border-2 border-gray-300 rounded p-4">
                  <p className="text-sm text-gray-700">
                    By publishing this listing, you agree to the platform's terms and conditions. Your product will be visible to all buyers on the marketplace.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8 pt-6 border-t-2 border-gray-300">
            {step > 1 && (
              <button 
                onClick={handleBack}
                className="px-6 py-3 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button 
                onClick={handleNext}
                className="flex-1 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 rounded font-semibold"
              >
                Continue
              </button>
            ) : (
              <button 
                className="flex-1 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 rounded font-semibold"
              >
                Publish Listing
              </button>
            )}
            <Link to="/marketplace">
              <button className="px-6 py-3 border-2 border-gray-400 hover:bg-gray-100 rounded font-semibold">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
