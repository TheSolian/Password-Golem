import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import Input from '../../components/Input'
import OAuth from '../../components/OAuth'
import { auth } from '../../firebase'

function SignUpPage() {
  function handleSubmit(e) {
    e.preventDefault()

    console.log('Test')

    createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    ).then(() => {
      auth.currentUser.username = e.target.username.value
      console.log(auth.currentUser)
    })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Sign Up</button>
      </form>
      <OAuth />
    </div>
  )
}

export default SignUpPage
