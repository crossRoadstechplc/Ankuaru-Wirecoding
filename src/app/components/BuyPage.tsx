import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { ShoppingCart, CreditCard, MapPin, Package } from 'lucide-react';
import { useLocation } from 'react-router';

export default function BuyPage() {
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
    deliveryAddress: '',
    paymentMethod: 'Bank Transfer',
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
        quantity: location.state.quantity || '',
        unit: location.state.unit || 'kg',
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

  const totalPrice = formData.quantity ? parseFloat(formData.quantity) * 450 : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Buy Commodity</h1>
        <p className="text-gray-600 mb-8">Complete your purchase in 3 easy steps</p>

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
                <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-sm text-gray-700 mb-2">Quantity</label>
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

                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Product Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Additional details or requirements"
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
                <MapPin size={24} className="text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900">Delivery Information</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Delivery Address</label>
                  <textarea 
                    value={formData.deliveryAddress}
                    onChange={(e) => handleChange('deliveryAddress', e.target.value)}
                    placeholder="Enter full delivery address"
                    className="w-full border-2 border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500" 
                    rows={4}
                  ></textarea>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 rounded p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product</span>
                      <span className="font-medium text-gray-900">{formData.productName || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity</span>
                      <span className="font-medium text-gray-900">{formData.quantity} {formData.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grade</span>
                      <span className="font-medium text-gray-900">{formData.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Region</span>
                      <span className="font-medium text-gray-900">{formData.region || 'N/A'}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                      <span className="font-bold text-gray-900">Estimated Total</span>
                      <span className="font-bold text-gray-900">ETB {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CreditCard size={24} className="text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-semibold text-sm text-gray-700 mb-2">Payment Method</label>
                  <div className="p-4 border-2 border-gray-300 rounded bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="Bank Transfer"
                        checked={true}
                        readOnly
                        className="w-4 h-4 mr-3"
                      />
                      <span className="font-medium text-gray-900">Bank Transfer</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 ml-7">All payments are processed via bank transfer for security</p>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 rounded p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Final Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product</span>
                      <span className="font-medium text-gray-900">{formData.productName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity</span>
                      <span className="font-medium text-gray-900">{formData.quantity} {formData.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span className="font-medium text-gray-900">{formData.paymentMethod}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                      <span className="font-bold text-lg text-gray-900">Total Amount</span>
                      <span className="font-bold text-lg text-gray-900">ETB {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
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
                Place Order
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
