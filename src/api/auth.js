import axios from "axios";

const authURL = "https://pure-waters-81841.herokuapp.com/api";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      account,
      password,
    });
// console.log(data)

return data
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

export const signup = async ({ account, name, email, password, checkPassword }) => {
  try {
    const {data}  = await axios.post(`${authURL}/signup`, {
      account,
      name,
      email,
      password,
      checkPassword
    });
    console.log(data)
    
    //  const { status } = data
    //  return { status }

    return data
    
  } catch (error) {
    console.error("[Signup Failed]: ", error);
  }
};