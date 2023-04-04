import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Modal from '../../components/Modal'
import { db } from '../../firebase/config'

function Credential({ credential }) {
  const [isOpen, setIsOpen] = useState(false)

  async function deleteCredential() {
    const passwordRef = doc(
      collection(db, 'users', credential.id, 'passwords'),
      credential.id
    )

    try {
      await deleteDoc(passwordRef)
      toast.success('Credential deleted successfully')
      setIsOpen(false)
    } catch (error) {
      toast.error('Error deleting credential')
    }
  }

  return (
    <div className='flex flex-row mb-8 bg-gradient-to-tr text-primary-500 from-secondary-500 to-secondary-700 text-xl py-5 px-5 justify-between rounded-lg'>
      <p className='my-auto ml-4'>{credential.name}</p>
      <button onClick={() => setIsOpen(true)}>
        <div className='bg-accent-400 py-1.5 px-2 rounded-full hover:bg-accent-600 cursor-pointer'>
          <FontAwesomeIcon className='text-secondary-600' icon={faEye} />
        </div>
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type='credential'
        deleteCredential={deleteCredential}
      >
        <div className='grid px-6 pt-6 grid-cols-2 gap-4'>
          <div>
            <p className='text-sm font-bold'>Name</p>
            <p>{credential.name}</p>
          </div>
          <div>
            <p className='text-sm font-bold'>URL</p>
            <a
              className='text-secondary-500 border-b-2 border-secondary-500'
              href={credential.url}
            >
              {credential.url}
            </a>
          </div>
          <div>
            <p className='text-sm font-bold'>Username</p>
            <p>{credential.username}</p>
          </div>
          <div>
            <p className='text-sm font-bold'>Password</p>
            <p>{credential.password}</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Credential
