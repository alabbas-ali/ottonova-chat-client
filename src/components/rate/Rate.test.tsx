import React from 'react'
import { render, screen } from '@testing-library/react'
import Rate from './Rate'

test('renders learn react link', () => {
  render(<Rate />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
