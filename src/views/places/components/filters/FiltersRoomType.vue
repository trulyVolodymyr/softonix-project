<template>
  <el-form-item class="app-formitem">
    <p class="my-[2px]">Room type</p>
    <el-select v-model="roomType">
      <el-option
        v-for="item in RoomTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { roomType } = storeToRefs(filtersStore)

const RoomTypes = [
  {
    value: 'Entire',
    label: 'Entire'
  },
  {
    value: 'Private',
    label: 'Private'
  },
  {
    value: 'Shared',
    label: 'Shared'
  }
]
</script>
