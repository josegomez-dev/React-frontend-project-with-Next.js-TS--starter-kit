import styles from '@/app/assets/styles/AdminDashboard.module.css'
import UnauthorizedMessage from '@/components/UnauthorizedMessage'
import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'

export default function AdminDashboard() {
  const { role, authenticated } = useGlobalContext()

  if (role !== 'admin' || !authenticated) {
    // Redirect to login if not admin or not authenticated
    return <UnauthorizedMessage />
  }

  return (
    <div className={styles['admin-dashboard']}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2>Admin Dashboard</h2>
        <nav>
          <Link href="/admin/dashboard">
            Dashboard Home
          </Link>
          <Link href="/admin/users">
            Manage Users
          </Link>
          <Link href="/admin/settings">
            Settings
          </Link>
        </nav>
      </div>
      {/* Main Content */}
      <div className={styles['main-content']}>
        <h1 className={styles.header}>Welcome, Admin!</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Card 1</h3>
            <p>Some information or metrics.</p>
          </div>
          <div className={styles.card}>
            <h3>Card 2</h3>
            <p>Some information or metrics.</p>
          </div>
          <div className={styles.card}>
            <h3>Card 3</h3>
            <p>Some information or metrics.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
