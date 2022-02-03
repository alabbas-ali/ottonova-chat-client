import React from 'react'
import { render, screen } from '@testing-library/react'
import Complete from './Complete'
import { CommandType } from '../../models/command'

test('renders learn react link', () => {
  render(<Complete command={{
    type: CommandType.Complete,
    data: '',
  }} onResponce={(t: string) => console.log(t)}/>)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
