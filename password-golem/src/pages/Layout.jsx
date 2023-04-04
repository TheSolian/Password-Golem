import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout({ username, setUsername }) {
  return (
    <div>
      <Navbar username={username} setUsername={setUsername} />
      <Outlet />
    </div>
  )
}

export default Layout
