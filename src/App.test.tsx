import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { WrappedApp, App } from './App'

describe('App', () => {
  it('Renders App component', () => {
    render(<WrappedApp />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Sign in to your account'
    )
  })

  it('Renders not found on invalid urls', () => {
    render(
      <MemoryRouter initialEntries={['/should-not-work']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not Found'
    )
  })
})
