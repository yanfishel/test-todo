import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  test: {
    environment: 'jsdom',
    setupFiles: ['src/test/setup.ts'],
    css: false,
    globals: true,
  }
}) satisfies UserConfig
