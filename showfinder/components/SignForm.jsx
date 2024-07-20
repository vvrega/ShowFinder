'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import '../styles/shows.css';
// import '../styles/sign.css';
import '../styles/formStyles.css';

export default function SignForm() {
  const router = useRouter();

  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form
          action="#"
          method="post"
          name="signUpForm"
          id="signUpForm"
          onSubmit={handleSignUp}
        >
          <h1>Create Account</h1>
          <input
            type="text"
            name="newUsername"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />
          <button type="submit" name="signUp" onSubmit={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form
          action="#"
          method="post"
          name="signInForm"
          id="signInForm"
          onSubmit={handleSignUp}
        >
          <h1>Sign in</h1>
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <a href="#">Forgot your password?</a>
          <button type="submit" name="signIn">
            Sign In
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={handleToggleForm}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleToggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
