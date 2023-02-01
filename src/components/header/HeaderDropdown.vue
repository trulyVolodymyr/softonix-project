<template>
  <el-dropdown trigger="click">
    <UserButton class="el-dropdown-link" />

    <template #dropdown>
      <el-dropdown-menu>
        <template v-if="accessToken">
          <el-dropdown-item @click="logout"><p>Logout</p></el-dropdown-item>

          <router-link :to="{name:$routeNames.orders}">
            <el-dropdown-item>
              Orders
            </el-dropdown-item>
          </router-link>

          <router-link :to="{name:$routeNames.placeCreate}">
            <el-dropdown-item>
              Create place
            </el-dropdown-item>
          </router-link>
        </template>

        <template v-else>
          <router-link :to="{name:$routeNames.login}">
            <el-dropdown-item>
              Login
            </el-dropdown-item>
          </router-link>

          <router-link :to="{name:$routeNames.signUp}">
            <el-dropdown-item>
              Register
            </el-dropdown-item>
          </router-link>
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
