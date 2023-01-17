<template>
  <div class="w-full">
    <div class="flex justify-between w-full mb-4">
      <div>
        <p>Adults</p>
        <p>Age +13</p>
      </div>
      <div>
        <el-input-number v-model="adults" :min="0" :max="numberOfGuests" @change="handleChange" />
      </div>
    </div>
    <div class="flex justify-between w-full mb-4">
      <div>
        <p>Children</p>
        <p>Ages 2–12</p>
      </div>
      <div>
        <el-input-number v-model="children" :min="0" :max="numberOfGuests" @change="handleChange" />
      </div>
    </div>
    <div class="flex justify-between w-full">
      <div>
        <p>Infants</p>
        <p>Under 2</p>
      </div>
      <div>
        <el-input-number v-model="infants" :min="0" :max="numberOfGuests" @change="handleChange" />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const adults = ref(0)
const children = ref(0)
const infants = ref(0)

const placeItemStore = usePlaceItemStore()
const { place } = storeToRefs(placeItemStore)
const numberOfGuests = ref<number>(place.value.numberOfGuests)

function handleChange () {
  numberOfGuests.value = numberOfGuests.value - 1
  console.log(numberOfGuests.value)
}
</script>
