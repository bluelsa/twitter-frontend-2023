import axios from "axios";

const adminURL = "https://pure-waters-81841.herokuapp.com/api/admin";

export const adminlogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${adminURL}/users`, {
      account,
      password,
    });

        return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};


export const getUsers = async (token) => {
  try {
    const { data } = await axios.get(`${adminURL}/users`, {
      headers: {
        Authorization: "Bearer " + token
      },
    });
    return data;
  } catch (error) {
    console.error('[Get Users failed]: ', error);
  }
};

export const getTweets = async (token) => {
  try {
    const { data } = await axios.get(`${adminURL}/tweets`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

export const deleteTweets = async (id, token) => {
  try {
    const { data } = await axios.delete(`${adminURL}/tweets/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};

