import { createContext, useContext } from 'react'

export const FirebaseContext = createContext(null)

export function useFirebase() {
  const services = useContext(FirebaseContext)

  if (services === null) {
    throw new Error('useFirebase must be used within FirebaseContext.Provider')
  }

  return services
}
