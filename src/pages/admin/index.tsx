import styles from '@/app/assets/styles/AdminIndex.module.css'
import UnauthorizedMessage from '@/components/UnauthorizedMessage'
import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'

const AdminHome = () => {
  const { role, authenticated } = useGlobalContext()

  if (role !== 'admin' || !authenticated) {
    return <UnauthorizedMessage />
  }

  return (
    <div className={styles['admin-index']}>
      <div className={styles['welcome-message']}>
        Welcome, Admin!
      </div>
      <div className={styles['quick-links']}>
        <Link href="/admin/dashboard">
          Dashboard
        </Link>
        <Link href="/admin/users">
          Manage Users
        </Link>
        <Link href="/admin/settings">
          Settings
        </Link>
      </div>
      <div className={styles['dashboard']}>
        <div className={styles.card}>
          <h3>Site Statistics</h3>
          <p>View detailed statistics about your site.</p>
        </div>
        <div className={styles.card}>
          <h3>Recent Admin Actions</h3>
          <p>No recent actions.</p>
        </div>
        <div className={styles.card}>
          <h3>Pending Tasks</h3>
          <p>Manage your pending tasks here.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
