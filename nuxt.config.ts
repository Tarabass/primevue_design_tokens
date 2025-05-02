import path from 'path';
import tailwindcss from "@tailwindcss/vite";
// import Aura from '@primeuix/themes/aura';
import Nora from '@primeuix/themes/nora';
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false
        }
      }
    },
    components: {
      prefix: 'prime',
      // TODO: tmp solution to fix error after upgrade nuxt
      exclude: ['Tag', 'Terminal', 'Form', 'FormField', 'Editor', 'Chart']
    },
    directives: {
      prefix: 'prime'
    }
  },
  css: [path.join(__dirname, './assets/css/main.css'), 'primeicons/primeicons.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})