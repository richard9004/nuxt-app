<template>
  <UApp>
    <UHeader title="Nuxt UI" to="/about">
        <UNavigationMenu :items="items" />

        <template #right>
          <UColorModeButton />
        </template>

        <template #body>
          <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>  
 
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

      <UFooter>
        <Footer/>
      </UFooter>
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import Footer from '~/components/Footer.vue'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home',
    active: route.path === '/'
  },
  {
    label: 'Settings',
    to: '/settings',
    icon: 'i-lucide-settings',
    active: route.path.startsWith('/settings'),
    children: [
      {
        label: 'General',
        // Link directly to the first child page
        to: '/settings/general',
        icon: 'i-lucide-user-cog',
        // Optional: Check if the current route is exactly this path
        active: route.path === '/settings/general'
      },
      {
        label: 'Billing',
        to: '/settings/billing',
        icon: 'i-lucide-credit-card',
        active: route.path === '/settings/billing'
      },
      {
        label: 'Invoices',
        to: '/settings/invoices',
        icon: 'i-lucide-file-text',
        active: route.path === '/settings/invoices'
      }
    ]
  }
])
</script>

