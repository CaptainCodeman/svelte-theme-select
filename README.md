# svelte-theme-select

Customizable Svelte components for theme selection (light mode / dark mode) inspired by TailwindCSS.

<img width="955" alt="svelte-theme-select-dark-mode" src="https://user-images.githubusercontent.com/304910/208352220-3b45ab48-d371-4580-abcf-e55ef872577c.png">

<img width="955" alt="svelte-theme-select-light-mode" src="https://user-images.githubusercontent.com/304910/208352212-ed8c37f0-a5a3-4a87-acdb-cf922e013fad.png">

## About

The [TailwindCSS site](https://tailwindcss.com/) is a great example of excellent UX and the theme select option is particularly nice. A simple icon gives access to a menu to set the theme to light mode or dark mode, or allow the system to automatically switch based on your device configuration (which can change based on the time of day).

A particularly nice touch is that it shows if the default system mode has been overridden using a different icon color.

For mobile users, where the navigation bar shrinks to become an expandable menu, they have a larger-hit-target version providing the same features.

This project re-creates these UI widgets and provides the system to persist and apply the selected theme in your SvelteKit project. Please refer to [TailwindCSS Dark Mode](https://tailwindcss.com/docs/dark-mode) documentation for how to use dark mode styles within your app.

## Usage

### Install Package

Install using your package manager of choice:

    pnpm i svelte-theme-select

### Add to root +layout.svelte

Include the `<Theme>` component which writes the JS into the page header to apply the theme _before_ hydration (this avoids a flash of the wrong styles). The `<ThemeToggle>` component provides the desktop icon and menu, the `<ThemeSelect>` component provides the mobile friendly equivalent. This is a cut-down layout, checkout the [ready made templates available from TailwindUI](https://tailwindui.com/).

```svelte
<script lang="ts">
  import { Theme, ThemeToggle, ThemeSelect } from 'svelte-theme-select'
  import '../app.css'
</script>

<Theme />

<nav>
  <!-- desktop navigation -->
  <div class="hidden md:block">
    <!-- logo and rest of options -->
    <ThemeToggle />
  </div>

  <!-- mobile navigation -->
  <div class="block md:hidden">
    <!-- logo and rest of options -->
    <ThemeSelect />
  </div>
</nav>

{@render children?.()}
```

### Configure TailwindCSS dark-mode

Configure TailwindCSS to [toggle dark mode manually using a class](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually):

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

### Define light / dark background colors

Set the light and dark mode backgrounds to use in your `src/app.html` app shell:

```html
<body class="bg-slate-100 dark:bg-slate-900">
  <div>%sveltekit.body%</div>
</body>
```

Everything should then be in place to design using the TailWindCSS classes including the `dark:` prefix for when dark mode is active.

## Customizing the Widget Style

The UI widgets can be customized to match whatever TailwindCSS colors scheme you are using, the default icons can be replaced if desired, and the "Light", "Dark", and "System" labels replaced.

### Colors

Coming soon

### Icons

Coming soon

### Labels

Coming soon
