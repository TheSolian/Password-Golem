import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";
import { auth } from "../../firebase";

function OAuth() {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  return (
    <>
      <div className="pt-2">or</div>
      <GoogleButton
        onClick={() => {
          signInWithPopup(auth, googleAuthProvider);
          console.log(auth);
        }}
      />
      <GithubButton
        className="mt-3"
        onClick={() => {
          signInWithPopup(auth, githubAuthProvider);
          console.log(auth);
        }}
      />
    </>
  );
}

export default OAuth;
