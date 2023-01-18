<template>
  <el-button class="app-button-header" @click="showFiltersModal">Filters</el-button>
</template>

<script lang="ts" setup>
const filterStore = useFiltersStore()
const { filtersModalVisability } = storeToRefs(filterStore)

function showFiltersModal () {
  filtersModalVisability.value = true
}
</script>
