import React from 'react'
import profileImage from '../assets/profileImage.webp';

export default function HolidayList() {
    const holidays = [
      {
        name: 'Oumaima Bno',
        role: 'developer',
        reason: 'Wedding',
        period: '15 days',
      },
      {
        name: 'Oumaima Bno',
        role: 'developer',
        reason: 'Wedding',
        period: '15 days',
      },
    ];
  
    return (
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">List of Holiday</h2>
        <div className="space-y-4">
          {holidays.map((holiday, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={profileImage} 
                  alt={holiday.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium">{holiday.name}</p>
                  <p className="text-sm text-gray-500">{holiday.role}</p>
                </div>
              </div>
              <div className="flex-1 ml-8 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-medium">Reason</p>
                  <p className="text-gray-600">{holiday.reason}</p>
                </div>
                <div>
                  <p className="font-medium">Period</p>
                  <p className="text-gray-600">{holiday.period}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50">
                  Accept
                </button>
                <button className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50">
                  Refuse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  