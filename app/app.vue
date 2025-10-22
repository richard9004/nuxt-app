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

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('')
}, {
  label: 'Components',
  to: '',
  icon: 'i-lucide-box',
  active: route.path.startsWith('')
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: '',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: '',
  target: '_blank'
}])
</script>
