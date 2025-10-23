<template>
  <UContainer as="section" class="py-8">
    <div class="flex flex-col md:flex-row gap-8">
      
      <nav class="md:hidden">
        <UTabs :items="tabItems" class="mb-4" />
      </nav>

      <aside class="hidden md:block w-full md:w-1/4 space-y-2">
        <h2 class="text-xl font-semibold mb-4">Settings</h2>
        <UVerticalNavigation :links="links" />
      </aside>

      <main class="flex-1">
        <NuxtPage /> </main>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Important for linking the tabs to the router

const route = useRoute();

const links = [
  { label: 'General', to: '/settings/general', icon: 'i-lucide-settings' },
  { label: 'Billing', to: '/settings/billing', icon: 'i-lucide-credit-card' },
  { label: 'Invoice', to: '/settings/invoices', icon: 'i-lucide-file-text' },
];

// Map the vertical links data to the structure needed for UTabs
// and include logic to determine the active tab based on the current route
const tabItems = computed(() => 
  links.map(link => ({
    label: link.label,
    icon: link.icon,
    to: link.to,
    // Add logic for UTabs active state (optional but good practice)
    exact: true,
    // The UTabs component handles the `active` state by comparing the `to` prop 
    // to the current route path, but you can force it with a prop if needed.
  }))
);
</script>