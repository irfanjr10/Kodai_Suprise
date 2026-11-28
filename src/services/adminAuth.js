import { getIdTokenResult } from 'firebase/auth'

export async function hasAdminClaim(user) {
  const tokenResult = await getIdTokenResult(user, true)
  return tokenResult.claims.admin === true
}
