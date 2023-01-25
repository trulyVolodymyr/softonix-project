<template>
  <el-form-item class="app-formitem">
    <p class="text-xs">Property Type</p>
    <el-select v-model="propertyType">
      <el-option
        v-for="item in propertyTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()

const { propertyType } = storeToRefs(filtersStore)

const propertyTypes = [
  {
    value: 'house',
    label: 'House'
  },
  {
    value: 'apartment',
    label: 'Apartment'
  },
  {
    value: 'guesthouse',
    label: 'Guesthouse'
  },
  {
    value: 'hotel',
    label: 'Hotel'
  }
]
</script>
