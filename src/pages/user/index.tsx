import styles from '@/app/assets/styles/UserIndex.module.css'
import UnauthorizedMessage from '@/components/UnauthorizedMessage'
import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'

const UserHome = () => {
  const { role, authenticated } = useGlobalContext()

  if (role !== 'user' || !authenticated) {
    return <UnauthorizedMessage />
  }

  return (
    <div className={styles['user-index']}>
      <div className={styles['welcome-message']}>
        Welcome, User!
      </div>
      <div className={styles['quick-links']}>
        <Link href="/user/profile">
          Profile
        </Link>
        <Link href="/user/settings">
          Settings
        </Link>
        <Link href="/user/activities">
          Activities
        </Link>
      </div>
      <div className={styles['dashboard']}>
        <div className={styles.card}>
          <h3>Recent Activity</h3>
          <p>No recent activity.</p>
        </div>
        <div className={styles.card}>
          <h3>Notifications</h3>
          <p>No new notifications.</p>
        </div>
        <div className={styles.card}>
          <h3>Statistics</h3>
          <p>View your usage statistics here.</p>
        </div>
      </div>
    </div>
  )
}

export default UserHome
