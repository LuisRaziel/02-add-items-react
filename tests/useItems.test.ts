import { describe, expect, test } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useItem } from '../src/hooks/useItems'

describe('useItems', () => {
  test('should add item', () => {
    const { result } = renderHook(() => useItem())

    expect(result.current.items.length).toBe(0)

    act(() => {
      result.current.addItem('test')
      result.current.addItem('test2')
    })

    expect(result.current.items.length).toBe(2)

    act(() => {
      result.current.removeItem(result.current.items[0].id)
    })

    expect(result.current.items.length).toBe(1)
  })
})
