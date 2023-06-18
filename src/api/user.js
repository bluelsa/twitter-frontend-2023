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

export const getUser = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/users/${id}`);
    return data;
  } catch (error) {
    console.error("[Get User failed]: ", error);
  }
};

export const getUserTweets = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/users/${id}/tweets`);
    return data;
  } catch (error) {
    console.error("[Get User Tweets failed]: ", error);
  }
};

export const getUserReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `${baseURL}/users/${id}/replied_tweets`
    );
    return data;
  } catch (error) {
    console.error("[Get User Replies failed]: ", error);
  }
};

export const getUserLikes = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/users/${id}/likes`);
    return data;
  } catch (error) {
    console.error("[Get User Likes failed]: ", error);
  }
};

export const getUserFollowings = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `${baseURL}/users/${id}/followings`
    );
    return data;
  } catch (error) {
    console.error("[Get User followings failed]: ", error);
  }
};

export const getUserFollowers = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `${baseURL}/users/${id}/followers`
    );
    return data;
  } catch (error) {
    console.error("[Get User followers failed]: ", error);
  }
};

export const getPopular = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/users/top`);
    return data;
  } catch (error) {
    console.error("[Get Popular failed]: ", error);
  }
};

export const putUser = async (payload) => {
  const { id, name, introduction, avatar, background } = payload;
  try {
    const FormData = require("form-data");
    let putFormData = new FormData();
    putFormData.append("name", name);
    putFormData.append("introduction", introduction);
    putFormData.append("avatar", avatar);
    putFormData.append("background", background);
    const { data } = await axiosInstance.put(
      `${baseURL}/users/${id}`,
      putFormData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error) {
    console.error("[put User failed]: ", error);
  }
};

export const putSetting = async (payload) => {
  const { id, account, name, email, password, checkPassword } =
    payload;
  try {
    const { data } = await axiosInstance.put(`${baseURL}/users/${id}/setting`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });

    return data;
  } catch (error) {
    if ( error.response.status === 400) {
    console.log(error.response.data);
    return error.response.data
    // console.error("[put Setting failed]: ", error);
    }
  }
};
