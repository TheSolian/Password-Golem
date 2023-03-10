import React from "react";
import Input from "../components/Input";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpPage() {
  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    ).then((user) => {
      user.user.displayName = e.target.username.value;
      console.log(user);
    });
  }
  return (
    <div className="grid place-content-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label htmlFor="username">Username</label>
        <Input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" id="password" />
        {/* <label htmlFor="password">Password</label>
        <Input type="password" name="password-confirm" id="password-confirm" /> */}
        <button type="submit">j</button>
      </form>
    </div>
  );
}

export default SignUpPage;
