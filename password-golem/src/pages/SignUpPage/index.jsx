import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import OAuth from '../../components/OAuth'
import { auth, db } from '../../firebase/config'

function SignUpPage() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    ).then(async () => {
      auth.currentUser.username = e.target.username.value

      await setDoc(
        doc(db, 'users', 'userid', {
          username: e.target.username.value,
        })
      )
      navigate('/')
    })
  }

  return (
    <div className='grid place-content-center min-h-full pt-32'>
      <h1 className='text-3xl font-semibold text-center mb-4'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label htmlFor='username'>Username</label>
          <Input type='text' name='username' id='username' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Input type='password' name='password' id='password' />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-accent-500 py-2 px-3 rounded-md hover:bg-accent-600'
          >
            Sign Up
          </button>
        </div>
      </form>
      <OAuth />
    </div>
  )
}

export default SignUpPage
