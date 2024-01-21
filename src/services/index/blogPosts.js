import axios from "axios";


export const getAllPosts = async (searchKeyword = "", page = 1, limit = 10) => {
  try {
    const { data, headers } = await axios.get(
      `http://localhost:5000/api/posts?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
    console.log("headers",headers)
    console.log(data)
    return { data, headers };
    
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


/**
 * Fetches a single blog post based on its slug.
 */

export const getSinglePost = async ({ slug }) => {
  try {
const encodedSlug = encodeURIComponent(slug);
const { data } = await axios.get(`http://localhost:5000/api/posts/${encodedSlug}`); // Send a GET request to retrieve the blog post data
console.log('Response Data:', data);
 
   return data;                                      // Return the retrieved data
  } catch (error) {
   
    if (error.response && error.response.data.message) // Handle errors gracefully
      throw new Error(error.response.data.message);
    throw new Error(error.message);                    // If there's no specific error message in the response, throw a generic error
  }
};

// services/index/blogPosts.js

import axios from "axios";

export const createPost = async ({ postData, token }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/posts/create",
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create post");
  }
};

export const updatePost = async ({ updatedData, slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(`http://localhost:5000/api/posts/${slug}`, updatedData, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const deletePost = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(`http://localhost:5000/api/posts/${slug}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

