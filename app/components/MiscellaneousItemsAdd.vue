<template>
  <UPageCard title="Add Miscellaneous Item">
    <UForm @submit.prevent="addItem" class="flex items-end gap-3">
      <!-- Item Name -->
      <div class="flex-1">
        <label class="text-sm text-gray-600 mb-1 block">Item Name</label>
        <UInput v-model="item.name" placeholder="Enter item name" class="w-full" />
      </div>

      <!-- Price -->
      <div class="flex-1">
        <label class="text-sm text-gray-600 mb-1 block">Price</label>
        <UInput
          v-model.number="item.price"
          type="number"
          placeholder="Enter price"
          class="w-full"
        />
      </div>

      <!-- Add Button -->
      <div class="flex-shrink-0">
        <UButton type="submit" color="primary" class="mt-5">
          Add
        </UButton>
      </div>
    </UForm>
  </UPageCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['add-item'])

const item = ref({ name: '', price: null })

const addItem = () => {
  if (!item.value.name || !item.value.price) return
  emit('add-item', { ...item.value }) // <-- send data to parent
  item.value = { name: '', price: null }
}
</script>
