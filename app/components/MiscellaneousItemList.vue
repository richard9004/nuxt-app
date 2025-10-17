<template>
  <UPageCard title="Miscellaneous Items">
    <ul v-if="items.length">
      <li
        v-for="(itm, index) in items"
        :key="index"
        class="flex justify-between items-center border-b py-2"
      >
        <span>{{ itm.name }} - ₹{{ itm.price }}</span>
        <UButton color="error" variant="outline" size="sm" @click="removeItem(index)">
          Remove
        </UButton>
      </li>
    </ul>
    <p v-else class="text-gray-500 text-sm">No items added yet.</p>
  </UPageCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { name: 'Extra Bed', price: 200 },
  { name: 'Breakfast', price: 100 },
])

const removeItem = (index: number) => {
  items.value.splice(index, 1)
}
</script>
