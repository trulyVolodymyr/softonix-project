<template>
  <h3 class="mt-6 font-bold">Beds & rooms</h3>
  <el-form-item class="app-formitem">
    <p class="my-[2px]">Bedrooms</p>
    <el-select v-model="allFilters.bedrooms">
      <el-option
        v-for="item in numberOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="my-[2px] w-full">Beds</p>
    <el-select v-model="allFilters.beds">
      <el-option
        v-for="item in numberOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="my-[2px]">Bathrooms</p>
    <el-select v-model="allFilters.bathrooms">
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
const placesStore = usePlacesStore()
const { allFilters } = storeToRefs(placesStore)

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
