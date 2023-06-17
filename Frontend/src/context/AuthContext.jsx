/* eslint-disable no-undef */
import { createContext, useState, useContext, useEffect } from 'react'

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

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser))
    } else {
      const { token } = JSON.parse(localStorage.getItem('user'))
      console.log(token)
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
