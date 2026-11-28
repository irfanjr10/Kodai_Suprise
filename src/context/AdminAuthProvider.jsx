import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Navigate, Outlet } from 'react-router-dom'
import { useFirebase } from './FirebaseContext.jsx'
import { AdminAuthContext } from './AdminAuthContext.jsx'
import { hasAdminClaim } from '../services/adminAuth.js'
import { useAdminAuth } from '../hooks/useAdminAuth.js'

export function AdminAuthProvider({ children }) {
  const { auth } = useFirebase()
  const [status, setStatus] = useState({
    user: null,
    isAdmin: false,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let active = true
    let requestId = 0

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const currentRequestId = ++requestId

      if (!user) {
        setStatus({ user: null, isAdmin: false, loading: false, error: null })
        return
      }

      setStatus({ user, isAdmin: false, loading: true, error: null })

      try {
        const isAdmin = await hasAdminClaim(user)

        if (active && currentRequestId === requestId) {
          setStatus({ user, isAdmin, loading: false, error: null })
        }
      } catch {
        if (active && currentRequestId === requestId) {
          setStatus({
            user,
            isAdmin: false,
            loading: false,
            error: 'Unable to verify admin access. Please try again.',
          })
        }
      }
    })

    return () => {
      active = false
      unsubscribe()
    }
  }, [auth])

  return (
    <AdminAuthContext.Provider value={status}>
      {children}
    </AdminAuthContext.Provider>
  )
}

function AdminAccessDenied({ message }) {
  const { auth } = useFirebase()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [signOutError, setSignOutError] = useState('')

  const handleSignOut = async () => {
    setIsSigningOut(true)
    setSignOutError('')

    try {
      await signOut(auth)
    } catch {
      setSignOutError('Unable to sign out. Please try again.')
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <main className="admin-screen">
      <section className="admin-card admin-message-card" aria-labelledby="admin-denied-title">
        <p className="admin-eyebrow">Restricted area</p>
        <h1 id="admin-denied-title">Admin access required</h1>
        <p className="admin-copy">
          {message || 'This account does not have permission to view the admin dashboard.'}
        </p>
        {signOutError && <p className="admin-error" role="alert">{signOutError}</p>}
        <button
          className="admin-button"
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

export function RequireAdmin() {
  const { user, isAdmin, loading, error } = useAdminAuth()

  if (loading) {
    return (
      <main className="admin-screen" aria-live="polite">
        <div className="admin-loading">
          <span className="admin-spinner" aria-hidden="true" />
          <p>Verifying admin access…</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  if (error || !isAdmin) {
    return <AdminAccessDenied message={error} />
  }

  return <Outlet />
}
