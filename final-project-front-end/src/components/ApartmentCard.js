import React, { useState } from 'react';

const ApartmentCard = ({ picture }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div>
      <div
        className="w-80 h-96 bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
        onClick={toggleDialog}
      >
        <div className="h-1/2 p-4">
          <img src={picture} alt="Your Image" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/2 flex items-center justify-center text-gray-600">
          <p>Read Reviews</p>
        </div>
      </div>

      {/* Dialog/modal */}
      {isDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-1/3 h-2/3 bg-white rounded-lg shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleDialog}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Dialog content */}
            <div className="p-4">
              <img src={picture} alt="Your Image" className="w-full h-10/12 object-cover align-middle" />
              <p className="mt-4 text-gray-800">Apartment details here...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;
