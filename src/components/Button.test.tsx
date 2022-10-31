import { describe, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  const props = { text: 'btn text', onClick: vi.fn() }

  beforeEach(() => {
    render(<Button {...props} />)
  })

  it('should render Button component', () => {
    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveTextContent(props.text)
  })

  it('should call onClick when clicked', () => {
    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)
    expect(props.onClick).toHaveBeenCalled()
  })
})
