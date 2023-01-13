<template>
  <div class="flex flex-col h-full overflow-hidden">
    <Header />

    <div class="flex-grow overflow-auto p-4 bg-gray-300">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>
