import { useState, createContext } from 'react'

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  signup: null,
  login: null,
  logout: null,
}

const AuthContext = createContext(defaultAuthContext) 

const AuthProvider = ({children}) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false)
 const [payload, setPayload] = useState(null)

  const value = {
  isAuthenticated,
  currentMember: payload,
  }

  return <AuthContext.Provider value={{value}}>

  </AuthContext.Provider>
}