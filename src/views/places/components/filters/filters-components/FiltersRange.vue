<template>
  <h3 class="font-bold">Price range</h3>
  <div class="px-2 my-1">
    <el-slider
      v-model="allFilters.priceRange"
      range
      :min="min"
      :max="max"
    />
  </div>

  <div class="flex justify-between">
    <div>
      <p class="mb-1">Min</p>

      <el-input
        v-model.number="allFilters.priceRange[0]"
        :prefix-icon="IconDollar"
      />
    </div>

    <div>
      <p class="mb-1">Max</p>

      <el-input
        v-model.number="allFilters.priceRange[1]"
        :prefix-icon="IconDollar"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconDollar from '@/components/icons/IconDollar.vue'

const placesStore = usePlacesStore()
const { allFilters, min, max } = storeToRefs(placesStore)

</script>
