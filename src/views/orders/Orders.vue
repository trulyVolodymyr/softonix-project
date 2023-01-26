<template>
  <div class="p-6">
    <el-button class="app-button mb-4" @click="routeBack">Back</el-button>

    <div class="flex justify-center">
      <el-table :data="orderInfo" class="w-full">
        <el-table-column prop="place_name" label="Place">
          <template #default="{ row }">
            <router-link
              :to="{path:`place/${row.place_id}`}"
              class="underline whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {{ row.place_name }}
            </router-link>
          </template>
        </el-table-column>

        <el-table-column prop="dates[0]" label="Start Date" />
        <el-table-column prop="dates[1]" label="End Date" />
        <el-table-column prop="guests" label="Number of guest" />
        <el-table-column prop="price" label="Price $" />
        <el-table-column prop="created_at" label="Created at" />
      </el-table>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { router } from '@/router'
import { orderService } from './orders.service'

const authStore = useAuthStore()
const { userId } = storeToRefs(authStore)

const orderInfo = ref<IOrder[]>()

function routeBack () {
  router.back()
}

onMounted(async () => {
  await orderService.getOrder(userId.value)
    .then(data => (orderInfo.value = data))
    .catch((e) => {
      ElNotification({
        title: 'Error',
        message: e.error_description || 'Something went wrong.',
        type: 'error'
      })
    })
})
</script>
