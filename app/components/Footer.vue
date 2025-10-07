<template>
  <UFooter class=" px-6 py-4">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <!-- Left -->
      <div class="flex-shrink-0">
        <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </div>

      <!-- Center / Navigation Menu -->
      <div>
        <UNavigationMenu :items="items" variant="link" class="flex gap-4" />
      </div>

      <!-- Right -->
      <div class="flex gap-2">
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </div>
    </div>
  </UFooter>
</template>


<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank'
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
]
</script>