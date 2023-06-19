import axios from "axios";

const baseURL = "https://pure-waters-81841.herokuapp.com/api/followships";

const axiosInstance = axios.create({
  baseUrl: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export const createFollow = async (id) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}`, {
      id
    });
    return data;
  } catch (error) {
    console.error("[Create Following failed]:", error);
  }
};

export const deleteFollow = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`${baseURL}/${id}`);
    return data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

