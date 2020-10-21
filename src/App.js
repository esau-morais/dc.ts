import React, { useState } from 'react';
// Components/Pages
import Loading from './pages/loading';
import Main from './pages/app';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 2500)

  return (
    <>
      { isLoading ? <Loading /> : <Main />}
    </>
  );
}

export default App;
