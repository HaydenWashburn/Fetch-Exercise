import { useState } from 'react';

interface LoginFormProps {
  onSuccess: () => void;
}

function LoginForm({ onSuccess }: LoginFormProps) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email }),
      credentials: 'include'
    })
      .then(response => {
        if (response.ok) {
          onSuccess();
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .catch(error => setError(error.message));
  }

  return ( 
    <div className='form-container'>
    <form  onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input type="username" id="username" value={username} onChange={event => setUserName(event.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
      <button type="submit">Log In</button>
        <div>
        {error && <div>{error}</div>}
        </div>
    </form>
    </div>
  );
}

export default LoginForm;

