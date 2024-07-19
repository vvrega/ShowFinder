'use client';

import React, { useState } from 'react';
import '../styles/formStyles.css';

export default function SignForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!firstName || !username || !password) {
      alert('All fields are required!');
    }

    try {
      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          username,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error during registration: ', error);
    }
  };

  // const handleSignUp = async (event) => {
  //   event.preventDefault();

  //   const newUsername = document.forms.signUpForm.newUsername.value;
  //   const firstName = document.forms.signUpForm.firstName.value;
  //   const newPassword = document.forms.signUpForm.newPassword.value;
  //   const confirmPassword = document.forms.signUpForm.confirmPassword.value;

  //   if (newPassword !== confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     const res = await fetch('/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: newUsername,
  //         firstName,
  //         password: newPassword,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       alert('Registration successful!');
  //       setIsSignUp(false);
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('Something went wrong');
  //   }
  // };

  // const handleSignIn = async (event) => {
  //   event.preventDefault();

  //   const username = document.forms.signInForm.username.value;
  //   const password = document.forms.signInForm.password.value;

  //   try {
  //     const res = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       localStorage.setItem('token', data.token);
  //       window.location.href = '/dashboard';
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('Something went wrong');
  //   }
  // };

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form
          action="#"
          method="post"
          name="signUpForm"
          id="signUpForm"
          // onSubmit={handleSignUp}
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
          // onSubmit={handleSignIn}
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
