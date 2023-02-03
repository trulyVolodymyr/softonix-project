<template>
  <el-dropdown v-if="userProfile?.is_admin" trigger="click">
    <el-button aria-label="Admin actions" class="app-button">Admin actions</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <div class="flex flex-col">
          <el-dropdown-item
            class="mb-1" @click="router.push({ name: routeNames.placeEdit })"
          >
            Edit place
          </el-dropdown-item>
          <el-dropdown-item @click="deliteDialogVisability = true">Delete place</el-dropdown-item>
        </div>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <Teleport to="body">
    <el-dialog
      v-model="deliteDialogVisability"
      width="450px"
    >
      <p>Are you sure you want to delete this place?</p>

      <template #footer>
        <span class="dialog-footer">
          <el-button aria-label="No" class="app-button mr-2" @click="deliteDialogVisability = false">No</el-button>
          <el-button aria-label="Yes" class="app-button" @click="deletePlace">Yes</el-button>
        </span>
      </template>
    </el-dialog>
  </Teleport>
</template>

<script lang='ts' setup>
import { routeNames, router } from '@/router'
const placesStore = usePlacesStore()
const { places } = storeToRefs(placesStore)

const props = defineProps<{
  place: IPlace
}>()

defineEmits(['openEdit', 'openCreate'])

const authStore = useAuthStore()
const { userProfile } = storeToRefs(authStore)

const deliteDialogVisability = ref<boolean>(false)

function deletePlace () {
  if (props.place) {
    placeItemService.deletePlace(props.place.id)
      .then(() => {
        places.value = []
        ElNotification({
          title: 'Success',
          message: 'Successfuly deleted place',
          type: 'success'
        })
      }).catch((e) => {
        ElNotification({
          title: 'Error',
          message: e.error_description || 'Something went wrong.',
          type: 'error'
        })
      }).finally(() => {
        router.push({ name: routeNames.places })
      })
  }
}
</script>
