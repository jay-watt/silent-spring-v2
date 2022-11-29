import React from 'react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Nav() {
  const { logout, loginWithRedirect, user, isLoading } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <nav className="bg-slate-600">
        <Link to="/">Home</Link>
        <IfAuthenticated>
          <Link to="/" onClick={handleLogoff}>
            Log off
          </Link>
          <p>
            {!isLoading && <span className="font-bold">{user?.email}</span>}
          </p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to="/" onClick={handleSignIn}>
            Sign In
          </Link>
        </IfNotAuthenticated>
      </nav>
      <h1>Fruit FTW!</h1>
    </>
  )
}

export default Nav
