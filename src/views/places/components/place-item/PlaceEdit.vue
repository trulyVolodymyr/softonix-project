<template>
  <PlaceConfigForm v-if="place" :place="place" />
</template>

<script lang='ts' setup>
const route = useRoute()
const generalStore = useGeneralStore()
const { loading } = storeToRefs(generalStore)

const place = ref<IPlace>()

const getPlaceItem = () => {
  loading.value = true

  placeItemService.getPlace(route.params.id as string)
    .then(res => {
      place.value = res[0]
    })
    .finally(() => (loading.value = false))
}

getPlaceItem()

</script>
