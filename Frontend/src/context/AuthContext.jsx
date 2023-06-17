/* eslint-disable no-undef */
import { createContext, useState, useContext, useEffect } from 'react'
import { verifyToken } from '../utils/auth.api'

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

  const handleTokenVerification = async () => {
    try {
      const user = localStorage.getItem('user')
      if (user) {
        const { token } = JSON.parse(user)
        const response = await verifyToken(token)
        if (response && response !== currentUser) {
          setCurrentUser(response)
        }
      }
    } catch (error) {
      console.log('Error during token verification:', error)
    }
  }

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser))
    } else {
      handleTokenVerification()
    }
  }, [currentUser])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
