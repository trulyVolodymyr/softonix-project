<template>
  <div class="p-6 flex justify-center">
    <el-table :data="orderInfo" stripe>
      <el-table-column label="Created at" width="150px" />
      <el-table-column prop="place_name" label="Place" width="350px">
        <template #default="{ row }">
          <router-link
            :to="{path:`place/${row.place_id}`}"
            class="underline whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {{ row.place_name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="dates[0]" label="Start Date" width="150px" />
      <el-table-column prop="dates[1]" label="End Date" width="150px" />
      <el-table-column prop="guests" label="Number of guest" width="150px" />
    </el-table>
  </div>
</template>

<script lang='ts' setup>
import { orderService } from './orders.service'

const authStore = useAuthStore()
const { userId } = storeToRefs(authStore)

const orderInfo = ref<IOrder[]>()

onMounted(async () => {
  await orderService.getOrder(userId.value)
    .then(data => (orderInfo.value = data))
})
</script>
