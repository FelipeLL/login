import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './routing/AppRoutes'
import { AuthProvider } from './context/AuthContext'

const root = createRoot(document.getElementById('app'))
root.render(
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
)
