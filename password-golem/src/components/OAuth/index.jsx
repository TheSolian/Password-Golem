import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import GithubButton from 'react-github-login-button'
import GoogleButton from 'react-google-button'
import { auth } from '../../firebase/config'

function OAuth() {
  const googleAuthProvider = new GoogleAuthProvider()
  const githubAuthProvider = new GithubAuthProvider()

  return (
    <>
      <div className='text-center pt-2 font-bold mb-4'>or</div>
      <GoogleButton
        onClick={() => {
          signInWithPopup(auth, googleAuthProvider)
          console.log(auth)
        }}
      />
      <GithubButton
        className='mt-3'
        onClick={() => {
          signInWithPopup(auth, githubAuthProvider)
          console.log(auth)
        }}
      />
    </>
  )
}

export default OAuth
