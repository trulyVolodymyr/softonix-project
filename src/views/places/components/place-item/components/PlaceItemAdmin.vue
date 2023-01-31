<template>
  <el-dropdown v-if="userProfile?.is_admin&& !edit && !create" trigger="click">
    <el-button aria-label="Admin actions" class="app-button">Admin actions</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <div class="flex flex-col">
          <el-dropdown-item class="mb-1" @click="edit = true">Edit place</el-dropdown-item>
          <el-dropdown-item class="mb-1" @click="create = true">Create place</el-dropdown-item>
          <el-dropdown-item @click="deliteDialogVisability = true">Delete place</el-dropdown-item>
        </div>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
const placeItemStore = usePlaceItemStore()
const authStore = useAuthStore()
const { userProfile } = storeToRefs(authStore)
const { create, edit, deliteDialogVisability } = storeToRefs(placeItemStore)

</script>
