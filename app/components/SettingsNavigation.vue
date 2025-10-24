<template>
  <nav class="mb-6">
    <UNavigationMenu
      :items="links"
      color="primary"
      variant="pill"
      orientation="horizontal"
      highlight
      highlightColor="primary"
      :model-value="activeTab"
    />
  </nav>
</template>

<script setup lang="ts">
import { use, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const activeTab =  computed(() => route.path)

const links: NavigationMenuItem[] = [
  { label: 'General', to: '/settings/general', icon: 'i- lucide-settings' },
  { label: 'Billing', to: '/settings/billing', icon: 'i-lucide-credit-card' },
  { label: 'Invoices', to: '/settings/invoices', icon: 'i-lucide-file-text' }
]
</script>
