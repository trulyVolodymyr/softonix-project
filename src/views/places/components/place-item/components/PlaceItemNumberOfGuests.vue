<template>
  <div class="w-full">
    <h3 class="mb-4">This place has a maximum of {{ place?.numberOfGuests }} guests</h3>

    <div class="flex justify-between w-full mb-4">
      <div>
        <p class=" text-sm font-bold">Adults</p>
        <p class=" text-sm ">Age +13</p>
      </div>

      <div>
        <el-input-number v-model="adults" :min="0" :max="adultsMax" @change="handleChange" />
      </div>
    </div>

    <div class="flex justify-between w-full mb-4">
      <div>
        <p class=" text-sm font-bold">Children</p>
        <p class=" text-sm ">Ages 2–12</p>
      </div>

      <div>
        <el-input-number v-model="children" :min="0" :max="childrenMax" @change="handleChange" />
      </div>
    </div>

    <div class="flex justify-between w-full">
      <div>
        <p class=" text-sm font-bold">Infants</p>
        <p class=" text-sm ">Under 2</p>
      </div>

      <div>
        <el-input-number v-model="infants" :min="0" :max="infantsMax" @change="handleChange" />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const adults = ref(1)
const children = ref(0)
const infants = ref(0)

const placeItemStore = usePlaceItemStore()
const { place, guests } = storeToRefs(placeItemStore)

const numberOfGuests = computed(() => {
  if (place.value?.numberOfGuests) {
    return place.value.numberOfGuests
  }
})

const adultsMax = ref(numberOfGuests.value)
const childrenMax = ref(numberOfGuests.value)
const infantsMax = ref(numberOfGuests.value)

const handleChange = () => {
  const sum = adults.value + children.value + infants.value
  if (sum === numberOfGuests.value) {
    adultsMax.value = adults.value
    childrenMax.value = children.value
    infantsMax.value = infants.value
  } else {
    adultsMax.value = numberOfGuests.value
    childrenMax.value = numberOfGuests.value
    infantsMax.value = numberOfGuests.value
  }

  guests.value.adults = adults.value
  guests.value.children = children.value
  guests.value.infants = infants.value
}

</script>
