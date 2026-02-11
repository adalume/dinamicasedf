import { defineConfig } from 'vite'

export default defineConfig({
    // Se o seu site for submetido em uma subpasta, mude o 'base'
    base: './',
    build: {
        outDir: 'dist',
    }
})
