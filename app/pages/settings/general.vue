<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">General Settings</h1>
    <p class="text-gray-600 dark:text-gray-400">
      Manage your profile information, time zone, and language preferences here.
    </p>

    <div class="mt-8 space-y-4">
      <UFormGroup label="User Name" hint="This is your public-facing name">
        <UInput placeholder="Nuxt Dev" />
      </UFormGroup>
      <UFormGroup label="Email Address">
        <UInput type="email" placeholder="you@example.com" />
      </UFormGroup>
      <UButton label="Save Changes" />
    </div>
  </div>
</template>