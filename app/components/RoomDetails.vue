<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
interface Room {
  name: string
  icon?: string
  color?: string
  description?: string
}

const props = defineProps<{
  room: Room
}>()

const emit = defineEmits(['update:type', 'update:gstValue'])

// Room type dropdown options

const items = ref([
  'Single Room',
  'Double Room',
  'Apartment',
  'Guest House',
  'Villa',
  'Suite'
])

const selectedType = ref('')
const gstOption = ref('No GST')
const gstValue = ref<number | null>(null)

// Watch GST option to reset textbox when "No GST"
watch(gstOption, (newVal) => {
  if (newVal === 'No GST') gstValue.value = null
})



</script>



<template>
<UPageCard>
  <template #body>
    <div class="flex">
      <!-- Room Name -->
      <div class="flex-1">
        <UFormField label="Room Name">
          <UInput :value="room.name" />
        </UFormField>
      </div>

      <!-- Price -->
      <div class="flex-1">
        <UFormField label="Price">
          <UInput
            type="number"
            min="0"
            v-model.number="roomPrice"
            placeholder="Enter Price"
          />
        </UFormField>
      </div>

      <!-- People -->
      <div class="flex-1">
        <UFormField label="People">
          <UInput
            type="number"
            min="1"
            v-model.number="roomPeople"
            placeholder="Number of People"
          />
        </UFormField>
      </div>

      <!-- Room Type -->
      <div class="flex-1">
        <UFormField label="Select Type">
          <USelectMenu
            v-model="selectedType"
            :items="items"
            placeholder="Select Type"
           
          />
        </UFormField>
      </div>

      <!-- GST Option -->
      <div class="flex-1">
        <UFormField label="GST Option">
          <USelectMenu
            v-model="gstOption"
            :items="['Include GST', 'Exclude GST', 'No GST']"
            placeholder="Select GST Option"
          />
        </UFormField>
      </div>

      <!-- GST Value -->
      <div
        v-if="gstOption === 'Include GST' || gstOption === 'Exclude GST'"
        class="flex-1"
      >
        <UFormField label="GST Value">
          <UInput
            type="number"
            min="0"
            v-model.number="gstValue"
            placeholder="Enter GST value"
            @update:model-value="$emit('update:gstValue', gstValue)"
          />
        </UFormField>
      </div>
    </div>
  </template>
</UPageCard>

  
</template>
