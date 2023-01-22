<template>
  <h3 class="text-white text-lg text-center">Price range</h3>
  <div class="px-2 my-5">
    <el-slider
      v-model="priceRange"
      range
      :min="min"
      :max="max"
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

const { getPrices } = usePlacesStore()

const filtersStore = useFiltersStore()
const { priceRange, min, max } = storeToRefs(filtersStore)

onMounted(async () => {
  if (min.value === 0 || max.value === 0) {
    const prices = await getPrices()
    min.value = Math.min(...prices.map((item: any) => item.pricing))
    max.value = Math.max(...prices.map((item: any) => item.pricing))
    priceRange.value[0] = min.value
    priceRange.value[1] = max.value
  }
})

</script>
