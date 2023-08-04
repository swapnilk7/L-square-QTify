import axiosInstance from "./axiosInstance";

export const getGenres = async () => {
  try {
    const response = await axiosInstance.get("/genres");
    if (response.status !== 200) throw new Error("Backend Server Error");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
