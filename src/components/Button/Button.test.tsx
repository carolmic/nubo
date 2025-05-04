import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import ButtonComponent from './Button'

describe('ButtonComponent', () => {
  afterEach(() => cleanup())

  it('renders with default props', () => {
    render(<ButtonComponent type='button' text="Click me" />)

    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).not.toBeNull()
    expect(button.getAttribute('type')).toBe('button')
  })

  it('applies the correct type attribute', () => {
    render(<ButtonComponent text="Submit" type="submit" />)

    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button.getAttribute('type')).toBe('submit')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<ButtonComponent text="Clickable" onClick={handleClick} />)

    const button = screen.getByRole('button', { name: 'Clickable' })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
