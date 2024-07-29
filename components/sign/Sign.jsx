'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import style from './sign.module.css';

export default function SignForm() {
  const router = useRouter();

  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className={style.formWrapper}>
      <p>* use random data to sign-in</p>
      <div
        className={`${style.container} ${
          isSignUp ? style.rightPanelActive : ''
        }`}
      >
        <div className={`${style.formContainer} ${style.signUpContainer}`}>
          <form
            action="#"
            method="post"
            name="signUpForm"
            id="signUpForm"
            onSubmit={handleSignUp}
            className={style.form}
          >
            <h1 className={style.h1}>Create Account</h1>
            <input
              type="text"
              name="newUsername"
              placeholder="Username"
              required
              className={style.input}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className={style.input}
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Password"
              required
              className={style.input}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              className={style.input}
            />
            <button
              type="submit"
              name="signUp"
              onSubmit={handleSignUp}
              className={style.button}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className={`${style.formContainer} ${style.signInContainer}`}>
          <form
            action="#"
            method="post"
            name="signInForm"
            id="signInForm"
            onSubmit={handleSignUp}
            className={style.form}
          >
            <h1 className={style.h1}>Sign in</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className={style.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className={style.input}
            />
            <a href="#" className={style.a}>
              Forgot your password?
            </a>
            <button type="submit" name="signIn" className={style.button}>
              Sign In
            </button>
          </form>
        </div>
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            <div className={`${style.overlayPanel} ${style.overlayLeft}`}>
              <h1 className={style.h1}>Welcome Back!</h1>
              <p className={style.p}>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={`${style.ghost} ${style.button}`}
                onClick={handleToggleForm}
              >
                Sign In
              </button>
            </div>
            <div className={`${style.overlayPanel} ${style.overlayRight}`}>
              <h1 className={style.h1}>Hello, Friend!</h1>
              <p className={style.p}>
                Enter your personal details and start your journey with us
              </p>
              <button
                className={`${style.ghost} ${style.button}`}
                onClick={handleToggleForm}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
