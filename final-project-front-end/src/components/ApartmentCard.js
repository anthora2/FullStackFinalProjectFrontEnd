import React from 'react';

const ApartmentCard = ({ picture }) => {
  return (
    <div className="w-80 h-96 bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="h-1/2 p-4">
        <img src={ picture } alt="Your Image" className="w-full h-full object-cover" />
      </div>
      <div className="h-1/2 flex items-center justify-center text-gray-600">
        <p>Read Reviews</p>
      </div>
    </div>
  );
};

export default ApartmentCard;
