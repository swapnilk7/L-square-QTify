import axiosInstance from "./axiosInstance";

export const getSongs = async () => {
  try {
    const response = await axiosInstance.get("/songs");
    if (response.status !== 200) throw new Error("Backend Server Error");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
