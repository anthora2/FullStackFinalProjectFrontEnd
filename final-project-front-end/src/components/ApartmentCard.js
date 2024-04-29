import React, { useState } from "react";
import CommentsModal from "./CommentsModal";

const ApartmentCard = ({ apartment }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLike = () => {
    if (!liked) {
      setLikeCount(prevCount => prevCount + 1);
      setLiked(true);
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div>
      <div
        className="w-80 h-96 bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 relative"
        onClick={toggleDialog}
      >
        <div className="h-1/2 pt-4 px-4">
          <img
            src={apartment.picture}
            alt="Apartment Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[47%] left-0 w-full bg-white bg-opacity-75 p-4">
          <h2 className="text-center text-black font-extrabold pb-4">
            {apartment.address}
          </h2>
          <h4 className="text-gray-400 text-sm font-medium text-center pb-5">
            See what people have to say?
          </h4>
          {apartment.comments.map((comment, index) => (
            <p key={index} className="pl-6 mb-2">
              <span className="font-bold">{comment.user}: </span>
              {comment.text}
            </p>
          ))}
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-1/3 h-11/12 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleDialog}
            >
              Close
            </button>

            <div className="p-7">
              <img
                src={apartment.picture}
                alt="Apartment Image"
                className="w-full h-10/12 object-cover align-middle"
              />
              <div className="flex flex-row justify-between">
                <div className="pt-4 flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={liked ? "blue" : "currentColor"}
                    className="bi bi-hand-thumbs-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>
                  <p className="pl-1"> {likeCount} </p>
                </div>
                <div className="pt-4 text-gray-500">comments: {comments.length}</div>
              </div>
              <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
                <div className="w-1/2 border-r border-gray-300 pr-2 text-center flex items-center justify-center">
                  <button
                    onClick={handleLike}
                    className={`text-blue-500 hover:text-blue-600 flex items-center ${
                      liked && "text-blue-600"
                    }`}
                  >
                    Like
                  </button>
                </div>
                <div className="w-1/2 pl-2 text-center flex items-center justify-center">
                  <button className="text-blue-500  hover:text-blue-600 flex items-center">
                    Comment
                  </button>
                </div>
                <div className="w-1/6 text-right"></div>
              </div>
              <div className="mt-4 px-2 py-1 bg-gray-200 rounded-lg flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full bg-transparent outline-none"
                  value={newComment}
                  onChange={handleCommentChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full items-end"
                  onClick={handleCommentSubmit}
                >
                  Send
                </button>
              </div>
              <div className="pt-4">
                {comments.map((comment, index) => (
                  <h4 key={index} className="text-lg">
                    <span className="font-bold"> Comment {index + 1} </span> : {comment}
                  </h4>
                ))}
              </div>
              <button onClick={toggleModal}>
                <h4 className="text-gray-500 font-bold hover:text-gray-200">
                  View All Comments
                </h4>
              </button>
              <CommentsModal isOpen={isModalOpen} onClose={toggleModal} comments={comments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;
