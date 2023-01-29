<template>
  <div v-if="place" v-loading="loading">
    <div class="flex justify-between">
      <el-button v-if="!edit && !create" class="app-button mb-4" @click="router.back()">Back</el-button>
      <PlaceItemAdmin />
    </div>

    <div v-if="create">
      <PlaceItemEditOrCreate />
    </div>

    <div v-if="edit">
      <PlaceItemEditOrCreate :place="place" />
    </div>

    <div v-if="!edit && !create">
      <PlaceItemHeader :place="place" />

      <div class="flex">
        <PlaceItemReserve :reservedDates="place?.reserved_dates" />
        <div class="w-full">
          <PlaceItemSlider :photos="place.photos" />
          <div class="mt-10 flex border-b border-b-gray">
            <PlaceItemInfo
              :essentials="place.essentials"
              :features="place.features"
              :amenitiesLocation="place.amenities_location"
              :safety="place.safety"
            />
            <PlaceItemMap :location="place.location" />
          </div>
          <PlaceItemReviews :reviews="place.reviews" />
        </div>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="deliteDialogVisability"
  >
    <p class="text-xl">Are you sure you want to delete this place?</p>

    <template #footer>
      <span class="dialog-footer">
        <el-button class="app-button mr-2" @click="deliteDialogVisability = false">No</el-button>
        <el-button class="app-button" @click="deletePlace">Yes</el-button>
      </span>
    </template>
  </el-dialog>
  <div />
</template>

<script lang='ts' setup>
import { routeNames, router } from '@/router'

const route = useRoute()
const placeItemStore = usePlaceItemStore()
const generalStore = useGeneralStore()

const { loading } = storeToRefs(generalStore)
const { place, create, edit, deliteDialogVisability } = storeToRefs(placeItemStore)

function getPlace () {
  const id = route.params.id as string
  placeItemService.getPlace(id)
    .then((data) => {
      if (!data.length) {
        router.push({ name: routeNames.places })
      }
      place.value = data[0]
    }).finally(() => {
      loading.value = false
    })
}

function deletePlace () {
  if (place.value) {
    placeItemService.deletePlace(place.value.id)
      .then(() => {
        ElNotification({
          title: 'Success',
          message: 'Successfyly deleted place',
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

watch(edit, (currentValue) => {
  if (currentValue === false) {
    getPlace()
  }
})

onMounted(() => {
  getPlace()
  loading.value = true
  create.value = false
  edit.value = false
})

onUnmounted(() => {
  place.value = undefined
})

</script>

<style lang='scss'>
.el-range-editor.el-input__wrapper{
  @apply w-full
}
</style>
