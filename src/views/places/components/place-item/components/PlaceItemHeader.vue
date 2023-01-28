<template>
  <h3 class="laptop:text-xl font-bold mb-1">{{ place?.name }}</h3>

  <div class="flex space-x-5 mb-1">
    <p class="text-xs laptop:text-base">{{ place?.address }}</p>

    <p v-if="place?.reviews" class="text-xs laptop:text-base">{{ place.reviews?.length }} reviews</p>

    <div class="flex items-center space-x-1">
      <IconStar v-if="place?.stars" /><p class="text-xs laptop:text-base">{{ place?.stars }}</p>
    </div>
  </div>
  <p class="pb-4 mb-3 text-xs laptop:text-base"> {{ placeInfo }}</p>
</template>

<script lang='ts' setup>
const props = defineProps<{
  place: IPlace
}>()

const placeInfo = computed(() => {
  let text = ''
  if (props.place) {
    if (props.place.numberOfGuests > 1) {
      text += `${props.place.numberOfGuests} guests /`
    } else {
      text += `${props.place.numberOfGuests} guest /`
    }

    if (props.place.beds > 1) {
      text += ` ${props.place.beds} beds /`
    } else {
      text += ` ${props.place.beds} bed /`
    }
  }

  return text
})
</script>
