import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {beforeEach, describe, expect, it } from 'vitest'

import TodosFilter from './index'
import {useStore} from '../../store'

describe('TodosFilter', () => {
  beforeEach(() => {
    // Reset store to initial state
    useStore.setState({ hideCompleted: false, selectedUser: null })
  })

  it('renders the checkbox and its label', () => {
    render(<TodosFilter />)
    const checkbox = screen.getByLabelText(/hide completed/i)
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('reflects initial store state (unchecked by default)', () => {
    render(<TodosFilter />)
    const checkbox = screen.getByLabelText(/hide completed/i) as HTMLInputElement
    expect(checkbox.checked).toBe(false)
    // Store should also be false
    expect(useStore.getState().hideCompleted).toBe(false)
  })

  it('toggles hideCompleted in the store when checkbox changes', async () => {
    const user = userEvent.setup()
    render(<TodosFilter />)

    const checkbox = screen.getByLabelText(/hide completed/i) as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    await user.click(checkbox)

    expect(checkbox.checked).toBe(true)
    expect(useStore.getState().hideCompleted).toBe(true)

    await user.click(checkbox)
    expect(checkbox.checked).toBe(false)
    expect(useStore.getState().hideCompleted).toBe(false)
  })
})
