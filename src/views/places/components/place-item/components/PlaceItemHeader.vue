<template>
  <h3 class="laptop:text-3xl text-xl font-bold mb-10">{{ place?.name }}</h3>

  <div class="laptop:flex block justify-between mb-5">
    <div class="laptop:text-sm text-[9px] flex space-x-1">
      <p> {{ place.address }}</p>
      <p v-if="place.stars">|</p>
      <p v-if="place.stars">&#9733; {{ place.stars }}</p>
      <p v-if="place.reviews">|</p>
      <p v-if="place.reviews" class="border-b border-black"> {{ place.reviews?.length }} reviews</p>
    </div>
    <div class="flex laptop:text-sm text-[9px] space-x-2">
      <p>{{ placeInfo[0] }}</p>
      <p>|</p>
      <p>{{ placeInfo[1] }}</p>
      <p>|</p>
      <p>{{ placeInfo[2] }}</p>
      <p>|</p>
      <p>{{ placeInfo[3] }}</p>
    </div>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps<{
  place: IPlace
}>()

const placeInfo = computed(() => {
  const text = []
  if (props.place) {
    if (props.place.numberOfGuests > 1) {
      text.push(`${props.place.numberOfGuests} guests`)
    } else {
      text.push(`${props.place.numberOfGuests} guest`)
    }

    if (props.place.bedrooms > 1) {
      text.push(` ${props.place.bedrooms} bedrooms`)
    } else {
      text.push(` ${props.place.bedrooms} bedroom`)
    }

    if (props.place.beds > 1) {
      text.push(` ${props.place.beds} beds`)
    } else {
      text.push(` ${props.place.beds} bed`)
    }

    if (props.place.bathrooms > 1) {
      text.push(` ${props.place.bathrooms} bathrooms`)
    } else {
      text.push(` ${props.place.bathrooms} bathroom`)
    }
  }

  return text
})
</script>
