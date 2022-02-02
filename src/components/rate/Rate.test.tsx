import React from 'react'
import { render, screen } from '@testing-library/react'
import Rate from './Rate'
import { CommandType } from '../../models/command'

test('renders learn react link', () => {
  render(<Rate command={{
    type: CommandType.Rate,
    data: '',
  }}/>)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
