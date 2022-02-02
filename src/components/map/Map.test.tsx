import React from 'react'
import { render, screen } from '@testing-library/react'
import Map from './Map'
import { CommandType } from '../../models/command'

test('renders learn react link', () => {
  render(<Map command={{
    type: CommandType.Map,
    data: '',
  }}/>)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
