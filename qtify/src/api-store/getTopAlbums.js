import axiosInstance from "./axiosInstance";

export const getTopAlbums = async () => {
  try {
    const response = await axiosInstance.get("/albums/top");
    if (response.status !== 200) throw new Error("Backend Server Error");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
