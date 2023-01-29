<template>
  <div class="mb-5">
    <h3 class="text-xl font-bold mb-3">What this place offers:</h3>

    <div v-for="type,index in placeInfo" :key="index" class="font-bold text-sm mb-4">
      <p class="mb-1 text-lg">{{ type[0] }}</p>
      <div class="flex flex-wrap">
        <p
          v-for="item in type[1]" :key="item"
          class="amenities-item"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
const props = defineProps<{
  essentials: string[]
  features: string[]
  amenitiesLocation: string[]
  safety: string[]
}>()

const placeInfo = computed(() => {
  return [
    ['Essentials', props.essentials],
    ['Features', props.features],
    ['Location', props.amenitiesLocation],
    ['Safety', props.safety]

  ]
})
</script>

<style lang='scss'>
.amenities-item{
  @apply mr-3 mb-2 text-xs border-[1px] border-black p-1 font-normal
}
</style>
