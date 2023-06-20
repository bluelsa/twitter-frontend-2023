import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth
  const navigate = useNavigate()

  useEffect(()=> {
    if (isAuthenticated) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  },[navigate, isAuthenticated])
};

export default HomePage;
