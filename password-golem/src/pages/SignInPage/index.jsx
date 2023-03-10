import React from "react";
import GoogleButtom from "react-google-button";
import Input from "../../components/Input";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useAuth } from "../../contexts/AuthContext";

function SignInPage() {
  // const { signUpWithEmail } = useAuth();
  const provider = new GoogleAuthProvider();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="grid place-content-center min-h-screen">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" id="password" />
      </form>
      <div>or</div>
      <GoogleButtom
        onClick={() => {
          signInWithPopup(auth, provider);
          console.log(auth);
        }}
      />
    </div>
  );
}

export default SignInPage;
