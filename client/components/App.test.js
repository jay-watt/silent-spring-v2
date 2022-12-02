import React from 'react'
import { screen, render } from '@testing-library/react'
import App from './App'

test('App div should contain handleStart function', async () => {
  render(<App />)

  const appDiv = await screen.getByRole('div')

  expect(appDiv).toContain('handleStart')
})
