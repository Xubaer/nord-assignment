import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

describe('App', () => {
  it('should render App with Landing page', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Welcome to the Shark website'
    )
  })

  it('should go to login page when click on get started button', async () => {
    render(<App />)

    const getStartedBtn = screen.getByRole('button', { name: /get started/i })
    await fireEvent.click(getStartedBtn)

    const loginHeading = await screen.findByRole('heading', { level: 1 })
    expect(loginHeading).toHaveTextContent('Login')
  })
})
