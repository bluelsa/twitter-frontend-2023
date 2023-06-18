import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const HomePage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    const adminToken = localStorage.getItem("adminToken")
    if (token) {
      navigate('/home')
    }
    if (!token && !adminToken) {
      navigate('/login')
    }
    if (adminToken) {
      navigate('/admin/tweets')
    }
    
  }, [navigate, token])
  
};

export default HomePage;
