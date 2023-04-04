import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import GithubButton from 'react-github-login-button'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'

function OAuth() {
  const navigate = useNavigate()
  const googleAuthProvider = new GoogleAuthProvider()
  const githubAuthProvider = new GithubAuthProvider()

  async function handleSignInWithGoogle() {
    try {
      await signInWithPopup(auth, googleAuthProvider)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSignInWithGitHub() {
    try {
      await signInWithPopup(auth, githubAuthProvider)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='text-center pt-2 font-bold mb-4'>or</div>
      <GoogleButton onClick={handleSignInWithGoogle} />
      <GithubButton className='mt-3' onClick={handleSignInWithGitHub} />
    </>
  )
}

export default OAuth
