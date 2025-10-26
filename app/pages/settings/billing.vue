<template>
  <UContainer as="section" class="py-8 space-y-6">
    <SettingsNavigation />
    <div class="space-y-4">
      <h1 class="text-2xl font-semibold">Billing Settings</h1>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SettingsNavigation from '~/components/SettingsNavigation.vue'

const showBillModal = ref(false)
const billSettings = ref([
  { name: 'SGST', percentage: 9, noTax: false },
  { name: 'No GST', percentage: 0, noTax: true }
])

const newSetting = ref({ name: '', percentage: 0, hasTax: true })

function saveBillSetting() {
  billSettings.value.push({
    name: newSetting.value.name,
    percentage: newSetting.value.hasTax ? newSetting.value.percentage : 0,
    noTax: !newSetting.value.hasTax
  })
  newSetting.value = { name: '', percentage: 0, hasTax: true }
  showBillModal.value = false
}
</script>