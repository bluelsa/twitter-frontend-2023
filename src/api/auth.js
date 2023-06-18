import axios from "axios";

const authURL = "https://pure-waters-81841.herokuapp.com/api/users";

const axiosInstance = axios.create({
  baseUrl: authURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export const login = async ({ account, password }) => {
  try {
    const { data } = await axiosInstance.post(`${authURL}/login`, {
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
    const {data}  = await axiosInstance.post(`${authURL}`, {
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