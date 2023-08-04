import axiosInstance from "./axiosInstance";

export const getNewAlbums = async () => {
  try {
    const response = await axiosInstance.get("/albums/new");
    if (response.status !== 200) throw new Error("Backend Server Error");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
