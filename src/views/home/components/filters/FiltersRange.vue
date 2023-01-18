<template>
  <h3 class="text-white text-lg text-center">Price range</h3>
  <div class="px-2 my-5">
    <el-slider
      v-model="priceRange"
      range
      show-stops
      :min="minPrice"
      :max="maxPrice"
    />
  </div>

  <div class="flex justify-between">
    <div>
      <p class="text-white mb-2">Min-price</p>

      <el-input
        v-model.number="priceRange[0]"
        :prefix-icon="IconDollar"
      />
    </div>

    <div>
      <p class="text-white mb-2">Max-price</p>

      <el-input
        v-model.number="priceRange[1]"
        :prefix-icon="IconDollar"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconDollar from '@/components/icons/IconDollar.vue'

const filtersStore = useFiltersStore()

const { minPrice, maxPrice } = useFiltersStore()
const { priceRange } = storeToRefs(filtersStore)

</script>
