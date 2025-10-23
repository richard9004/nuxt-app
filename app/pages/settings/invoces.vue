<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Invoices</h1>
    <p class="text-gray-600 dark:text-gray-400">
      A history of your past invoices and payment receipts.
    </p>

    <ul class="mt-8 space-y-3">
      <li class="p-4 border rounded flex justify-between items-center">
        <span>#INV-2025-10-01 - $29.00</span>
        <UButton icon="i-lucide-download" variant="soft" size="sm" />
      </li>
      <li class="p-4 border rounded flex justify-between items-center">
        <span>#INV-2025-09-01 - $29.00</span>
        <UButton icon="i-lucide-download" variant="soft" size="sm" />
      </li>
    </ul>
  </div>
</template>