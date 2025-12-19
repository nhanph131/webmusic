import './App.css'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import AppRoutes from './routes/AppRoutes'
 
function AppContent() {
  const location = useLocation()
  const hideNavbarPages = ['/login', '/signup']
  const showNavbar = !hideNavbarPages.includes(location.pathname)

  return (
    <div className="app-container">
      {showNavbar && <Navbar />}
      <AppRoutes />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
