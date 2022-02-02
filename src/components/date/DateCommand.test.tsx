import React from 'react'
import { render, screen } from '@testing-library/react'
import DateCommand from './DateCommand'

test('renders learn react link', () => {
  render(<DateCommand  />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
