import React, { useState } from 'react';

const CommentsModal = ({ isOpen, onClose }) => {
  const fakeComments = [
    "This website is awesome!",
    "I found my dream home here!",
    "Great user experience!",
    "This website is awesome!",
    "I found my dream home here!",
    "Great user experience!",
    "This website is awesome!",
    "I found my dream home here!",
    "Great user experience!",
    "This website is awesome!",
    "I found my dream home here!",
    "Great user experience!",
    "This website is awesome!",
    "I found my dream home here!",
    "Great user experience!",
    // Add more fake comments as needed
  ];

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex justify-start items-center bg-gray-800 bg-opacity-50 pl-[120px] w-2/3">
      <div className="bg-white rounded-lg p-6 max-h-96 overflow-y-auto relative left-0 w-[460px]">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        <div>
          {fakeComments.map((comment, index) => (
            <p key={index} className="mb-2">{comment}</p>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default CommentsModal