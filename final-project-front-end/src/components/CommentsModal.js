import React from "react";

const CommentsModal = ({ isOpen, onClose, comments }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex justify-start items-center bg-gray-800 bg-opacity-50 pl-[120px] w-2/3">
      <div className="bg-white rounded-lg p-6 max-h-96 overflow-y-auto relative left-0 w-[460px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-row items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <p className="mb-0">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default CommentsModal;
