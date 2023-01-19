<template>
  <div class="h-18 bg-black flex items-center justify-center  w-full">
    <div class="w-full max-w-[1440px] flex items-center justify-between p-6">
      <div class="flex space-x-2 items-center">
        <h3 class="font-medium tracking-wider text-xl text-white">FindHouse</h3>
        <IconHouse />
      </div>
      <div class="ml-auto flex space-x-2">
        <template v-if="isHomePage">
          <FiltersButton />
        </template>
        <HeaderDropdown />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { routeNames } from '@/router'
const { name } = useRoute()

const isHomePage = computed(() => {
  return name === routeNames.home
})

</script>
