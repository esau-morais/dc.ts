// Firebase
import { LoginContainer } from '../components/login'
import { auth, provider } from '../config/firebase'
// Styles

const Login = () => {
  // Firebase job → Login using user google account
  const handleLogIn = () => {
    auth.signInWithPopup(provider).catch(err => alert(err.message))
  }

  return (
    <LoginContainer>
      <div className="form__container">
        <div className="form__content">
          <div className="form__title">Welcome back!</div>
          <div className="form__desc">We&apos;re so excited to see you again!</div>

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

export default Login
