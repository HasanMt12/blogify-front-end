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


export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

//
//  Retrieve user profile information by sending a GET request to the "serverAPI/api/users/profile" endpoint.
//

export const getUserProfile = async ({ token }) => {
  try {
    // Set up the request configuration with the authorization token.
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Send a GET request to retrieve the user profile information.
    const { data } = await axios.get("http://localhost:5000/api/users/profile", config);

    // Return the user profile data.
    return data;
  } catch (error) {
    // If the request fails, handle errors and throw appropriate messages.
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error.message);
    }
  }
};


//  
// Update user profile information by sending a PUT request to the "serverAPI/api/users/updateProfile" endpoint.
// 

export const updateProfile = async ({ token, userData }) => {
  try {
    // Set up the request configuration with the authorization token.
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
 // Send a PUT request to update the user profile with the provided data.
    const { data } = await axios.put(
      "http://localhost:5000/api/users/updateProfile",
      userData,
      config
    );
   // Return the updated user data.
    return data;
  } catch (error) {
    // If the request fails, handle errors and throw appropriate messages.
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const updateProfilePicture = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      "http://localhost:5000/api/users/updateProfilePicture",
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
