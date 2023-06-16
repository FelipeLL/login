import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../modules/dashboard/Dashboard'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate to='/dashboard' />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}
