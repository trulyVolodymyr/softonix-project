<template>
  <div class="ml-auto shadow-2xl p-2">
    <p>
      <span
        class="font-bold text-lg"
      >
        $ {{ place.pricing.rate.amount }}
      </span> night
    </p>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :disabled-date="disabledDate"
    />

    <div>
      <el-dropdown
        size="default"
        type="primary"
        trigger="click"
        :hide-on-click="false"
      >
        Number of Guests
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <PlaceItemNumberOfGuests />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang='ts' setup>
const placeItemStore = usePlaceItemStore()
const { place } = storeToRefs(placeItemStore)

const value1 = ref('')

const disabledDate = (time: Date) => {
  const date1 = new Date('2023-01-10T22:00:00.000Z').getTime()
  const date2 = new Date('2023-01-13T22:00:00.000Z').getTime()
  return time.getTime() >= date1 && time.getTime() <= date2
}
</script>
