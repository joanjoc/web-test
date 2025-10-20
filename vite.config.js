import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web-test/', // aquí el nom del teu repositori a GitHub
  plugins: [react()],
})