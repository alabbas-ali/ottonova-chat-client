import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './Login'

test('renders learn react link', () => {
  render(<Login setToken={() => console.log('')}/>)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
