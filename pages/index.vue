<script lang="ts" setup>
import { updatePrimaryPalette, updatePreset, useTheme, palette, $dt } from '@primeuix/themes';
import type { ButtonTokenSections } from '@primeuix/themes/types/button';
import type { SelectChangeEvent } from 'primevue/select';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import Material from '@primeuix/themes/material';

// Custom (own) composable
const { toggleDarkMode, iconClass } = useDarkMode()

const successButtonTokens = ref<ButtonTokenSections.Root>({
  borderRadius: '9999px',
});

const raised = ref({
  raised: {
    shadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
  }
})

const onChangePresetOfAllButtons = () => {
  updatePreset({
    components: {
      select: {
        root: {
          borderColor: '#0F0'
        }
      },
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

const primevue = usePrimeVue()
const primaryPaletteName = ref<string | null>()
const onChangePrimaryPalette = (event: SelectChangeEvent) => {  
  if(event.value)
    updatePrimaryPalette(primevue.config.theme.preset.primitive[event.value])
  else
    useTheme({ preset: presets.get(theme.value) })
}

const presets = new Map([
  ['Aura', Aura],
  ['Lara', Lara],
  ['Nora', Nora],
  ['Material', Material]
])

const theme = ref('Nora')
const onChangePreset = (value: string) => {
  useTheme({ preset: presets.get(value) })
  primaryPaletteName.value = null
  // $t()
  //     .preset(preset)
  //     .preset(this.getPresetExt())
  //     .surfacePalette(surfacePalette)
  //     .use({ useDefaultOptions: true });
}

const primaryColor = computed(() => palette(`{${primaryPaletteName.value}}`));
const primaryColorDT = computed(() => $dt('button.primary.color') )
</script>

<template>
  <div>
    {{ primaryColorDT }}
    <div class="text-primary bg-amber-900"><span>Hello Kiki</span></div>
    <div class="flex" style="gap: 1rem; padding: 1rem;">
      <PrimeButton label="Primary" />
      <PrimeButton label="Secondary" severity="secondary" />
      <PrimeButton label="Success" severity="success" :dt="successButtonTokens" />
      <PrimeButton label="Info" severity="info" />
      <PrimeButton label="Warn" severity="warn" />
      <PrimeButton label="Help" severity="help" />
      <PrimeButton label="Danger" severity="danger" />
      <PrimeButton label="Contrast" severity="contrast" raised :dt="raised" />
    </div>
    <div style="display: flex; gap: 1rem; padding: 1rem;">
      <PrimeSelect v-model="primaryPaletteName" v-tooltip.bottom="{ value: JSON.stringify(primaryColor), autoHide: false }" :options="Object.keys($primevue.config.theme.preset.primitive).slice(1)" show-clear placeholder="Change primary palette" @change="onChangePrimaryPalette" />
      <PrimeButton label="Change preset of all buttons" @click="onChangePresetOfAllButtons" />
    </div>
    <div style="display: flex; gap: .5rem; padding: 1rem;">
      <PrimeSelectButton v-model="theme" :options="presets.keys().toArray()" :unselectable="false" @update:model-value="onChangePreset" />
      <PrimeButton :icon="`pi ${iconClass}`" @click="toggleDarkMode()" />
    </div>
    <div style="display: flex; gap: .25rem">
      <PrimeButton as="a" variant="link" label="Nuxt starter with preset" href="https://stackblitz.com/edit/nuxt-starter-6e2pbfgg?file=nuxt.config.ts" target="_blank" rel="noopener" />
      <PrimeButton as="a" variant="link" label="Theme preset example" href="https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/material/button/index.ts" target="_blank" rel="noopener" />
      <PrimeButton as="a" variant="link" label="Custom tokens and styles" href="https://primevue.org/theming/styled/#extend" target="_blank" rel="noopener" />
    </div>
    <div style="display: flex; gap: 1rem; padding: 1rem;">
      <PrimeCard>
        <template #title>Primitives</template>
        <template #subtitle>$primevue.config.theme.preset.primitive</template>
        <template #content>
          <pre>{{ $primevue.config.theme.preset.primitive }}</pre>
        </template>
      </PrimeCard>
      <PrimeCard>
        <template #title>Complete theme</template>
        <template #subtitle>$primevue.config.theme</template>
        <template #content>
          <pre>{{ $primevue.config.theme }}</pre>
        </template>
      </PrimeCard>
      <!-- <div>
        <h4>Locales</h4>
        <pre>{{ $primevue.config.locale }}</pre>
      </div> -->
      <!-- <div>
        <h4>Complete Config</h4>
        <pre>{{ $primevue.config }}</pre>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>