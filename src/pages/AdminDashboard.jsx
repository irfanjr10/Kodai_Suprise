import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../hooks/useAdminAuth.js'
import { useFirebase } from '../context/FirebaseContext.jsx'

export default function AdminDashboard() {
  const { user } = useAdminAuth()
  const { auth } = useFirebase()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setError('')
    setIsSigningOut(true)

    try {
      await signOut(auth)
      navigate('/admin/login', { replace: true })
    } catch {
      setError('Unable to sign out. Please try again.')
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <main className="admin-screen admin-dashboard-screen">
      <section className="admin-card admin-dashboard-card" aria-labelledby="admin-dashboard-title">
        <div>
          <p className="admin-eyebrow">Kodai Surprise Events</p>
          <h1 id="admin-dashboard-title">Admin dashboard</h1>
          <p className="admin-copy">Your administrator access has been verified.</p>
          {user?.email && <p className="admin-user-email">{user.email}</p>}
        </div>

        {error && <p className="admin-error" role="alert">{error}</p>}

        <button
          className="admin-button admin-button-secondary"
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
        >
          {isSigningOut ? 'Signing out…' : 'Sign out'}
        </button>
      </section>
    </main>
  )
}
