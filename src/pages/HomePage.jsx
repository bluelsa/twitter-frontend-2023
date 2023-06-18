import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const HomePage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate('/home')
    }
    if (!token) {
      navigate('/login')
    }
    
  }, [navigate, token])
  
};

export default HomePage;
