<template>
  <h3 class="text-white text-lg mb-4 text-center">Rooms and beds</h3>

  <h4 class="text-white underline">Bedrooms </h4>
  <el-radio-group v-model="bedroms" class="mb-4 app-radio">
    <el-radio :label="0">Any</el-radio>
    <el-radio :label="1">1</el-radio>
    <el-radio :label="2">2</el-radio>
    <el-radio :label="3">3</el-radio>
    <el-radio :label="4">4</el-radio>
    <el-radio :label="5">5</el-radio>
    <el-radio :label="6">6+</el-radio>
  </el-radio-group>

  <h4 class="text-white underline">Beds</h4>
  <el-radio-group v-model="beds" class="mb-4 app-radio">
    <el-radio :label="0">Any</el-radio>
    <el-radio :label="1">1</el-radio>
    <el-radio :label="2">2</el-radio>
    <el-radio :label="3">3</el-radio>
    <el-radio :label="4">4</el-radio>
    <el-radio :label="5">5</el-radio>
    <el-radio :label="6">6+</el-radio>
  </el-radio-group>

  <h4 class="text-white underline">Bathrooms</h4>
  <el-radio-group v-model="bathrooms" class="app-radio">
    <el-radio :label="0">Any</el-radio>
    <el-radio :label="1">1</el-radio>
    <el-radio :label="2">2</el-radio>
    <el-radio :label="3">3</el-radio>
    <el-radio :label="4">4</el-radio>
    <el-radio :label="5">5</el-radio>
    <el-radio :label="6">6+</el-radio>
  </el-radio-group>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { bedroms, beds, bathrooms } = storeToRefs(filtersStore)
</script>
