import axios from "axios";

export const createCompany = async (payload) => {
  try {
    const response = await axios.post(
      `https://f3d-server.onrender.com/api/v1/clients/create`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
