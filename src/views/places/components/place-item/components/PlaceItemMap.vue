<template>
  <GMapMap
    :center="location"
    :zoom="6"
    map-type-id="terrain"
    class="shadow-2xl w-full h-[300px]"
  >
    <GMapMarker :position="location" />
  </GMapMap>
</template>

<script lang='ts' setup>
defineProps<{
  location: ILocation
}>()
</script>
