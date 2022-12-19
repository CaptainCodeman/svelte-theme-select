import { getContext, setContext } from 'svelte'
import type { ThemeStore } from './theme'

const key = {}

export function getThemeStore() {
  return getContext<ThemeStore>(key)
}

export function setThemeStore(store: ThemeStore) {
  setContext(key, store)
}