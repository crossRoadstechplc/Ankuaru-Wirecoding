// import React from 'react'

// const Banks_Verfications = () => {
//   return (
//     <div>Banks_Verfications</div>
//   )
// }

// export default Banks_Verfications
import React from 'react';
import { Eye, Check, X } from 'lucide-react';

const Banks_Verfications = () => {

    const banks = [
        {
            name: 'Example Bank',
            accountNumber: '1234567890',
            verificationStatus: 'Verified',
        },
        {
            name: 'Sample Bank',
            accountNumber: '0987654321',
            verificationStatus: 'Pending',  
        },
        {
            name: 'Test Bank',  
            accountNumber: '1122334455',    
            verificationStatus: 'Rejected',
        }
        // Add more bank entries as needed
    ];
  
    return (
    <div className="p-4 ">
        
      <h1 className="text-2xl font-bold mb-4">Banks Verification</h1>
        <div className="bg-white border border-gray-300 p-6 rounded-lg justify-center">
            <p className="text-gray-700 mb-4">This is the Banks Verification page. Here you can manage and verify bank details for transactions.</p>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>    

                            <th className="border-b border-gray-300 py-2">Bank Name</th>        
                            <th className="border-b border-gray-300 py-2">Account Number</th>
                            <th className="border-b border-gray-300 py-2">Verification Status</th>
                            <th className="border-b border-gray-300 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {banks.map((bank, index) => (
                                <tr key={index}>
                                    <td className="border-b border-gray-300 py-2">{bank.name}</td>
                                    <td className="border-b border-gray-300 py-2">{bank.accountNumber}</td>
                                    <td className="border-b border-gray-300 py-2">{bank.verificationStatus}</td>
                                    <td className="border-b border-gray-300 py-2">
                                        <button className="px-3 py-1 bg-blue-600 text-white font-mono text-sm rounded inline-flex items-center">
                                            <Eye size={14} className="mr-1" />
                                            
                                        </button>
                                        <button className="px-3 py-1 bg-green-600 text-white font-mono text-sm rounded ml-2 inline-flex items-center">
                                            <Check size={14} className="mr-1" />
                                         
                                        </button>
                                        <button className="px-3 py-1 bg-red-600 text-white font-mono text-sm rounded ml-2 inline-flex items-center">
                                            <X size={14} className="mr-1" />
                                          
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                        </div>
                        </div>
    )
}
   



  

export default Banks_Verfications   