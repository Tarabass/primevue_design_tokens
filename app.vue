<script setup lang="ts">
import { updatePrimaryPalette, updatePreset } from '@primeuix/themes';

import type { ButtonTokenSections } from '@primeuix/themes/types/button';

const root = ref<ButtonTokenSections.Root>({
  root: {
    borderRadius: '9999px',
  }
});

const onChangePresetOfAllButtons = () => {
  updatePreset({
    components: {
      button: {
        root: {
          borderRadius: '9999px',
          label: {
            fontWeight: '800'
          },
        },
        colorScheme: {
          light: {
            root: {
              primary: {
                hoverBackground: '{red.500}'
              },
              secondary: {
                hoverBackground: '{purple.500}'
              }
            }
          }
        }
      }
    }
  })
}

const onChangePrimaryPalette = () => {
  updatePrimaryPalette({
    50: '{amber.50}',
    100: '{amber.100}',
    200: '{amber.200}',
    300: '{amber.300}',
    400: '{amber.400}',
    500: '{amber.500}',
    600: '{amber.600}',
    700: '{amber.700}',
    800: '{amber.800}',
    900: '{amber.900}',
    950: '{amber.950}'
  });
}


</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <PrimeButton label="Primary" />
    <PrimeButton label="Secondary" severity="secondary" @click="onClick" />
    <PrimeButton label="Success" severity="success" :dt="root" />
    <PrimeButton label="Info" severity="info" />
    <PrimeButton label="Warn" severity="warn" />
    <PrimeButton label="Help" severity="help" />
    <PrimeButton label="Danger" severity="danger" />
    <PrimeButton label="Contrast" severity="contrast" />
  </div>
  <br>
  <div>
    <PrimeButton label="Change primary palette" @click="onChangePrimaryPalette" /><br><br>
    <PrimeButton label="Change preset of all buttons" @click="onChangePresetOfAllButtons" />
  </div>
  <br>
  <div>
    <a href="https://stackblitz.com/edit/nuxt-starter-6e2pbfgg?file=nuxt.config.ts">Nuxt starter with preset</a><br>
    <a href="https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/material/button/index.ts">Theme
      preset example</a><br>
    <a href="https://primevue.org/theming/styled/#extend">Custom tokens and styles</a>
  </div>
</template>
