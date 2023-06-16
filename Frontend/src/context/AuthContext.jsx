import { createContext, useState, useContext } from 'react'
import { registerUser } from '../utils/auth.api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const signup = async user => {
    const newUser = await registerUser(user)
    setCurrentUser(newUser)
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
