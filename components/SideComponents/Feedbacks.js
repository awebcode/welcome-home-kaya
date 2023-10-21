import React from "react";

const FeedbackComponent = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Feedback</h1>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="feedbackInput"
        >
          Your Feedback
        </label>
        <textarea
          className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedbackInput"
          placeholder="Type your feedback here..."
          rows="6"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ratingInput"
        >
          Rating
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="ratingInput"
        >
          <option>5 Stars</option>
          <option>4 Stars</option>
          <option>3 Stars</option>
          <option>2 Stars</option>
          <option>1 Star</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button className="custom-btn w-full h-full">Submit Feedback</button>
      </div>
    </div>
  );
};

export default FeedbackComponent;
