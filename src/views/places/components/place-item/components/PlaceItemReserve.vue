<template>
  <div class="ml-auto shadow-2xl p-2 h-[max-content]">
    <p class="mb-4"><span class="font-bold text-lg">$ {{ place?.pricing }}</span> night</p>
    <el-date-picker
      v-model="dates"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :disabled-date="disabledDates"
    />

    <div class="mt-5">
      <el-dropdown
        size="default"
        type="primary"
        trigger="click"
        :hide-on-click="false"
        class="w-full"
      >
        <el-button class="app-button w-full">{{ numberOfGuest }}</el-button>

        <template #dropdown>
          <el-dropdown-menu class="place-item-dropdown">
            <el-dropdown-item>
              <PlaceItemNumberOfGuests />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div v-if="numberOfDays" class="mt-5">
      <div class="flex justify-between mb-2">
        <p class="text-sm">${{ place?.pricing }} x {{ numberOfDays }} nigths </p>
        <p class="text-sm">${{ totalSum }}</p>
      </div>

      <div class="flex justify-between">
        <p class="text-sm">Service fee</p>
        <p class="text-sm">${{ serviceFee }}</p>
      </div>

      <el-button class="app-button w-full mt-4" @click="setOrder">Check out</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
const { userProfile } = useAuthStore()

const placeItemStore = usePlaceItemStore()
const { place, guests } = storeToRefs(placeItemStore)

const props = defineProps<{
  reservedDates?: Date[] | null
}>()

const dates = ref<any>(['', ''])

const numberOfDays = computed(() => {
  if (dates.value) {
    return (new Date(dates.value[1]).getTime() - new Date(dates.value[0]).getTime()) / 1000 / 60 / 60 / 24
  }
})

const numberOfGuest = computed(() => {
  const sum = ref(guests.value.adults + guests.value.children + guests.value.infants)
  if (sum.value === 1) {
    return `${sum.value} guest`
  } else {
    return `${sum.value} guests`
  }
})

const totalSum = computed(() => {
  if (numberOfDays.value && place.value) {
    return numberOfDays.value * place.value.pricing
  }
})

const serviceFee = computed(() => {
  if (totalSum.value) {
    return Math.floor(totalSum.value * 0.15)
  }
})

const disabledDates = (time: Date) => {
  if (props.reservedDates) {
    const date1 = new Date(props.reservedDates[0]).getTime()
    const date2 = new Date(props.reservedDates[1]).getTime()

    return time.getTime() >= date1 && time.getTime() <= date2
  }
}

function setOrder () {
  if (userProfile && place.value) {
    const sum = guests.value.children + guests.value.adults + guests.value.infants
    const order = {
      user_id: userProfile.id,
      place_id: place.value.id,
      place_name: place.value.name,
      guests: sum,
      dates: dates.value
    }

    return placeItemService.setOrder(order)
  }
}
</script>
