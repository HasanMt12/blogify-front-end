/**
 * Comment Service Functions
 * 
 * This module contains functions for interacting with the server's comment-related endpoints.
 * It provides functionality for creating, updating, and deleting comments using axios to
 * make HTTP/HTTPS requests.
 * 
 * @module CommentService
 */

import axios from "axios";

/**
 * Creates a new comment on the server.
 * 
 * @param {Object} options - Options for creating a new comment.
 * @param {string} options.token - User authentication token.
 * @param {string} options.desc - Comment content.
 * @param {string} options.slug - Slug of the associated blog post.
 * @param {string} options.parent - ID of the parent comment (if it's a reply).
 * @param {string} options.replyOnUser - ID of the user being replied to (if it's a reply).
 * @returns {Object} - The created comment data.
 * @throws {Error} - If an error occurs during the request.
 */

export const createNewComment = async ({
  token,
  desc,
  slug,
  parent,
  replyOnUser,
}) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/comments",
      {
        desc,
        slug,
        parent,
        replyOnUser,
      },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


/**
 * Updates an existing comment on the server.
 * 
 * @param {Object} options - Options for updating a comment.
 * @param {string} options.token - User authentication token.
 * @param {string} options.desc - Updated comment content.
 * @param {string} options.commentId - ID of the comment to be updated.
 * @returns {Object} - The updated comment data.
 * @throws {Error} - If an error occurs during the request.
 */


export const updateComment = async ({ token, desc, commentId }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/comments/${commentId}`,
      {
        desc,
      },
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


/**
 * Deletes an existing comment on the server.
 * 
 * @param {Object} options - Options for deleting a comment.
 * @param {string} options.token - User authentication token.
 * @param {string} options.commentId - ID of the comment to be deleted.
 * @returns {Object} - The deletion response data.
 * @throws {Error} - If an error occurs during the request.
 */

export const deleteComment = async ({ token, commentId }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(`http://localhost:5000/api/comments/${commentId}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};