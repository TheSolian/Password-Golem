import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButtom from "react-google-button";
import Input from "../../components/Input";
import OAuth from "../../components/OAuth";
import { auth } from "../../firebase";

function SignInPage() {
  const provider = new GoogleAuthProvider();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="grid place-content-center min-h-full pt-32">
      <h1 className="text-3xl font-semibold text-center mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" id="password" />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-accent-500 py-2 px-3 rounded-md hover:bg-accent-600"
          >
            Sign Up
          </button>
        </div>
      </form>
      <OAuth />
    </div>
  );
}

export default SignInPage;
