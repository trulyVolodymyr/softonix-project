<template>
  <el-dropdown trigger="click" :hide-on-click="false">
    <UserButton class="el-dropdown-link" />

    <template #dropdown>
      <el-dropdown-menu>
        <template v-if="accessToken">
          <el-dropdown-item @click="logout"><p>Logout</p></el-dropdown-item>
          <el-dropdown-item>
            <router-link :to="{name:$routeNames.orders}">Orders</router-link>
          </el-dropdown-item>
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

const authStore = useAuthStore()
const { logout } = useAuthStore()
const { accessToken } = storeToRefs(authStore)

</script>
