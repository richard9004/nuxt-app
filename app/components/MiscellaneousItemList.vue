<template>
  <UPageCard title="Miscellaneous Items" class="h-full">
    <ul v-if="items.length">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex justify-between items-center border-b py-2"
      >
        <span>{{ item.name }} - ₹{{ item.price }}</span>
        <UButton
          color="error"
          variant="outline"
          size="sm"
          @click="remove(index)"
        >
          Remove
        </UButton>
      </li>
    </ul>
    <p v-else class="text-gray-500 text-sm">No items added yet.</p>
  </UPageCard>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['remove-item'])

const remove = (index: number) => {
  emit('remove-item', index)
}
</script>
