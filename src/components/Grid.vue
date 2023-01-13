<template>
  <div class="grid gap-6 grid-container">
    <slot />
  </div>
</template>

<style>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
