import React from 'react';
// Firebase
import { auth, provider } from '../config/firebase';
// Styles
import { LoginContainer } from '../components/login';

export default function Login() {
  // Firebase job → Login using user google account
  const handleLogIn = () => {
    auth.signInWithPopup(provider).catch(err => alert(err.message))
  }

  return (
    <LoginContainer>
      <img
        src="https://discord.com/assets/4f004ac9be168ac6ee18fc442a52ab53.svg"
        alt="Discord"
      />

      <div className="form__container">
        <div className="form__content">
          <div className="form__title">Welcome back!</div>
          <div className="form__desc">We're so excited to see you again!</div>

          <div className="form__inputs_container">
            {/*<InputBox>
              <h5>Email</h5>
              <input
                type="text"
              />
            </InputBox>
            <InputBox>
              <h5>Password</h5>
              <input
                type="password"
              />
            </InputBox>*/}

            <button onClick={handleLogIn}>Login with Google</button>
          </div>
        </div>
      </div>
    </LoginContainer>
  )
}
