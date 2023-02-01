<template>
  <div v-if="place">
    <div class="flex justify-between">
      <router-link :to="{name:$routeNames.places}">
        <el-button aria-label="Back" class="app-button mb-4">
          Back
        </el-button>
      </router-link>

      <PlaceItemAdmin
        :place="place"
      />
    </div>

    <div>
      <PlaceItemHeader :place="place" />

      <div class="flex">
        <PlaceItemReserve
          :place="place"
          :reservedDates="place?.reserved_dates"
          class="laptop-wide:flex hidden"
        />
        <div class="w-full">
          <PlaceItemSlider :photos="place.photos" />
          <div class="mt-10 desktop:flex block border-b border-b-gray pb-5">
            <PlaceItemInfo
              :essentials="place.essentials"
              :features="place.features"
              :amenitiesLocation="place.amenities_location"
              :safety="place.safety"
            />
            <PlaceItemReserve
              :place="place"
              :reservedDates="place?.reserved_dates"
              class="laptop-wide:hidden flex mr-0 mb-6 min-w-[280px]"
            />
            <PlaceItemMap :location="place.location" />
          </div>
          <PlaceItemReviews :reviews="place.reviews" />
        </div>
      </div>
    </div>
  </div>

  <div />
</template>

<script lang='ts' setup>
import { routeNames, router } from '@/router'

const route = useRoute()
const generalStore = useGeneralStore()
const { loading } = storeToRefs(generalStore)

const place = ref<IPlace>()

function getPlace () {
  const id = route.params.id as string
  placeItemService.getPlace(id)
    .then((data) => {
      if (!data.length) {
        router.push({ name: routeNames.places })
      }
      place.value = data[0]
    })
    .catch((e) => {
      ElNotification({
        title: 'Error',
        message: e.error_description || 'Something went wrong.',
        type: 'error'
      })
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  getPlace()
  loading.value = true
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
