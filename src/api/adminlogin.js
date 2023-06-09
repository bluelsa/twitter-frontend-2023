import axios from "axios";

const adminURL = "https://pure-waters-81841.herokuapp.com/api/admin/users";

export const adminlogin = async ({ account, password }) => {
  try {
    const { data }  = await axios.post(`${adminURL}`, {
      account,
      password,
    });

    const { token } = data.data;
    const { status } = data;
    if (token) {
    return { token, status }}
    return data
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};
