import axios from "axios";

const adminURL = "https://pure-waters-81841.herokuapp.com/api/admin/users";

export const adminlogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${adminURL}`, {
      account,
      password,
    });
    console.log(data)
    
    // const {token} = data.data
    // if (token) {
    //   return {token}
    // }
        // const { status } = data
        // const { token } = data.data
        // console.log(token)
        // if (token) {
        //   return { ...data };
        // }
        return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};
