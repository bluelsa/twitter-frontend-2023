import axios from "axios";

const userURL = "https://evening-dawn-69645.herokuapp.com/api";

export const login = async (payload) => {
  const { account, password } = payload
  try {
    const res = await axios.post(`${userURL}/login`, {
      account,
      password,
    })
    console.log(res)
    return res
  } catch (error) {
    console.error('[User Login Failed]: ', error)
    return error
  }
};