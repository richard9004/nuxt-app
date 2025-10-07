<template>
  <NUPage class="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
    <div class="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
      <h1 class="text-2xl font-semibold text-gray-800">Create a New Bill</h1>

      <NForm @submit="submitForm" :model="form">
        <!-- Bill Number & Date -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NFormItem label="Bill Number" path="billNumber">
            <NInput v-model="form.billNumber" placeholder="Enter bill number" />
          </NFormItem>

          <NFormItem label="Date" path="date">
            <NInput type="date" v-model="form.date" />
          </NFormItem>
        </div>

        <!-- Customer Info -->
        <NFormItem label="Customer Name" path="customerName">
          <NInput v-model="form.customerName" placeholder="John Doe" />
        </NFormItem>

        <NFormItem label="Customer Email" path="customerEmail">
          <NInput type="email" v-model="form.customerEmail" placeholder="john@example.com" />
        </NFormItem>

        <!-- Amount & Status -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NFormItem label="Amount" path="amount">
            <NInputNumber v-model="form.amount" placeholder="0.00" :min="0" />
          </NFormItem>

          <NFormItem label="Status" path="status">
            <NSelect v-model="form.status" :options="statusOptions" />
          </NFormItem>
        </div>

        <!-- Notes -->
        <NFormItem label="Notes" path="notes">
          <NInput
            type="textarea"
            v-model="form.notes"
            placeholder="Enter additional details..."
            rows="3"
          />
        </NFormItem>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <NButton type="submit" color="primary">Save Bill</NButton>
        </div>
      </NForm>
    </div>
  </NUPage>
</template>
<script setup>
import { ref } from 'vue'

const form = ref({
  billNumber: '',
  date: '',
  customerName: '',
  customerEmail: '',
  amount: null,
  status: 'pending',
  notes: ''
})

const statusOptions = [
  { label: 'Pending', value: 'pending' },
  { label: 'Paid', value: 'paid' },
  { label: 'Cancelled', value: 'cancelled' }
]

const submitForm = () => {
  console.log('Bill form submitted:', form.value)
  alert('Bill saved successfully!')
}
</script>

<style scoped>
/* Optional: You can add additional spacing or styling tweaks here */
</style>