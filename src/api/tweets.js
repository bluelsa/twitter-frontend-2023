import axios from "axios";

const tweetURL = "https://pure-waters-81841.herokuapp.com/api/tweets";

export const getTweets = async () => {
  try {
    const res = await axios.get(`${tweetURL}`);
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

export const createTweets = async () => {
  try {
    const res = await axios.get(`${tweetURL}`);
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};


