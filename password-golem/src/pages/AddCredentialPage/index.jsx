import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import PasswordGenerator from '../../components/PasswordGenerator'
import { auth, db } from '../../firebase/config'

function AddCredentialPage() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  function handleAddCredential(e) {
    e.preventDefault()

    const passwordRef = collection(
      db,
      'users',
      auth.currentUser.uid,
      'passwords'
    )

    const credentialRef = addDoc(passwordRef, {
      name: e.target.name.value,
      username: e.target.username.value,
      password: e.target.password.value,
      url: e.target.url.value || '',
    })

    navigate('..')
  }

  return (
    <div className='flex justify-center items-center flex-col gap-2'>
      <h1 className='text-2xl font-bold pt-32'>Add Credential</h1>
      <form
        onSubmit={handleAddCredential}
        className='w-1/3 flex flex-col gap-6'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <Input type='text' name='name' id='name' required />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='username'>Username</label>
          <Input type='text' name='username' id='username' required />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <div className='flex gap-4'>
            <Input type='password' name='password' id='password' required />
            <button
              type='button'
              onClick={handleOpen}
              className='bg-accent-500 px-4 py-2 rounded-md hover:bg-accent-600'
            >
              Generate
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='url'>URL</label>
          <Input type='url' name='url' id='url' />
        </div>
        <div className='flex justify-end items-center gap-6'>
          <Link to='..' className='text-secondary-500 font-semibold'>
            Back
          </Link>
          <button
            type='submit'
            className='bg-accent-500 px-4 py-2 rounded-md hover:bg-accent-600'
          >
            Add
          </button>
        </div>
      </form>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <PasswordGenerator />
      </Modal>
    </div>
  )
}

export default AddCredentialPage
