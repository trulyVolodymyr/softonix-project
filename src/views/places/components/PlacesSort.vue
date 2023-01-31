<template>
  <div class="mb-2">
    <p class="mb-1">Sort by price</p>
    <el-select v-model="priceSort" class="w-[150px]">
      <el-option
        v-for="item in sortPriceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        @click="sortByName"
      />
    </el-select>
  </div>
</template>
<script lang='ts' setup>
const { sortByName } = usePlacesStore()
const placesStore = usePlacesStore()
const { priceSort } = storeToRefs(placesStore)

const sortPriceOptions = [
  {
    value: 'none',
    label: 'None',
    disabled: true
  },
  {
    value: 'greaterToLower',
    label: 'Greater price'
  },
  {
    value: 'lowerToGreater',
    label: 'Lower price'
  }
]

</script>
