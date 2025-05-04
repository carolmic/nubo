import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import TableComponent from './TableComponent'

afterEach(() => {
    cleanup()
})

describe('TableComponent', () => {
  const mockColumns = ['Nome', 'Idade', 'Cidade']
  const mockContent = [
    { Nome: 'John Doe', Idade: 25, Email: 'example@email.com' },
    { Nome: 'Jane Doe', Idade: 30, Email: 'example@email.com' },
  ]

  it('renderiza os cabeçalhos corretamente', () => {
    render(<TableComponent columnNames={mockColumns} content={mockContent} />)

    mockColumns.forEach((column) => {
      expect(screen.getByText(column)).not.toBeNull()
    })
  })

  it('renderiza todas as células da tabela', () => {
    render(<TableComponent columnNames={mockColumns} content={mockContent} />)

    mockContent.forEach((row) => {
      Object.values(row).forEach((cellValue) => {
        expect(screen.getAllByText(String(cellValue))).not.toBeNull()
      })
    })
  })
})
