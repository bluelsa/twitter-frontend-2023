import axios from "axios";

const baseURL = "https://pure-waters-81841.herokuapp.com/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error);
  }
);

//get觀看所有推文 api/tweets
export const getTweetsAll = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/tweets`);
    return data;
  } catch (error) {
    console.error("[Get getTweetsAll failed]: ", error);
  }
};

// get觀看一篇特定推文tweets/:tweetid
export const getTweet = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/tweets/${id}`);
    return data;
  } catch (error) {
    console.error("[Get getTweetId failed]: ", error);
  }
};

// get觀看有回覆推文的推文api/tweets/id/replies
export const getTweetReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/tweets/${id}/replies`);
    return data;
  } catch (error) {
    console.error("[Get TweetReplies failed]: ", error);
  }
};

//post 新增推文 api/tweets

export const createTweet = async ({ description }) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets`, { description });
    return data;
  } catch (error) {
    console.error("[Create Tweet failed]:", error);
  }
};

//post  回覆推文 api/tweets/id/replies

export const createReply = async ({ id, comment }) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets/${id}/replies`, {
      comment,
    });
    return data;
  } catch (error) {
    console.error("[Create Reply failed]:", error);
  }
};

//post 對推文按讚 api/tweets/id/like
export const createLike = async (tweetId) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets/${tweetId}/like`);
    return data;
  } catch (error) {
    console.log("[Create Like failed]:", error);
  }
};

//post 對推文取消按讚 api/tweets/id/unlike
export const deleteLike = async (tweetId) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets/${tweetId}/unlike`);
    return data;
  } catch (error) {
    console.log("[Create Unlike failed]:", error);
  }
};

