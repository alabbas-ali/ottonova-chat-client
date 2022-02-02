import React from 'react'
import { render, screen } from '@testing-library/react'
import DateCommand from './DateCommand'
import { CommandType } from '../../models/command'

test('renders learn react link', () => {
  render(<DateCommand command={{
    type: CommandType.Date,
    data: '',
  }}/>)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
