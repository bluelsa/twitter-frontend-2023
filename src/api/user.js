import axios from "axios";

const baseURL = "https://pure-waters-81841.herokuapp.com/api/users";

export const getTweets = async () => {
  try {
    const res = await axios.get(`${baseURL}`);
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};



