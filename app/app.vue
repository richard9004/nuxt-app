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
   
  }
])
</script>

