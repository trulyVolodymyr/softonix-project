<template>
  <el-dropdown
    class="ml-auto"
    trigger="click"
    :hide-on-click="false"
  >
    <UserButton class="el-dropdown-link" />

    <template #dropdown>
      <el-dropdown-menu>
        <template v-if="accessToken">
          <el-dropdown-item
            @click="logout"
          >
            Logout
          </el-dropdown-item>
        </template>

        <template v-else>
          <el-dropdown-item>
            <router-link
              :to="{name:$routeNames.login}"
            >
              Login
            </router-link>
          </el-dropdown-item>

          <el-dropdown-item>
            <router-link
              :to="{name:$routeNames.signUp}"
            >
              Register
            </router-link>
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>

const authStore = useAuthStore()
const { accessToken } = storeToRefs(authStore)

function logout () {
  accessToken.value = null
  localStorage.removeItem('si-token')
}

</script>
