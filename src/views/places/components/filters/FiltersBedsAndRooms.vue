<template>
  <h3 class="text-sm text-center mt-1 mb-1">Beds & rooms</h3>
  <el-form-item class="app-formitem">
    <p class="text-xs">Bedrooms</p>
    <el-select v-model="bedrooms">
      <el-option
        v-for="item in numberOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="text-xs w-full">Beds</p>
    <el-select v-model="beds">
      <el-option
        v-for="item in numberOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="text-xs">Bathrooms</p>
    <el-select v-model="bathrooms">
      <el-option
        v-for="item in numberOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { bedrooms, beds, bathrooms } = storeToRefs(filtersStore)

const numberOptions = [
  {
    value: 0,
    label: 'Any'
  },
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  },
  {
    value: 6,
    label: '6+'
  }

]
</script>
