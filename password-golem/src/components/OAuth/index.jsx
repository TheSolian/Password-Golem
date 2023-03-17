import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { auth } from '../../firebase'

function OAuth() {
  const provider = new GoogleAuthProvider()

  return (
    <>
      <div>or</div>
      <GoogleButton
        onClick={() => {
          signInWithPopup(auth, provider)
          console.log(auth)
        }}
      />
    </>
  )
}

export default OAuth
