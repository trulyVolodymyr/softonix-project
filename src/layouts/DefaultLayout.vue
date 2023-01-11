<template>
  <div class="flex flex-col h-full overflow-hidden">
    <header class="p-4 bg-orange-200 text-white capitalize shadow flex items-center">
      header
    </header>

    <div class="flex-grow overflow-auto p-4">
      <router-view />
    </div>

    <footer class="p-4 bg-red-200 capitalize shrink-0">
      example footer
    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>
