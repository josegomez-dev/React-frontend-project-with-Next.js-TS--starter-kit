// pages/signup.tsx
import { useGlobalContext } from '@/context/GlobalContext'
import { EMPTY_USER } from '@/types/userTypes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SignUp = () => {
  const { setAuthenticated, setRole, setLoggedUser } = useGlobalContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = () => {
    // Perform signup logic here (mocked)
    setRole('user')
    setAuthenticated(true)
    setLoggedUser({ ...EMPTY_USER, name, email })
    router.push('/onboarding')
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="auth-title">Sign Up</h2>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" className="auth-input" required />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="auth-input" required />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="auth-input" required />
        <button type="submit" onClick={() => handleSignUp()} className="auth-button">Sign Up</button>
        <p className="auth-link">Already have an account? &nbsp;
          <Link href="/login">
            Login
          </Link>
        </p>
        </div>
    </div>
  )
}

export default SignUp
