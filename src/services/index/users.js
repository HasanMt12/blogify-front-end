import axios from "axios";

// Make a POST request to the server's registration endpoint
export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/users/register", {
      name,
      email,
      password,
    });
    return data;  // Return the data received from the server
  } catch (error) {
    // Handle errors during the registration process
      if (error.response && error.response.data.message)

    // If the server responds with an error message, throw that message
      throw new Error(error.response.data.message);

    // If there is no specific error message from the server, throw the general error message
      throw new Error(error.message);
  }
};

