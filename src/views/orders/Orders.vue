<template>
  <router-link class="mb-4" :to="{name:$routeNames.places}">
    <el-button aria-label="Back" class="app-button">
      Back
    </el-button>
  </router-link>

  <div class="pb-5">
    <el-scrollbar>
      <el-table :data="orderInfo" class="w-full">
        <el-table-column prop="place_name" label="Place">
          <template #default="{ row }">
            <router-link
              :to="{path:`place/${row.place_id}`}"
              class="underline whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="row.place_name"
                placement="top"
              >
                <p>{{ row.place_name }}</p>
              </el-tooltip>
            </router-link>
          </template>
        </el-table-column>

        <el-table-column prop="dates[0]" label="Start Date" width="120" />
        <el-table-column prop="dates[1]" label="End Date" width="120" />
        <el-table-column prop="guests" label="Guest" width="70" />
        <el-table-column prop="price" label="Price $" width="90" />
        <el-table-column prop="created_at" label="Created at" width="120" />
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script lang='ts' setup>
import { orderService } from './orders.service'

const authStore = useAuthStore()
const { userId } = storeToRefs(authStore)
const generalStore = useGeneralStore()

const { loading } = storeToRefs(generalStore)

const orderInfo = ref<IOrder[]>()

onMounted(() => {
  loading.value = true
  orderService.getOrder(userId.value)
    .then(data => (orderInfo.value = data))
    .catch((e) => {
      ElNotification({
        title: 'Error',
        message: e.error_description || 'Something went wrong.',
        type: 'error'
      })
    })
    .finally(() => (loading.value = false))
})
</script>
