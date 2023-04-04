import { collection, doc, getDoc, getDocs } from '@firebase/firestore'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import { auth, db } from '../../firebase/config'
import Credential from './Credential'

function VaultPage() {
  const [credentials, setCredentials] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.currentUser === null) {
      return navigate('/signin')
    }

    const userRef = collection(db, 'users', auth.currentUser.uid, 'passwords')

    setCredentials([])

    getDocs(userRef).then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data().name === undefined) return
        setCredentials((prev) => [
          ...prev,
          {
            id: doc.id,
            ...doc.data(),
          },
        ])
      })
    })
  }, [])

  return (
    <>
      <div className='fixed top-8'>
        <Toaster />
      </div>
      <div className='max-w-xl mx-auto '>
        <div className='flex flex-row place-content-center py-32 justify-between'>
          <h1 className='text-3xl py-1.5 mx-8 font-black'>Your Vault</h1>
          <Link
            to='/credentials/add'
            className='text-2xl bg-accent-500 px-4 py-2 rounded-md hover:bg-accent-600'
          >
            <FontAwesomeIcon icon={faPlus} />
            New Entry
          </Link>
        </div>
        <div>
          {credentials.length > 0 ? (
            credentials.map((credential, index) => {
              return <Credential key={index} credential={credential} />
            })
          ) : (
            <p className='text-center text-2xl'>No credentials found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default VaultPage
