<template>
  <div class="w-full">
    <h3 class="mb-4">Maximum: {{ place?.numberOfGuests }} guests</h3>

    <div class="flex justify-between w-full mb-4">
      <div class="mr-2">
        <p class="text-xs font-bold">Adults</p>
        <p class="text-xs ">Age +13</p>
      </div>

      <div>
        <el-input-number v-model="adults" :min="1" :max="adultsMax" @change="handleChange" />
      </div>
    </div>

    <div class="flex justify-between w-full mb-4">
      <div class="mr-2">
        <p class="text-xs font-bold">Children</p>
        <p class="text-xs ">Ages 2–12</p>
      </div>

      <div>
        <el-input-number v-model="children" :min="0" :max="childrenMax" @change="handleChange" />
      </div>
    </div>

    <div class="flex justify-between w-full">
      <div>
        <p class="text-xs font-bold">Infants</p>
        <p class="text-xs ">Under 2</p>
      </div>

      <div>
        <el-input-number v-model="infants" :min="0" :max="infantsMax" @change="handleChange" />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps<{
  place: IPlace
  guest: IGuests
}>()

const emits = defineEmits(['guestsChange'])

const adults = ref(1)
const children = ref(0)
const infants = ref(0)

const numberOfGuests = computed(() => {
  return props.place.numberOfGuests
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
  emits('guestsChange', {
    adults: adults.value,
    children: children.value,
    infants: infants.value
  })
}

</script>
