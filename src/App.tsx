import { useState, useEffect } from 'react'
// Routes
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// Redux
// Components/Pages
import { auth } from './config/firebase'
import Main from './pages/app'
import Loading from './pages/loading'
import Login from './pages/login'
// Redux → User reducer/actions
import { selectUser, setUser, unsetUser } from './redux/user'
// Firebase authentication

const App = () => {
  const [authLoading, setAuthLoading] = useState(true)
  const [showLoading, setShowLoading] = useState(true)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(setUser({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(unsetUser())
      }
      setAuthLoading(false)
    })

    return () => unsubscribe()
  }, [dispatch])

  useEffect(() => {
    if (!authLoading) {
      const timer = setTimeout(() => setShowLoading(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [authLoading])

  if (authLoading) {
    return <Loading />
  }

  return (
    <Router>
      <Route exact path="/">
        <Redirect to={user ? "/app" : "/login"} />
      </Route>
      <Route exact path="/app">
        {user ? (showLoading ? <Loading /> : <Main />) : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/app" /> : <Login />}
      </Route>
    </Router>
  )
}

export default App
