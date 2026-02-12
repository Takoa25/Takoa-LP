import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    // Otimizações de performance para PageSpeed
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    rollupOptions: {
      output: {
        // Estratégia de chunking otimizada
        manualChunks: {
          // Separa React e bibliotecas principais
          'react-vendor': ['react', 'react-dom'],
          // Separa bibliotecas de UI/animação
          'animation-vendor': ['framer-motion', 'lenis'],
          // Separa ícones
          'icons-vendor': ['react-icons'],
        },
        // Nomes de chunk mais limpos
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    },
    // Aumenta limite de warning para chunks grandes
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps apenas para desenvolvimento
    sourcemap: false,
  }
});
