import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

const NavGroup = styled.nav`
  float: right;
`

const NavLink = styled(Link)`
  margin-right: 30px;
`

function Nav() {
  const user = useSelector((state) => state.user)

  const { logout, loginWithRedirect } = useAuth0()
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
      <NavGroup>
        <NavLink to="/">Home</NavLink>
        <IfAuthenticated>
          <NavLink to="/" onClick={handleLogoff}>
            Log off
          </NavLink>
          <p>
            <span role="img" alt={user?.icon}>
              {user?.icon}
            </span>
            {' ' + user.username}
          </p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavLink to="/" onClick={handleSignIn}>
            Sign In
          </NavLink>
        </IfNotAuthenticated>
      </NavGroup>
      <h1>Fruit FTW!</h1>
    </>
  )
}

export default Nav
