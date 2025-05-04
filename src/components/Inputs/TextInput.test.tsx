import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import TextInput from './TextInput'

describe('TextInput', () => {
  afterEach(() => cleanup())

  it('renders the input with the correct label', () => {
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.getByText('Test Label')).not.toBeNull()
  })

  it('shows required label if required prop is true', () => {
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        required
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.getByText('Test Label (required)')).not.toBeNull()
  })

  it('does not show required label if required prop is false', () => {
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.queryByText('Test Label (required)')).toBeNull()
  })

  it('displays the placeholder text', () => {
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.getByPlaceholderText('Enter text')).not.toBeNull()
  })

  it('handles value and onChange correctly', () => {
    const handleChange = vi.fn()
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        value="initial value"
        onChange={handleChange}
      />
    )
    const input = screen.getByPlaceholderText('Enter text') as HTMLInputElement
    expect(input.value).toBe('initial value')

    fireEvent.change(input, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('shows error message when isInvalid is true', () => {
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        isInvalid
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.getByText('This field is required')).not.toBeNull()
  })

  it('hides error message when isInvalid is false', () => {
    render(
      <TextInput
        label="Test Label"
        id="test-input"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.queryByText('This field is required')?.classList).toContain('invisible')
  })
})
