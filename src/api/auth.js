import axios from "axios";

const authURL = "https://pure-waters-81841.herokuapp.com/api/users";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      account,
      password,
    });

return data
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

export const signup = async ({ account, name, email, password, checkPassword }) => {
  try {
    const {data}  = await axios.post(`${authURL}`, {
      account,
      name,
      email,
      password,
      checkPassword
    });

    return data
    
  } catch (error) {
    console.error("[Signup Failed]: ", error);
  }
};