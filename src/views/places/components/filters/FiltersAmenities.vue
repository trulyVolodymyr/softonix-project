<template>
  <h3 class="text-white text-lg text-center mb-4">Amenities</h3>

  <h4 class="text-white underline">Essentials</h4>
  <el-checkbox-group v-model="amenities.essentials">
    <el-checkbox label="Wifi" />
    <el-checkbox label="Washer" />
    <el-checkbox label="Air conditioning" />
    <el-checkbox label="Dedicated workspace" />
    <el-checkbox label="Hair dryer" />
    <el-checkbox label="Kitchen" />
    <el-checkbox label="Dryer" />
    <el-checkbox label="Heating" />
    <el-checkbox label="TV" />
    <el-checkbox label="Iron" />
  </el-checkbox-group>

  <h4 class="text-white underline">Features</h4>
  <el-checkbox-group v-model="amenities.features">
    <el-checkbox label="Pool" />
    <el-checkbox label="Free parking on premises" />
    <el-checkbox label="Crib" />
    <el-checkbox label="BBQ grill" />
    <el-checkbox label="Indoor fireplace" />
    <el-checkbox label="Hot tub" />
    <el-checkbox label="EV charger" />
    <el-checkbox label="Gym" />
    <el-checkbox label="Breakfast" />
    <el-checkbox label="Smoking allowed" />
  </el-checkbox-group>

  <h4 class="text-white underline">Location</h4>
  <el-checkbox-group v-model="amenities.location">
    <el-checkbox label="Beachfront" />
    <el-checkbox label="Waterfront" />
    <el-checkbox label="Ski-in/ski-out" />
  </el-checkbox-group>

  <h4 class="text-white underline">Safety</h4>
  <el-checkbox-group v-model="amenities.safety">
    <el-checkbox label="Smoke alarm" />
    <el-checkbox label="Carbon monoxide alarm" />
  </el-checkbox-group>
</template>

<script lang='ts' setup>
const filtersStore = useFiltersStore()
const { amenities } = storeToRefs(filtersStore)
</script>
