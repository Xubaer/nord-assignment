import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header', () => {
  it('should render Header component and has home and logout button', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const buttonElements = screen.getAllByRole('button')

    expect(buttonElements[1]).toHaveTextContent(/home/i)
    expect(buttonElements[2]).toHaveTextContent(/logout/i)
  })
})
