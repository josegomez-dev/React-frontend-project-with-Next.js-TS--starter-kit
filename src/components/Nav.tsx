import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useGlobalContext } from '@/context/GlobalContext'
import styles from '@/app/assets/styles/Nav.module.css'
import { EMPTY_USER } from '@/types/userTypes'
import { FaSignOutAlt } from 'react-icons/fa'

export default function Nav() {
  const { role, authenticated, setAuthenticated, setRole, loggedUser, setLoggedUser } = useGlobalContext()
  const router = useRouter()

  const handleLogout = () => {
    setAuthenticated(false)
    setRole('user') // Reset the role to default
    setLoggedUser(EMPTY_USER)
    router.push('/')
  }

  return (
    <nav className={`${styles.navbar} bg-gray-800 text-white`}>
      <div className="flex items-center">
        <Link href="/" onClick={() => router.push('/')}>
          <div className="logo-container">
            <Image
              style={{ filter: 'invert(1) drop-shadow(0 0 0.3rem #ffffff70)' }}
              src="/banner-logo.png"
              alt="Catarsis Musical Logo"
              width={35}
              height={35}
              priority
            />
          </div>
        </Link>
      </div>
      <ul className={`${styles['nav-list']} flex-row-reverse`}>
        {authenticated && (
          <li>
            <Image
              style={{ filter: 'invert(1) drop-shadow(0 0 0.3rem #ffffff70)' }}
              src="/blank-profile-picture.png"
              alt="Catarsis Musical Logo"
              width={35}
              height={35}
              priority
            />
            &nbsp;
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              <FaSignOutAlt />
            </button>
          </li>
        )}
        {!authenticated ? (
          <>
            <li className={styles['nav-link']}>
              <Link href="/login">Login</Link>
            </li>
            <li className={styles['nav-link']}>
              <Link href="/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            {role === 'admin' && (
              <>
                <li className={styles['nav-link']}>
                  <Link href="/admin">Admin Home</Link>
                </li>
                <li className={styles['nav-link']}>
                  <Link href="/admin/dashboard">Admin Dashboard</Link>
                </li>
              </>
            )}
            {role === 'user' && (
              <>
                <li className={styles['nav-link']}>
                  <Link href="/user">User Home</Link>
                </li>
                <li className={styles['nav-link']}>
                  <Link href="/user/profile">User Profile</Link>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </nav>
  )
}
