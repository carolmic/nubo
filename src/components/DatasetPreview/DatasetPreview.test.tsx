import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import DatasetPreview from './DatasetPreview'

afterEach(() => {
    cleanup()
})

describe('DatasetPreview', () => {
  const mockColumns = ["Velocity", "Time", "Weather", "Light", "Salt", "Pepper", "Soccer"]
  const mockContent = [
    { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" },
    { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" },
    { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" },
    { velocity: "Velocity", time: "Time", weather: "Weather", light: "Light", salt: "Salt", pepper: "Pepper", soccer: "Soccer" }
  ]

  it('renderiza os cabeçalhos corretamente', () => {
    render(<DatasetPreview columnNames={mockColumns} content={mockContent} />)

    mockColumns.forEach((column) => {
      expect(screen.getAllByText(column)).not.toBeNull()
    })
  })

  it('renderiza todas as células da tabela', () => {
    render(<DatasetPreview columnNames={mockColumns} content={mockContent} />)

    mockContent.forEach((row) => {
      Object.values(row).forEach((cellValue) => {
        expect(screen.getAllByText(String(cellValue))).not.toBeNull()
      })
    })
  })
})
