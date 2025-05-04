import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import PageTitle from './PageTitle'

afterEach(() => {
  cleanup()
})

describe('PageTitle', () => {
  it('renderiza corretamente o título passado via prop', () => {
    const testTitle = 'Active Users'
    render(<PageTitle title={testTitle} />)

    const heading = screen.getByText(testTitle)
    expect(heading).not.toBeNull()
    expect(heading.tagName).toBe('H3')
  })
})