<template>
  <UContainer as="section" class="py-8 space-y-6">
    <SettingsNavigation />

    <h1 class="text-2xl font-semibold">Invoice Settings</h1>

    <UForm @submit="saveSettings" class="space-y-6 max-w-4xl">
      <!-- Company Information -->
      <div>
        <h2 class="text-lg font-medium mb-4">Property / Business Information</h2>
        <div class="flex flex-wrap gap-4">
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Property / Business Name</label>
            <UInput v-model="form.company_name" placeholder="Enter company name" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Subtitle / Tagline</label>
            <UInput v-model="form.company_tagline" placeholder="e.g. A stay with a difference" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Address Line 1</label>
            <UInput v-model="form.company_address_line1" placeholder="Fort Aguada Road" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Address Line 2</label>
            <UInput v-model="form.company_address_line2" placeholder="Next to Kings Mansion, Candolim, Dando" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">City</label>
            <UInput v-model="form.company_city" placeholder="Bardez" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">State</label>
            <UInput v-model="form.company_state" placeholder="Goa" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Contact Number</label>
            <UInput v-model="form.company_contact_number" placeholder="+91 9960795430" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Email</label>
            <UInput v-model="form.company_email" placeholder="seraurita@yahoo.com" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Website</label>
            <UInput v-model="form.company_website" placeholder="www.auritaholidayhomes.co.in" class="w-full" />
          </div>
          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">GST Number</label>
            <UInput v-model="form.company_gst_number" placeholder="30AISPD8257E2ZA" class="w-full" />
          </div>

          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Invoice Number Prefix</label>
            <UInput v-model="form.invoice_prefix" placeholder="e.g. AHH, INV" class="w-full" />
            <p class="text-xs text-gray-500 mt-1">This text appears before every invoice number. Example: AHH-00123</p>
         </div>

          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Starting Invoice Number</label>
            <UInput v-model="form.starting_invoice_number" placeholder="e.g. 1001" type="number" class="w-full" />
            <p class="text-xs text-gray-500 mt-1">
               The next invoice number will begin from this value.
            </p>
          </div>

          <div class="w-full md:w-[48%]">
            <label class="block text-sm font-medium mb-1">Property Logo</label>
            <UInput type="file" accept="image/*" @change="handleLogoUpload" />
            <p class="text-xs text-gray-500 mt-1">
               Upload your logo to display on invoices and documents.
            </p>

            <!-- Preview (optional) -->
            <img v-if="form.logo" :src="form.logo" alt="Logo Preview" class="mt-2 h-16 object-contain" />
         </div>

        </div>
      </div>

      <div class="pt-4">
        <UButton type="submit" class="px-6">Save Settings</UButton>
      </div>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SettingsNavigation from '~/components/SettingsNavigation.vue'

const form = ref({
  company_name: '',
  company_tagline: '',
  company_address_line1: '',
  company_address_line2: '',
  company_city: '',
  company_state: '',
  company_contact_number: '',
  company_email: '',
  company_website: '',
  company_gst_number: '',
  starting_invoice_number:'',
  invoice_prefix:'',
  logo:''
})

function saveSettings() {
  console.log('Saved Settings:', form.value)
  // Add API request to save settings
}

const handleLogoUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    form.value.logo = reader.result as string // Base64 image stored here
  }
  reader.readAsDataURL(file)
}
</script>
