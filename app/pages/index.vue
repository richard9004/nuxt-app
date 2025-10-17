<script setup lang="ts">
import { ref } from 'vue'
import RoomModal from '~/components/RoomModal.vue'
import MiscellaneousItemsAdd from '~/components/MiscellaneousItemsAdd.vue'
import MiscellaneousItemList from '~/components/MiscellaneousItemList.vue'
import Swal from 'sweetalert2'
import draggable from 'vuedraggable'



interface Room {
  name: string
  icon: string
  color?: string
  isAdd?: boolean
  description?: string // optional room description
}

// Reactive list
const list = ref<Person[]>([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
])

// Handle changes
const onListChange = (event: any) => {
  console.log('List changed:', event)
}

const selectedRooms = ref([]) 

const roomColors = ['text-amber-400', 'text-sky-400', 'text-rose-400', 'text-lime-400', 'text-violet-400'];

const rooms = ref<Room[]>([
  { name: 'Room 101', icon: 'i-lucide-house-plus', color: roomColors[0], type: '' },
  { name: 'Room 102', icon: 'i-lucide-house-plus', color: roomColors[1], type: '' },
  { name: 'Room 103', icon: 'i-lucide-house-plus', color: roomColors[2], type: '' },
  { name: 'Room 104', icon: 'i-lucide-house-plus', color: roomColors[3], type: '' }
]);


const selectedRoom = ref<Room | null>(null)

const isModalOpen = ref(false)
const editRoomData = ref<Room | null>(null);

const openAddRoomModal = () => {
  editRoomData.value = null 
  isModalOpen.value = true
}

const updateRoom = (updatedRoom: Room) => {
  const index = rooms.value.findIndex(r => r.name === editRoomData.value?.name)
  if (index !== -1) {
    rooms.value[index] = updatedRoom
  }
}



const editRoom = (room: Room) => {
   console.log(room);
   editRoomData.value = { ...room }
   isModalOpen.value = true
}

const deleteRoom = (index) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "This action cannot be undone!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
       rooms.value.splice(index, 1)

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Room deleted successfully',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
};

const selectRoom = (room: Room) => {
  if (!room.isAdd) {
    const index = selectedRooms.value.findIndex(r => r.name === room.name)
    if (index === -1) {
      // Add room if not already selected
      selectedRooms.value.push(room)
    } else {
      // Remove room if already selected (toggle)
      selectedRooms.value.splice(index, 1)
    }

    console.log('SELECED ROOMS');
    console.log(selectedRooms.value)
  }
}

const handleChange = () => {
  console.log('CHANHED');
}

const confirmRemoveRoom = (room) => {
  Swal.fire({
    title: 'Are you sure?',
    text: `Do you want to remove ${room.name}? This action cannot be undone.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, remove it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      // Remove the room from selectedRooms
      selectedRooms.value = selectedRooms.value.filter(r => r.name !== room.name)

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Room removed successfully',
        showConfirmButton: false,
        timer: 2000
      })
    }
  })
}



const showModal = ref(false)
</script>

    <template>
  <UContainer as="section" class="py-8">

    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex-1">
        <!-- Header for Room Grid -->
        <div class="mb-6 text-center md:text-left">
          <h3 class="text-xl font-semibold mb-1">Room Grid</h3>
          <p class="text-gray-600 text-sm max-w-2xl">
            Add, edit, or remove your rooms below.
          </p>
        </div>

        <!-- Room Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          <UCard
            v-for="(room, index) in rooms"
            :key="index"
            class="relative flex flex-col items-center p-4 w-32 hover:shadow-lg transition group cursor-pointer"
            @click="selectRoom(room)"
            :class="{ 'ring-2 ring-primary': selectedRooms.some(r => r.name === room.name) }"
          >
            <!-- Edit Button -->
            <div class="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <UTooltip text="Edit room or apartment">
                <UButton
                  active
                  icon="i-lucide-edit-2"
                  size="sm"
                  color="neutral"
                  variant="outline"
                  active-color="primary"
                  active-variant="outline"
                  @click.stop="editRoom(room)"
                />
              </UTooltip>
            </div>

            <!-- Delete Button -->
            <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <UTooltip text="Delete room or apartment">
                <UButton
                  active
                  icon="i-lucide-trash"
                  size="sm"
                  color="neutral"
                  variant="outline"
                  active-color="error"
                  active-variant="outline"
                  @click.stop="deleteRoom(index)"
                />
              </UTooltip>
            </div>

            <div class="flex justify-center items-center w-full my-4">
              <UIcon :name="room.icon" class="size-8" :class="room.color" />
            </div>
            <p class="mt-2 text-center font-medium">{{ room.name }}</p>
          </UCard>

          <!-- Add Room Card -->
          <UCard
            class="flex flex-col items-center p-4 w-32 border-2 border-dashed border-gray-300 cursor-pointer hover:shadow-lg transition"
            @click="openAddRoomModal"
          >
            <UIcon name="i-lucide-plus" class="size-8 text-gray-400" />
            <p class="mt-2 text-center font-medium text-gray-500">Add Room</p>
          </UCard>
        </div>
      </div>

      
      <div class="flex-1">
        <!-- Header for Details Panel -->
        <div class="mb-6 text-center md:text-left">
          <h3 class="text-xl font-semibold mb-1">Room Details</h3>
          <p class="text-gray-600 text-sm max-w-2xl">
            Select a room from the grid to view or modify its details.
          </p>
        </div>

        <template v-if="selectedRooms.length">
           <UPageList class="space-y-4">
          <draggable v-model="selectedRooms" handle=".handle"  :itemKey="'name'" animation="200" class="drag-container flex flex-col gap-4 move-rooms">
           <template #item="{element: item}">
            <div class="handle ">
             
              <RoomDetails
                :room="item"
                @update:type="val => console.log('Type selected for', item.name, val)"
                @update:gstValue="val => console.log('GST value for', item.name, val)"
                @remove-room="confirmRemoveRoom"
              />
             
            </div>
           </template>
          </draggable>
           </UPageList>
        </template>

        <template v-else>
          <p class="text-gray-500 text-center mt-4">
            Select a room to view details
          </p>
        </template>



    

      </div>

    </div>

    <!-- Modal -->
    <RoomModal
      v-model:open="isModalOpen"
      @add-room="newRoom => rooms.push(newRoom)"
      @update-room="updateRoom"
      :room-colors="roomColors"
      :editRoomData="editRoomData"
     
    />

    
    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex-1">
        <MiscellaneousItemsAdd />
      </div>

      <div class="flex-1">
        <MiscellaneousItemList />
      </div>
    </div>
  </UContainer>
</template>
<style scoped>
.move-rooms {
 cursor: move;
}

</style>
