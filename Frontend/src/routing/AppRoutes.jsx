/* eslint-disable multiline-ternary */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { App } from '../App'
import { Login } from '../components/Login'
import { SignUp } from '../components/SignUp'
import { useAuth } from '../context/AuthContext'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRoutes = () => {
  const { currentUser } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route index element={<Login />} />
              <Route path='/*' element={<Navigate to='/' />} />
              <Route path='/signup' element={<SignUp />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
