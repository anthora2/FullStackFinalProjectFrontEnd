import React, { useState } from "react";
import CommentsModal from "./CommentsModal";

const ApartmentCard = ({ picture }) => {
  // State for like count and like status
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
            src={picture}
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[47%] left-0 w-full bg-white bg-opacity-75 p-4">
          <h2 className="text-center text-black font-extrabold pb-4">
            2520 Benvenue Ave
          </h2>
          <h4 className="text-gray-400 text-sm font-medium text-center pb-5">
            See what people have to say ?
          </h4>
          <p className="pl-6 mb-2">
            <span className="font-bold">John Doe: </span>Dis apartment sick as
            heck
          </p>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-1/3 h-11/12 bg-white rounded-lg shadow-lg">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Dialog content */}
            <div className="p-7">
              <img
                src={picture}
                alt="Your Image"
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
                  {/* Like button */}
                  <button
                    onClick={handleLike}
                    className={`text-blue-500 hover:text-blue-600 flex items-center ${
                      liked && "text-blue-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up mr-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    Like
                  </button>
                </div>
                <div className="w-1/2 pl-2 text-center flex items-center justify-center">
                  <button className="text-blue-500  hover:text-blue-600 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chat mr-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                    </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                  </svg>
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
