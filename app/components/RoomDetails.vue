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

const emit = defineEmits(['update:type', 'update:gstValue', 'remove-room'])

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
const roomPrice = ref<number | null>(null)
const roomPeople = ref<number | null>(1)

// Watch GST option to reset textbox when "No GST"
watch(gstOption, (newVal) => {
  if (newVal === 'No GST') gstValue.value = null
})



</script>



<template>
<UPageCard>
  <div class="absolute top-2 right-2">
      <UTooltip text="Remove this room">
        <UButton
          icon="i-ic-outline-delete-outline"
          color="neutral"
          active 
          variant="outline"
          active-color="error"
          active-variant="outline"
          size="sm"
          @click="$emit('remove-room', room)"
        />
      </UTooltip>
    </div>
<template #body>
  <div class="flex flex-wrap gap-2">
    
    <div class="w-30">
      <UFormField label="Room Name">
        <UInput :value="room.name" class="w-full"/>
      </UFormField>
    </div>

    <div class="w-30">
      <UFormField label="Price" >
        <UInput
          type="number"
          min="0"
          v-model.number="roomPrice"
          placeholder="Enter Price"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="w-30">
      <UFormField label="People">
        <UInput
          type="number"
          min="1"
          v-model.number="roomPeople"
          placeholder="Number of People"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="w-30">
      <UFormField label="Select Type">
        <USelectMenu
          v-model="selectedType"
          :items="items"
          placeholder="Select Type"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="w-30">
      <UFormField label="GST Option">
        <USelectMenu
          v-model="gstOption"
          :items="['Include GST', 'Exclude GST', 'No GST']"
          placeholder="Select GST Option"
          class="w-full"
        />
      </UFormField>
    </div>

    <div
      v-if="gstOption === 'Include GST' || gstOption === 'Exclude GST'"
      class="w-30"
    >
      <UFormField label="GST Value">
        <UInput
          type="number"
          min="0"
          v-model.number="gstValue"
          placeholder="Enter GST value"
          @update:model-value="$emit('update:gstValue', gstValue)"
          class="w-full"
        />
      </UFormField>
    </div>
  </div>
</template>
</UPageCard>

  
</template>
