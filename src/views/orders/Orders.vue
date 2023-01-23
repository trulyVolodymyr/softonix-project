<template>
  <div class="p-6 flex justify-center">
    <el-table :data="orderInfo" stripe class="w-[800px]">
      <el-table-column prop="placeName" label="Place" width="350px">
        <template #default="{ row }">
          <router-link
            :to="{path:`place/${row.placeId}`}"
            class="underline whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {{ row.placeName }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="startDate" label="Start Date" width="150px" />
      <el-table-column prop="endDate" label="End Date" width="150px" />
      <el-table-column prop="guests" label="Number of guest" width="150px" />
    </el-table>
  </div>
</template>

<script lang='ts' setup>
const orderInfo = [
  {
    placeId: 313,
    placeName: 'Villa Azul mit Privatpool für bis zu 8 Pers.,WLAN',
    startDate: '2016-05-03',
    endDate: '2016-05-12',
    guests: 5
  }
]
</script>
