import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButtom from 'react-google-button'
import Input from '../../components/Input'
import OAuth from '../../components/OAuth'
import { auth } from '../../firebase'

function SignInPage() {
  const provider = new GoogleAuthProvider()

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='grid place-content-center min-h-screen'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <Input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Input type='password' name='password' id='password' />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <OAuth />
    </div>
  )
}

export default SignInPage