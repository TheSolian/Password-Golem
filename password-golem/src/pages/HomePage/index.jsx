import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate('/signin')
    }
  }, [])

  return <div></div>
}

export default HomePage
