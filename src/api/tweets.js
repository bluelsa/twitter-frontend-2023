import axios from "axios";

const baseURL = "https://pure-waters-81841.herokuapp.com/api/tweets";

const axiosInstance = axios.create({
  baseURL: baseURL,
})

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config;
},
  (error) => {
    // Do something with request error
    console.log(error);
  });

//get觀看所有推文 api/tweets
export const getTweetsAll = async () => {
  try {
    const res = await axiosInstance.get(`${baseURL}`);
    return res.data
  } catch (error) {
    console.error("[Get getTweetsaAll failed]: ", error);
  }
};

// get觀看一篇特定推文tweets/:tweetid
export const getTweetsId = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseURL}/${id}`);
    return res.data

  } catch (error) {
    console.error("[Get getTweetsId failed]: ", error);
  }
};

// get觀看有回覆推文的推文api/tweets/id/replies
export const getTweetsReplies = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseURL}/${id}/replies`);
    return res.data

  } catch (error) {

    console.error("[Get  getTweetsReplies failed]: ", error);
  }
};

//post 新增推文 api/tweets

export const tweetCreate = async (description) => {
  try {
    const res = await axiosInstance.post(`${baseURL}`, { description })
    return res.data
  } catch (error) {
    console.error('[Create Tweet failed:', error)
  }
}

//post  回覆推文 api/tweets/id/replies

export const tweetsReplies = async ({ id, description }) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/${id}/replies`, { description })
    return res.data

  } catch (error) {
    console.error('Replies create failed:', error)
  }

}

//post 對推文按讚 api/tweets/id/like
 export const tweetsLike = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/${id}/like`)
    return res.data
  }
  catch (error) {
    console.log(`Like create failed:`)
  }
}

//post 對推文取消按讚 api/tweets/id/unlike
export const tweetsUnlike = async(id) => {
   try {
     const res = await axiosInstance.post(`${baseURL}/${id}/unlike`)
    return res.data
  }
  catch (error) {
    console.log(`Unlike create failed:`, error)
  }
}