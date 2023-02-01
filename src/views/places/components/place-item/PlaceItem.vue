<template>
  <div v-if="place">
    <div class="flex justify-between">
      <router-link v-if="!edit && !create" :to="{name:$routeNames.places}">
        <el-button aria-label="Back" class="app-button mb-4">
          Back
        </el-button>
      </router-link>

      <PlaceItemAdmin
        :place="place"
        :create="create"
        :edit="edit"
        @openEdit="edit = true"
        @openCreate="create = true"
      />
    </div>

    <PlaceItemEditOrCreate
      v-if="create"
      :create="create"
      :edit="edit"
      @close="edit = create = false"
    />

    <PlaceItemEditOrCreate
      v-if="edit"
      :create="create"
      :edit="edit"
      :place="place"
      @close="edit = create = false"
    />

    <div v-if="!edit && !create">
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
const edit = ref<boolean>(false)
const create = ref<boolean>(false)

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
