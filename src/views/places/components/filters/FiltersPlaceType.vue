<template>
  <h3 class="text-white text-lg text-center">Type of place</h3>
  <el-radio-group v-model="roomType" class="ml-4">
    <el-radio label="Entire" size="large">Entire</el-radio>
    <el-radio label="Private" size="large">Private</el-radio>
    <el-radio label="Shared" size="large">Shared</el-radio>
  </el-radio-group>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { roomType } = storeToRefs(filtersStore)
</script>
