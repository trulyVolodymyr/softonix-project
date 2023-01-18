<template>
  <div class="ml-auto shadow-2xl p-2 h-[max-content]">
    <p class="mb-4">
      <span
        class="font-bold text-lg"
      >
        $ {{ place.pricing.rate.amount }}
      </span> night
    </p>
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
      >
        <el-button class="app-button-reserve">
          {{ numberOfGuest }}
        </el-button>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <PlaceItemNumberOfGuests />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div
      v-if="numberOfDays"
      class="mt-5"
    >
      <div class="flex justify-between mb-2">
        <p class="text-sm">${{ place.pricing.rate.amount }} x {{ numberOfDays }} nigths </p>
        <p class="text-sm">${{ totalSum }}</p>
      </div>

      <div class="flex justify-between">
        <p class="text-sm">
          Service fee
        </p>
        <p class="text-sm">${{ serviceFee }}</p>
      </div>

      <el-button class="app-button-reserve mt-4">
        Check out
      </el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>

const placeItemStore = usePlaceItemStore()
const { place, guests, dates, numberOfDays } = storeToRefs(placeItemStore)

const numberOfGuest = computed(() => {
  const sum = ref(guests.value.adults + guests.value.children + guests.value.infants)
  if (sum.value === 1) {
    return ` ${sum.value} guest`
  } else {
    return `${sum.value} guests`
  }
})

const totalSum = computed(() => {
  if (numberOfDays.value) {
    return numberOfDays.value * place.value.pricing.rate.amount
  }
})

const serviceFee = computed(() => {
  if (totalSum.value) {
    return Math.floor(totalSum.value * 0.15)
  }
})

const disabledDates = (time: Date) => {
  const date1 = new Date('2023-01-10T22:00:00.000Z').getTime()
  const date2 = new Date('2023-01-13T22:00:00.000Z').getTime()
  return time.getTime() >= date1 && time.getTime() <= date2
}
</script>
