import axios from "axios";

const userURL = "https://pure-waters-81841.herokuapp.com/api/users";

const axiosInstance = axios.create({
  baseUrl: userURL,
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
    const { data } = await axiosInstance.get(`${userURL}/${id}`);
    return data;
  } catch (error) {
    console.error("[Get User failed]: ", error);
  }
};

export const getUserTweets = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${userURL}/${id}/tweets`);
    return data;
  } catch (error) {
    console.error("[Get User Tweets failed]: ", error);
  }
};

export const getUserReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${userURL}/${id}/replied_tweets`);
    return data;
  } catch (error) {
    console.error("[Get User Replies failed]: ", error);
  }
};

export const getUserLikes = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${userURL}/${id}/likes`);
    return data;
  } catch (error) {
    console.error("[Get User Likes failed]: ", error);
  }
};

export const getUserFollowings = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${userURL}/${id}/followings`);
    return data;
  } catch (error) {
    console.error("[Get User followings failed]: ", error);
  }
};

export const getUserFollowers = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${userURL}/${id}/followers`);
    return data;
  } catch (error) {
    console.error("[Get User followers failed]: ", error);
  }
};

export const getPopular = async () => {
  try {
    const { data } = await axiosInstance.get(`${userURL}/top`);
    return data;
  } catch (error) {
    console.error("[Get Popular failed]: ", error);
  }
};

export const putUser = async (payload) => {
  const { id, name, introduction, avatar, background } = payload;
  try {
    console.log(`${userURL}/${id}`);
    const { data } = await axiosInstance.put(`${userURL}/${id}`, {
      name,
      introduction,
      avatar,
      background
    });

    return data;
  } catch (error) {
    console.error("[put User failed]: ", error);
  }
};
