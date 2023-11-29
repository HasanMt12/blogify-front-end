import axios from "axios";


export const getAllPosts = async (searchKeyword = "", page = 1, limit = 10) => {
  try {
    const { data, headers } = await axios.get(
      `http://localhost:5000/api/posts?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
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
   const { data } = await axios.get(`http://localhost:5000/api/posts/${slug}`); // Send a GET request to retrieve the blog post data
    return data;                                      // Return the retrieved data
  } catch (error) {
   
    if (error.response && error.response.data.message) // Handle errors gracefully
      throw new Error(error.response.data.message);
    throw new Error(error.message);                    // If there's no specific error message in the response, throw a generic error
  }
};


export const deletePost = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(`/api/posts/${slug}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

