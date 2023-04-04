import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'

function Navbar() {
  const navigate = useNavigate()
  const [username, setUsername] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsername(user.displayName)
    }
  })

  function handleSignOut() {
    auth.signOut()
    setUsername(null)
    navigate('/signin')
  }

  return (
    <nav className='bg-gradient-to-tr text-primary-500 from-secondary-500 to-secondary-700 sm:px-4 md:px-12 lg:px-48 xl:px-64 py-4 dark:bg-gray-900'>
      <div className='container flex flex-wrap items-center justify-between'>
        <p className='text-lg'>PG</p>
        <div>
          <ul className='flex gap-8'>
            <li>
              <Link to={'/'} className='nav-link'>
                Vault
              </Link>
            </li>
            <li>
              <Link to={'/generator'} className='nav-link'>
                Generator
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {username !== null ? (
            <div className='cursor-pointer font-bold text-lg dropdown'>
              <span>{username}</span>
              <div className='dropdown-item'>
                <button onClick={handleSignOut}>Sign out</button>
              </div>
            </div>
          ) : (
            <Link to={'/signin'} className='nav-link'>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
