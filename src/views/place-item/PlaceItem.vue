<template>
  <h3 class="text-xl font-bold mb-3">{{ place.name }}</h3>

  <div class="flex space-x-5 mb-3">
    <p>{{ place.address }}</p>
    <p>{{ place.reviews.length }} reviews</p>
    <div class="flex items-center space-x-1">
      <IconStar /><p class="text-sm">{{ place.stars }}</p>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-4 mb-4">
    <img
      v-for="item in place.photos.slice(0,5)"
      :key="item.pictureUrl"
      class="first-of-type:col-span-2 first-of-type:row-span-2
       first-of-type:w-full first-of-type:h-full shadow-2xl"
      :src="item.pictureUrl"
      :alt="item.caption"
    >
  </div>

  <p class="text-lg font-bold"> {{ place.roomType }} hosted by {{ place.primaryHost.firstName }}</p>
  <p class="pb-4 border-b-[1px] border-black mb-3"> {{ placeInfo }}</p>

  <div>
    <div class="flex">
      <div>
        <h3 class="text-xl font-bold mb-3">What this place offers</h3>

        <ul class="grid grid-cols-2 mb-8 p-2 shadow-2xl">
          <li v-for="item in place.amenities.essentials" :key="item">
            <p class="font-medium mb-1"> - {{ item }}</p>
          </li>

          <li v-for="item in place.amenities.features" :key="item">
            <p class="font-medium mb-1">- {{ item }}</p>
          </li>
        </ul>
      </div>

      <PlaceItemReserve />
    </div>

    <div class="grid gap-5 grid-container">
      <div
        v-for="item in place.reviews"
        :key="item.author.id"
        class="w-full mb-4 shadow-2xl p-2"
      >
        <div class="flex mb-2">
          <img
            class=" w-10 h-10 mr-8"
            :src="item.author.pictureUrl"
            :alt="item.author.firstName"
          >
          <div>
            <p class=" text-sm font-bold">{{ item.author.firstName }}</p>
            <p class=" text-sm font-bold">{{ formatDate(item.createdAt) }}</p>
          </div>
        </div>
        <p class="text-sm">{{ item.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const placeItemStore = usePlaceItemStore()
const { place } = storeToRefs(placeItemStore)

const placeInfo = computed(() => {
  const text = []
  if (place.value.numberOfGuests > 1) {
    text.push(`${place.value.numberOfGuests} guests /`)
  } else {
    text.push(`${place.value.numberOfGuests} guest /`)
  }

  if (place.value.bedrooms > 1) {
    text.push(` ${place.value.bedrooms} bedrooms /`)
  } else {
    text.push(` ${place.value.bedrooms} bedroom /`)
  }

  if (place.value.beds > 1) {
    text.push(` ${place.value.beds} beds /`)
  } else {
    text.push(` ${place.value.beds} bed /`)
  }

  if (place.value.bathrooms > 1) {
    text.push(` ${place.value.bathrooms} bathrooms`)
  } else {
    text.push(` ${place.value.bathrooms} bathroom`)
  }

  return text.join('')
})

function formatDate (date: string) {
  const d = new Date(date)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  let month = '' + monthNames[(d.getMonth() + 1)]
  const year = d.getFullYear()

  if (month.length < 2) { month = '0' + month }

  return [month, year].join(' ')
}

</script>

<style>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
}
</style>
