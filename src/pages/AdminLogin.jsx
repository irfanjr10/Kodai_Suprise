import { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { hasAdminClaim } from '../services/adminAuth.js'
import { useFirebase } from '../context/FirebaseContext.jsx'

const signInErrors = {
  'auth/invalid-email': 'Enter a valid email address.',
  'auth/invalid-credential': 'The email or password is incorrect.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
  'auth/network-request-failed': 'Network error. Check your connection and try again.',
}

export default function AdminLogin() {
  const { auth } = useFirebase()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const normalizedEmail = email.trim()
    if (!normalizedEmail) {
      setError('Enter your email address.')
      return
    }

    if (!event.currentTarget.elements.email.checkValidity()) {
      setError('Enter a valid email address.')
      return
    }

    if (!password) {
      setError('Enter your password.')
      return
    }

    setIsSubmitting(true)

    try {
      const credential = await signInWithEmailAndPassword(auth, normalizedEmail, password)
      const isAdmin = await hasAdminClaim(credential.user)

      if (!isAdmin) {
        await signOut(auth)
        setError('This account does not have admin permission.')
        return
      }

      navigate('/admin', { replace: true })
    } catch (signInError) {
      setError(
        signInErrors[signInError.code] ||
          'Unable to sign in. Please check your details and try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="admin-screen">
      <section className="admin-card admin-login-card" aria-labelledby="admin-login-title">
        <Link className="admin-back-link" to="/" aria-label="Return to the public website">
          <span aria-hidden="true">←</span> Back to website
        </Link>

        <div className="admin-brand-mark" aria-hidden="true">K</div>
        <p className="admin-eyebrow">Kodai Surprise Events</p>
        <h1 id="admin-login-title">Admin sign in</h1>
        <p className="admin-copy">Sign in with your authorized administrator account.</p>

        <form className="admin-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="admin-email">Email address</label>
          <input
            id="admin-email"
            name="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={isSubmitting}
          />

          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            disabled={isSubmitting}
          />

          {error && <p className="admin-error" role="alert">{error}</p>}

          <button className="admin-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="admin-spinner admin-spinner-light" aria-hidden="true" />
                Signing in…
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        <p className="admin-security-note">
          Access is limited to accounts with verified administrator permission.
        </p>
      </section>
    </main>
  )
}
