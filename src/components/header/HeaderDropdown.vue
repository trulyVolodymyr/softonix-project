<template>
  <el-dropdown trigger="click">
    <UserButton class="el-dropdown-link" />

    <template #dropdown>
      <el-dropdown-menu>
        <template v-if="accessToken">
          <el-dropdown-item @click="logout"><p>Logout</p></el-dropdown-item>
          <el-dropdown-item @click="goToOrders">Orders</el-dropdown-item>
        </template>

        <template v-else>
          <el-dropdown-item>
            <router-link :to="{name:$routeNames.login}">Login</router-link>
          </el-dropdown-item>

          <el-dropdown-item>
            <router-link :to="{name:$routeNames.signUp}">Register</router-link>
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { routeNames, router } from '@/router'

const authStore = useAuthStore()
const { logout } = useAuthStore()
const { accessToken } = storeToRefs(authStore)

function goToOrders () {
  router.push({ name: routeNames.orders })
}
</script>
