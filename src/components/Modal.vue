<template>
  <Teleport to="body">
    <div
      class="w-full h-full absolute top-0 bg-modal z-10 flex justify-center items-center"
    >
      <div
        class="bg-black w-[450px] p-5"
        :class="{'w-[650px]': wide}"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>
<script lang='ts' setup>
defineProps<{
  wide?: boolean
}>()
</script>
