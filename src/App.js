import React, { useState, useEffect } from 'react';
// Routes
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Components/Pages
import Loading from './pages/loading';
import Login from './pages/login';
import Main from './pages/app';
// Redux → User reducer/actions
import { selectUser, setUser, unsetUser } from './redux/user';
// Firebase authentication
import { auth } from './config/firebase';

function App() {
  // Loading state → If it's loading, show the page "isLoading"
  const [isLoading, setIsLoading] = useState(true);
  // User authentication
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  setTimeout(() => {
    setIsLoading(false)
  }, 2500)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // If the user is logged in
        dispatch(setUser({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        // If the user it NOT logged in
        dispatch(unsetUser())
      }
    })
  }, [dispatch])

  return (
    <Router>
      {
        user ? (
          <>
            <Redirect to="/app" />
            <Route exact path="/app" component={isLoading ? Loading : Main} />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            <Route path="/login" component={Login} />
          </>
        )
      }
    </Router>
  );
}

export default App;
