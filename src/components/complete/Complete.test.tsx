import React from 'react'
import { render, screen } from '@testing-library/react'
import Complete from './Complete'

test('renders learn react link', () => {
  render(<Complete  />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
