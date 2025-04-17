

export const useDarkMode = () => {
  const primevue = usePrimeVue()
  const iconClass = ref('pi-moon')
  const toggleDarkMode = () => {
    const darkModeSelector = primevue.config.theme.options.darkModeSelector
    document.documentElement.classList.toggle(darkModeSelector.substring(1));
    
    iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon';
  }

  return { toggleDarkMode, iconClass }
}
