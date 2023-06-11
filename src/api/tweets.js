import axios from "axios";

const baseURL = "https://pure-waters-81841.herokuapp.com/api/tweets";

export const getTweetsAll = async () => {
  try {
    const res = await axios.get(`${baseURL}`);
    return res.data
  } catch (error) {
    console.error("[Get getTweetsaAll failed]: ", error);
  }
};

export const getTweetsId = async () => {
  try {
    const res = await axios.get(`${baseURL}/twweetId`);
    return res.data

  } catch (error) {
    console.error("[Get getTweetsId failed]: ", error);
  }
};


export const getTweetsReplies = async () => {
  try {
    const res = await axios.get(`${baseURL}/twweetId/replies`);
    return res.data

  } catch (error) { 

    console.error("[Get  getTweetsReplies failed]: ", error);
  }
};
 