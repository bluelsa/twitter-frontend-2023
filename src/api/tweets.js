import axios from "axios";

const baseURL = "http://localhost:3001/api";

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
    console.error(error);
  }
);

// Get all tweets api/tweets
export const getTweetsAll = async () => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/tweets`);
    return data;
  } catch (error) {
    console.error("[Get getTweetsAll failed]: ", error);
  }
};

// Get a specific tweet tweets/:tweetid
export const getTweet = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/tweets/${id}`);
    return data;
  } catch (error) {
    console.error("[Get getTweetId failed]: ", error);
  }
};

// Get tweet replies api/tweets/id/replies
export const getTweetReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseURL}/tweets/${id}/replies`);
    return data;
  } catch (error) {
    console.error("[Get TweetReplies failed]: ", error);
  }
};

// Create a new tweet api/tweets

export const createTweet = async ({ description }) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets`, { description });
    return data;
  } catch (error) {
    console.error("[Create Tweet failed]:", error);
  }
};

// Reply to a tweet api/tweets/id/replies

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

// Like a tweet api/tweets/id/like
export const createLike = async (tweetId) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets/${tweetId}/like`);
    return data;
  } catch (error) {
    console.error("[Create Like failed]:", error);
  }
};

// Unlike a tweet api/tweets/id/unlike
export const deleteLike = async (tweetId) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets/${tweetId}/unlike`);
    return data;
  } catch (error) {
    console.error("[Create Unlike failed]:", error);
  }
};

// Delete a tweet api/tweets/id
export const deleteTweet = async (tweetId) => {
  try {
    const { data } = await axiosInstance.delete(`${baseURL}/tweets/${tweetId}`);
    return data;
  } catch (error) {
    console.error("[Delete Tweet failed]:", error);
    throw error;
  }
};
