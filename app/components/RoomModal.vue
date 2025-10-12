<script setup lang="ts">
import { defineProps, defineEmits, watch  } from 'vue'
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import Swal from 'sweetalert2'


const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(3, 'Room name must be at least 3 characters'),
    v.maxLength(50, 'Room name cannot exceed 50 characters')
  ),
  type: v.string() // ensure a type is selected
})

type Schema = v.InferOutput<typeof schema>

const toast = useToast()
const state = reactive({
  name: '',
  type: 'Single Room'
})


const emit = defineEmits(['update:open', 'add-room', 'update-room'])



const props = defineProps({
  open: { type: Boolean, default: false },
  roomColors: Array,
  editRoomData: {
    type: Object,
    default: null
  }
})


const items = ref([
  'Single Room',
  'Double Room',
  'Apartment',
  'Guest House',
  'Villa',
  'Suite'
])



watch(
  () => props.editRoomData,
  (room) => {
    if (room) {
      state.name = room.name
      state.type = room.type || 'Single Room'
    } else {
      state.name = ''
      state.type = 'Single Room'
    }
  },
  { immediate: true }
)



const modalTitle = computed(() =>
  props.editRoomData ? `Edit ${props.editRoomData.name}` : 'Add New Accommodation'
)
const modalDescription = computed(() =>
  props.editRoomData
    ? 'Update room or apartment details below.'
    : 'Create a new room, apartment, or guest house listing.'
)

const submitLabel = computed(() =>
  props.editRoomData ? 'Update' : 'Create'
)

const toasterLabel = computed(() =>
  props.editRoomData ? 'updated' : 'created'
)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const color = props.roomColors[Math.floor(Math.random() * props.roomColors.length)]
  const roomData = {
    name: state.name,
    icon: 'i-lucide-house-plus', // generic icon
    color: color,
    type: state.type
  }

  if (props.editRoomData) {
    // 🔁 Editing mode
    emit('update-room', roomData)
  } else {
    // ➕ Adding mode
    emit('add-room', roomData)
  }
  emit('update:open', false) // close the modal

  Swal.fire({
    toast: true,
    position: 'bottom-end',
    icon: 'success',
    title: `Accommodation ${toasterLabel.value} successfully`,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  });
}
</script>

<template>
  <UModal
    v-model:open="props.open"
    @update:open="val => emit('update:open', val)"
  >
    <template #content>
      <div class="p-6 space-y-6">
        <!-- Header -->
        <div class="text-center space-y-1">
          <h2 class="text-xl font-semibold">{{modalTitle}}</h2>
          <p class="text-sm text-gray-500">
            {{modalDescription}}
          </p>
        </div>

        <!-- Form -->
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
        <UFormField label="Room Name" name="name">
          <UInput
            v-model="state.name"
            placeholder="e.g. Deluxe Suite"
            icon="i-heroicons-outline-pencil"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Room Type" name="type">
           <USelectMenu v-model="state.type" :items="items" icon="i-heroicons-home-modern" class="w-full"/>
        </UFormField>


          <!-- Buttons -->
          <div class="flex justify-end gap-3 pt-2">
            <UButton
              variant="ghost"
              color="gray"
              label="Cancel"
              @click="emit('update:open', false)"
            />
            <UButton type="submit"  :label="submitLabel" />
          </div>
        </UForm>
      </div>
    </template>
  </UModal>
</template>
