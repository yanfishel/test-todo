import '@testing-library/jest-dom/vitest'
import { beforeEach } from 'vitest'

// Ensure a clean persisted store between tests
beforeEach(() => {
  // Persist uses sessionStorage; clear it to avoid cross-test leakage
  sessionStorage.clear()
})

export {}
