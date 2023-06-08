import axios from "axios";

const authURL = "{{localhost}}/api";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      account,
      password,
    });
    console.log(data.data)

    const { status } = data

    if (status === 'success') {
      return {status, ...data}
    }
    
    return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};