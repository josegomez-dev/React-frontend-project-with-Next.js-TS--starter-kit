import styles from '@/app/assets/styles/UserProfile.module.css'
import UnauthorizedMessage from '@/components/UnauthorizedMessage'
import { useGlobalContext } from '@/context/GlobalContext'
import Image from 'next/image'
import React, { useState } from 'react'

const UserProfile = () => {
  const { authenticated, loggedUser, setLoggedUser } = useGlobalContext()

  // Mocked user data; in a real app, this would come from an API
  const [user, setUser] = useState({
    name: loggedUser.name,
    email: loggedUser.email,
    bio: loggedUser.bio,
    role: loggedUser.role,
    status: loggedUser.status,
    profilePicture: '/blank-profile-picture.png'
  })

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState(user)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = () => {
    setUser(formData)
    setLoggedUser(
      { ...loggedUser,
        name: formData.name,
        email: formData.email,
        bio: formData.bio
      })
    setEditing(false)
    // Here, you would typically also send the updated data to a server
  }

  if (!authenticated) {
    return <UnauthorizedMessage />
  }

  return (
    <div className={styles['user-profile']}>
      <div className={styles['profile-card']}>
        <Image
          src={user.profilePicture}
          alt="Profile Picture"
          className={styles['profile-picture']}
          width={100}
          height={100}
        />
        {editing ? (
          <div className={styles['editable-fields']}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              rows={4}
            />
            <button className={styles['save-button']} onClick={handleSave}>
              Save Changes
            </button>
          </div>
        ) : (
          <div className={styles['profile-info']}>
            <h2>{user.name || 'Your Name'} ({user.status})</h2>
            <span>{user.role}</span>
            <p>{user.email}</p>
            <p>{user.bio || 'Write a small description...'}</p>
            <button className={styles['save-button']} onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile
