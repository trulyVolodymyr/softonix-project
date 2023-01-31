<template>
  <el-form-item class="app-formitem">
    <p class="my-[2px]">Property Type</p>
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
const placesStore = usePlacesStore()

const { propertyType } = storeToRefs(placesStore)

const propertyTypes = [
  {
    value: '',
    label: 'Any'
  },
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
