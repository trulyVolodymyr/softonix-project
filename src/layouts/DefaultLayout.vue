<template>
  <div class="flex flex-col h-full overflow-hidden">
    <header class="p-4 bg-orange-200 text-white capitalize shadow flex items-center">
      header
    </header>

    <div class="flex-grow overflow-auto p-4 bg-gray-300">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>
