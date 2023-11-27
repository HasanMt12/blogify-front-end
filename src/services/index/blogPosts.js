import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/posts");
    return response.data;
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
   const { data } = await axios.get(`http://localhost:5000/api/posts/${slug}`); // Send a GET request to retrieve the blog post data
    return data;                                      // Return the retrieved data
  } catch (error) {
   
    if (error.response && error.response.data.message) // Handle errors gracefully
      throw new Error(error.response.data.message);
    throw new Error(error.message);                    // If there's no specific error message in the response, throw a generic error
  }
};

