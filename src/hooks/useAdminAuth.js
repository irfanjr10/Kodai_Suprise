import { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuthContext.jsx'

export function useAdminAuth() {
  const status = useContext(AdminAuthContext)

  if (status === null) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }

  return status
}
