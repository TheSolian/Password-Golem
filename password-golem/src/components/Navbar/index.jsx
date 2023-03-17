import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gradient-to-tr text-primary-500 from-secondary-500 to-secondary-700 sm:px-4 md:px-12 lg:px-48 xl:px-64 py-4 dark:bg-gray-900'>
      <div className='container flex flex-wrap items-center justify-between'>
        <p className='text-lg'>PG</p>
        <div>
          <ul className='flex gap-8'>
            <li>
              <Link to={'/vault'} className='nav-link'>
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
          <p>Profile</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
