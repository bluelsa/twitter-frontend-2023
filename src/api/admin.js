import axios from "axios";

const baseURL = "https://pure-waters-81841.herokuapp.com/api";

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

export const adminlogin = async ({ account, password }) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/admin/users`, {
      account,
      password,
    });

        return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/admin/users`);
    return data;
  } catch (error) {
    console.error('[Get Users failed]: ', error);
  }
};

export const getTweets = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/admin/tweets`);
    return data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

export const deleteTweets = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `${baseURL}/admin/tweets/${id}`
    );
    return data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

