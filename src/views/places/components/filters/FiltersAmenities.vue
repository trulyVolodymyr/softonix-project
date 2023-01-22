<template>
  <h3 class="text-white text-lg text-center mb-4">Amenities</h3>
  <h4 class="text-white underline">Essentials</h4>
  <div>
    <el-checkbox v-model="amenities.essentials.wifi" label="Wifi" size="large" />
    <el-checkbox v-model="amenities.essentials.washer" label="Washer" size="large" />
    <el-checkbox v-model="amenities.essentials.airConditioning" label="Air conditioning" size="large" />
    <el-checkbox v-model="amenities.essentials.dedicatedWorkspace" label="Dedicated workspace" size="large" />
    <el-checkbox v-model="amenities.essentials.hairDryer" label="Hair dryer" size="large" />
    <el-checkbox v-model="amenities.essentials.kitchen" label="Kitchen" size="large" />
    <el-checkbox v-model="amenities.essentials.dryer" label="Dryer" size="large" />
    <el-checkbox v-model="amenities.essentials.heating" label="Heating" size="large" />
    <el-checkbox v-model="amenities.essentials.tv" label="TV" size="large" />
    <el-checkbox v-model="amenities.essentials.iron" label="Iron" size="large" />
  </div>
  <h4 class="text-white underline">Features</h4>
  <div>
    <el-checkbox v-model="amenities.features.pool" label="Pool" size="large" />
    <el-checkbox v-model="amenities.features.freeParking" label="Free parking on premises" size="large" />
    <el-checkbox v-model="amenities.features.crib" label="Crib" size="large" />
    <el-checkbox v-model="amenities.features.bbqGrill" label="BBQ grill" size="large" />
    <el-checkbox v-model="amenities.features.indoorFireplace" label="Indoor fireplace" size="large" />
    <el-checkbox v-model="amenities.features.hotTub" label="Hot tub" size="large" />
    <el-checkbox v-model="amenities.features.evCharger" label="EV charger" size="large" />
    <el-checkbox v-model="amenities.features.gym" label="Gym" size="large" />
    <el-checkbox v-model="amenities.features.breakfast" label="Breakfast" size="large" />
    <el-checkbox v-model="amenities.features.smokingAllowed" label="Smoking allowed" size="large" />
  </div>
  <h4 class="text-white underline">Location</h4>
  <div>
    <el-checkbox v-model="amenities.location.beachfront" label="Beachfront" size="large" />
    <el-checkbox v-model="amenities.location.waterfront" label="Waterfront" size="large" />
    <el-checkbox v-model="amenities.location.skiOut" label="Ski-in/ski-out" size="large" />
  </div>
  <h4 class="text-white underline">Safety</h4>
  <div>
    <el-checkbox v-model="amenities.safety.smokeAlarm" label="Smoke alarm" size="large" />
    <el-checkbox v-model="amenities.safety.carbonMonoxideAlarm" label="Carbon monoxide alarm" size="large" />
  </div>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { amenities } = storeToRefs(filtersStore)
</script>
