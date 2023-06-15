import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from '../App'
import { Login } from '../components/Login'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
