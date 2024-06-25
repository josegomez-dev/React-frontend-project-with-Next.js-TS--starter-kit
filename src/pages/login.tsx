import styles from '@/app/assets/styles/Auth.module.css';
import { useGlobalContext } from '@/context/GlobalContext';
import { EMPTY_USER } from '@/types/userTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LoginPage = () => {
  const { setAuthenticated, setRole, setLoggedUser } = useGlobalContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    // Perform authentication logic here (mocked)
    if (email === 'admin@example.com') {
      setRole('admin')
      router.push('/admin/dashboard')
    } else {
      setRole('user')
      router.push('/user/profile')
    }
    setLoggedUser({ ...EMPTY_USER, email })
    setAuthenticated(true)
  }

  return (
    <>
      <div className="auth-container">
        <div className="auth-form">
          <h2 className="auth-title">Login</h2>
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="auth-input" required />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="auth-input" required />
          <button type="submit" onClick={() => handleLogin()} className="auth-button">Log In</button>
          <p className="auth-link">Dont have an account? &nbsp;
            <Link href="/signup">
              Sign Up
            </Link>
          </p>
          <article className={styles['btw-text-tip']}>
            <p>
              Use admin@example.com to test <b>Admin</b> view
            </p>
            <p>
              or any other to login as a <b>User</b>.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
