<script setup lang="ts">
import { ref } from 'vue'

interface Room {
  name: string
  icon: string
  color?: string
  isAdd?: boolean
  description?: string // optional room description
}

const rooms: Room[] = [
  { name: 'Living Room', icon: 'i-lucide-lightbulb', color: 'text-yellow-500', description: 'Main living area' },
  { name: 'Bedroom', icon: 'i-lucide-bed', color: 'text-blue-500', description: 'Place to sleep and relax' },
  { name: 'Kitchen', icon: 'i-lucide-cpu', color: 'text-red-500', description: 'Cooking and dining area' },
  { name: 'Office', icon: 'i-lucide-monitor', color: 'text-green-500', description: 'Workspace' },
  { name: 'Add Room', icon: 'i-lucide-plus-circle', color: 'text-gray-400', isAdd: true },
]

const selectedRoom = ref<Room | null>(null)

const selectRoom = (room: Room) => {
  if (!room.isAdd) {
    selectedRoom.value = room
  } else {
    // handle Add Room click
    alert('Add Room clicked!')
  }
}
</script>

<template>
  <UContainer as="section" class="py-8">
    <!-- Header -->
    <div class="mb-8 text-center md:text-left">
      <h3 class="text-xl font-semibold mb-1">Set Up Your Rooms</h3>
      <p class="text-gray-600 text-sm max-w-2xl">
        Add your rooms below and see details instantly. Select a room to view or edit its details.
      </p>
    </div>

    <!-- Two-column layout -->
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Rooms Grid -->
      <div class="flex-1">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          <UCard
            v-for="(room, index) in rooms"
            :key="index"
            class="flex flex-col items-center p-4 w-32 hover:shadow-lg transition cursor-pointer"
            :class="room.isAdd ? 'border-2 border-dashed border-gray-300' : ''"
            @click="selectRoom(room)"
          >
            <UIcon :name="room.icon" class="size-8" :class="room.color" />
            <p class="mt-2 text-center font-medium" :class="room.isAdd ? 'text-gray-500' : ''">
              {{ room.name }}
            </p>
          </UCard>
        </div>
      </div>

      <!-- Details Panel -->
      <div class="flex-1 p-4 rounded-md min-h-[200px]">
        <template v-if="selectedRoom">
          <h4 class="text-lg font-semibold mb-2">{{ selectedRoom.name }} Details</h4>
          <p class="text-gray-700">{{ selectedRoom.description || 'No additional details available.' }}</p>
          <!-- Additional fields like bills, occupancy etc. can go here -->
        </template>
        <template v-else>
          <p class="text-gray-500 text-center mt-4">
            Select a room to view details
          </p>
        </template>
      </div>
    </div>
  </UContainer>
</template>
