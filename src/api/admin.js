import axios from "axios";

const adminURL = "https://pure-waters-81841.herokuapp.com/api/admin";

export const adminlogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${adminURL}/users`, {
      account,
      password,
    });
    // console.log(data)
        return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${adminURL}/users`);
    return res.data;
  } catch (error) {
    console.error('[Get Users failed]: ', error);
  }
};

export const getTweets = async () => {
  try {
    const res = await axios.get(`${adminURL}/tweets`);
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

export const deleteTweets = async (id) => {
  try {
    const res = await axios.get(`${adminURL}/tweets/${id}`);
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};