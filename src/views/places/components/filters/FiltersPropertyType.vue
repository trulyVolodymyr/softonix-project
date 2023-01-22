<template>
  <h3 class="text-white text-lg text-center mb-4">Property type</h3>

  <el-radio-group v-model="propertyType" size="large">
    <el-radio-button label="House" />
    <el-radio-button label="Apartment" />
    <el-radio-button label="Guesthouse" />
    <el-radio-button label="Hotel" />
  </el-radio-group>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()

const { propertyType } = storeToRefs(filtersStore)
</script>
