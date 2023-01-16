<template>
  <IconClose
    class="cursor-pointer"
    @click="filtersModalVisability = false"
  />
</template>

<script lang='ts' setup>
const filterStore = useFiltersStore()
const { filtersModalVisability } = storeToRefs(filterStore)
</script>
