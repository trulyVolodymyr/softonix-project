<template>
  <h3 class="mt-6 font-bold">Amenities</h3>

  <el-form-item class="app-formitem">
    <p class="my-[2px]">Essentials</p>
    <el-select
      v-model="amenities.essentials"
      multiple
      collapse-tags
      class="app-select"
    >
      <el-option
        v-for="item in essentials"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="my-[2px]">Features</p>
    <el-select
      v-model="amenities.features"
      multiple
      collapse-tags
      class="app-select"
    >
      <el-option
        v-for="item in features"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="my-[2px]">Location</p>
    <el-select
      v-model="amenities.location"
      multiple
      collapse-tags
      class="app-select"
    >
      <el-option
        v-for="item in location"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>

  <el-form-item class="app-formitem">
    <p class="my-[2px] w-full">Safety</p>
    <el-select
      v-model="amenities.safety"
      multiple
      collapse-tags
      class="app-select"
    >
      <el-option
        v-for="item in safety"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script lang='ts' setup>
const placesStore = usePlacesStore()
const { amenities } = storeToRefs(placesStore)

const essentials = [
  {
    value: 'Wifi',
    label: 'Wifi'
  },
  {
    value: 'Washer',
    label: 'Washer'
  },
  {
    value: 'Air conditionng',
    label: 'Air conditionng'
  },
  {
    value: 'Dedicated workspace',
    label: 'Dedicated workspace'
  },
  {
    value: 'Hair dryer',
    label: 'Hair dryer'
  },
  {
    value: 'Kitchen',
    label: 'Kitchen'
  },
  {
    value: 'Dryer',
    label: 'Dryer'
  },
  {
    value: 'Heating',
    label: 'Heating'
  },
  {
    value: 'TV',
    label: 'TV'
  },
  {
    value: 'Iron',
    label: 'Iron'
  }
]
const features = [
  {
    value: 'Pool',
    label: 'Pool'
  },
  {
    value: 'Free parking on premises',
    label: 'Free parking on premises'
  },
  {
    value: 'Crib',
    label: 'Crib'
  },
  {
    value: 'BBQ grill',
    label: 'BBQ grill'
  },
  {
    value: 'Indoor fireplace',
    label: 'Indoor fireplace'
  },
  {
    value: 'Hot tub',
    label: 'Hot tub'
  },
  {
    value: 'EV charger',
    label: 'EV charger'
  },
  {
    value: 'Gym',
    label: 'Gym'
  },
  {
    value: 'Breakfast',
    label: 'Breakfast'
  },
  {
    value: 'Smooking allowed',
    label: 'Smooking allowed'
  }
]
const location = [
  {
    value: 'Beachfront',
    label: 'Beachfront'
  },
  {
    value: 'Waterfront',
    label: 'Waterfront'
  },
  {
    value: 'Ski-in/Ski-out',
    label: 'Ski-in/Ski-out'
  }
]
const safety = [
  {
    value: 'Smoke alarm',
    label: 'Smoke alarm'
  },
  {
    value: 'Carbon monoxide alarm',
    label: 'Carbon monoxide alarm'
  }

]
</script>
