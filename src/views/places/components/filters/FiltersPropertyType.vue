<template>
  <h3 class="text-white text-lg text-center mb-4">Property type</h3>
  <el-checkbox-group v-model="propertyType" size="large">
    <el-checkbox-button v-for="city in propertyTypes" :key="city" :label="city">
      {{ city }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { propertyTypes } = useFiltersStore()
const { propertyType } = storeToRefs(filtersStore)
</script>
