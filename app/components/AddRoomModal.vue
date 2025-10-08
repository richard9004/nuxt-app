<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <UModal
    v-model:open="props.open"
    @update:open="val => emit('update:open', val)"  
  >
    <template #content>
      <div class="p-6">
        <h2 class="text-lg font-semibold mb-2">Modal from Child</h2>
        <p>This modal is controlled from the parent!</p>
        <UButton label="Close" @click="emit('update:open', false)" />
      </div>
    </template>
  </UModal>
</template>
