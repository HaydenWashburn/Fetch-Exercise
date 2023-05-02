import React from 'react';
import { useState } from 'react';
import LoginForm from './Pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, you are now logged in!</p>
      ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
