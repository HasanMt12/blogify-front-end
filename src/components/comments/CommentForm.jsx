/* eslint-disable react/prop-types */

/**
 * CommentForm Component
 * 
 * A reusable form component for handling comments. It provides a textarea for entering
 * comment text, a submit button to submit the comment, and an optional cancel button.
 * 
 * @param {string} btnLabel - The label for the submit button.
 * @param {Function} formSubmitHanlder - The function to handle form submission.
 * @param {Function} formCancelHandler - The optional function to handle form cancellation.
 * @param {string} initialText - The initial text in the textarea (default is an empty string).
 * @param {boolean} loading - Indicates whether the form is in a loading state (default is false).
 * 
 * @returns {React.Element} - Rendered CommentForm component.
 */

import  { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHanlder,
  formCancelHandler = null,
  initialText = "",
  loading = false,
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHanlder(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none bg-transparent"
          rows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500"
            >
              Cancel
            </button>
          )}
          <button
            disabled={loading}
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary
         text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;