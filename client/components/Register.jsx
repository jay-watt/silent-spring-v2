import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Error,
  GridForm,
  ColOne,
  ColTwoText,
  ColTwoField,
  Button,
  RadioLabel,
  Radio,
} from './Styled'

import { addUser } from '../api'
import { updateLoggedInUser } from '../slices/user'
import { useAuth0 } from '@auth0/auth0-react'

const icons = [
  '🍇',
  '🍈',
  '🍉',
  '🍊',
  '🍋',
  '🍌',
  '🍍',
  '🥭',
  '🍎',
  '🍏',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🫐',
  '🥝',
  '🍅',
  '🥥',
]

function Register() {
  const user = useSelector((state) => state.user)
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: '',
    icon: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.username) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const userInfo = {
      auth0Id: user.auth0Id,
      email: user.email,
      ...form,
    }
    getAccessTokenSilently()
      .then((token) => addUser(userInfo, token))
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
      <h2>Complete profile set up</h2>
      {errorMsg && <Error onClick={hideError}>Error: {errorMsg}</Error>}
      <GridForm onSubmit={handleSubmit}>
        <ColOne htmlFor="username">Username:</ColOne>
        <ColTwoText
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <ColOne htmlFor="icon">
          Which fruit best represents your personality?
        </ColOne>
        <ColTwoField id="icon">
          {icons.map((fruit) => (
            <RadioLabel key={fruit} selected={form.icon === fruit}>
              <Radio
                id={fruit}
                value={fruit}
                name="icon"
                onChange={handleChange}
              />
              {fruit}
            </RadioLabel>
          ))}
        </ColTwoField>

        <Button disabled={!(form.username && form.icon)}>Save Profile</Button>
      </GridForm>
    </>
  )
}

export default Register
