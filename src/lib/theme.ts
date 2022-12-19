import { browser } from "$app/environment"
import { writable, type Readable } from "svelte/store"
import { defaultColors, type Colors } from "./colors"
import { setThemeStore } from "./context"
import { defaultIcons, type Icons } from "./icon"

export type Theme = 'light' | 'dark' | 'system'

export const themes: Theme[] = ['light', 'dark', 'system']

export interface Labels {
  light: string
  dark: string
  system: string
}

export const defaultLabels = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}

export interface Config {
  key: string
  icons: Icons
  labels: Labels
}

export interface ThemeStore extends Readable<Theme> {
  setTheme(value: Theme): void
  colors: Colors
  icons: Icons
  labels: Labels
}

export function createThemeSwitcher(config?: Partial<Config>) {
  const { key, colors, icons, labels } = { key: 'theme', colors: defaultColors, icons: defaultIcons, labels: defaultLabels, ...config }

  let theme: Theme = 'system'

  if (browser) {
    const saved: Theme = localStorage.theme
    if (saved === 'light' || saved === 'dark') {
      theme = saved
    }
  }

  const { subscribe, set } = writable(theme)

  function setTheme(value: Theme) {
    // only update if valid, and it's changed
    if (themes.includes(value) && value !== theme) {
      theme = value
      set(theme)
    }
  }

  const store: ThemeStore = {
    subscribe,
    setTheme,
    colors,
    icons,
    labels,
  }

  setThemeStore(store)

  return store
}
