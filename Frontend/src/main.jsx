import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './routing/AppRoutes'

const root = createRoot(document.getElementById('app'))
root.render(<AppRoutes />)
