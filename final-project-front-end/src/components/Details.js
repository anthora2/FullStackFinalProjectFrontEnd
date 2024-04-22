import React from "react";

const Details = () => {
  return (
    <div className="bg-gray-200 w-full flex">
      <div className="w-1/3 flex flex-col items-center justify-center pt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          class="bi bi-card-list"
          viewBox="0 0 16 16"
        >
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        </svg>
        <h2 className="text-lg font-bold">Transparency</h2>
        <p className="text-center max-w-xs pt-8 pb-16">
          {" "}
          We aim to show all the information that is required for you to find
          your ideal stay. We work for you.
        </p>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center pt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          class="bi bi-person-video3"
          viewBox="0 0 16 16"
        >
          <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2" />
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z" />
        </svg>
        <h2 className="text-lg font-bold">Customer Reviews</h2>
        <p className="text-center max-w-xs pt-8 pb-16">
          From trusted sources that have stayed at each stay, you will be
          getting the most reliable and genuine reviews.
        </p>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center pt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          class="bi bi-envelope-check"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
        </svg>
        <h2 className="text-lg font-bold">Communication</h2>
        <p className="text-center max-w-xs pt-8 pb-16">
          {" "}
          Communication is key and we make it our personal mission to let you
          know anything that comes up. "
        </p>
      </div>
    </div>
  );
};

export default Details;
