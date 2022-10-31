import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from './MainLayout'

describe('MainLayout', () => {
  it('should render with children', () => {
    render(
      <BrowserRouter>
        <MainLayout>
          <h2>Hello</h2>
        </MainLayout>
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Hello')
  })
})
