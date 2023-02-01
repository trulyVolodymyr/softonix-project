<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      label-width="120px"
      :rules="isRulseActive"
      @submit.prevent="submit"
    >
      <div class="form-item">
        <el-form-item ref="vova" label="Name" prop="name">
          <el-input v-model="form.name" class="form-input" />
        </el-form-item>

        <el-form-item label="Address" prop="address">
          <el-input v-model="form.address" class="form-input" />
        </el-form-item>

        <el-form-item label="Primary host" prop="primaryHost">
          <el-input v-model="form.primaryHost" class="form-input" />
        </el-form-item>
      </div>

      <div class="form-item">
        <el-form-item label="Bedrooms" prop="bedrooms">
          <el-input-number v-model="form.bedrooms" class="form-input" />
        </el-form-item>

        <el-form-item label="Beds" prop="beds">
          <el-input-number v-model="form.beds" class="form-input" />
        </el-form-item>

        <el-form-item label="Bathrooms" prop="bathrooms">
          <el-input-number v-model="form.bathrooms" class="form-input" />
        </el-form-item>

        <el-form-item label="Property Type" prop="propertyType">
          <el-select v-model="form.propertyType" class="form-input">
            <el-option
              v-for="item in propertyTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Room Type" prop="roomType">
          <el-select v-model="form.roomType" class="form-input">
            <el-option
              v-for="item in RoomTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Essentials" prop="essentials">
          <el-select
            v-model="form.essentials"
            class="form-input app-select"
            multiple
            collapse-tags
          >
            <el-option
              v-for="item in essentials"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Features" prop="features">
          <el-select
            v-model="form.features"
            class="form-input app-select"
            multiple
            collapse-tags
          >
            <el-option
              v-for="item in features"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Location" prop="amenities_location">
          <el-select
            v-model="form.amenities_location"
            class="form-input app-select"
            multiple
            collapse-tags
          >
            <el-option
              v-for="item in location"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Safety" prop="safety">
          <el-select
            v-model="form.safety"
            class="form-input app-select"
            multiple
            collapse-tags
          >
            <el-option
              v-for="item in safety"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>

      <div class="form-item">
        <el-form-item label="Guest" prop="numberOfGuests">
          <el-input-number v-model="form.numberOfGuests" :min="1" />
        </el-form-item>

        <el-form-item label="Price in $" prop="pricing">
          <el-input-number v-model="form.pricing" />
        </el-form-item>
      </div>

      <div class="form-item">
        <el-form-item label="Photo 1 url" prop="photos">
          <el-input v-model="form.photos[0].pictureUrl" class="form-input" />
        </el-form-item>

        <el-form-item label="Photo 2 url" prop="photos">
          <el-input v-model="form.photos[1].pictureUrl" class="form-input" />
        </el-form-item>

        <el-form-item label="Photo 3 url" prop="photos">
          <el-input v-model="form.photos[2].pictureUrl" class="form-input" />
        </el-form-item>

        <el-form-item label="Photo 4 url" prop="photos">
          <el-input v-model="form.photos[3].pictureUrl" class="form-input" />
        </el-form-item>

        <el-form-item label="Photo 5 url" prop="photos">
          <el-input v-model="form.photos[4].pictureUrl" class="form-input" />
        </el-form-item>
      </div>

      <div class="mt-6 flex flex-col items-center">
        <el-button
          aria-label="Submit"
          native-type="submit"
          class="w-[250px] app-button !ml-0"
        >
          Submit
        </el-button>

        <el-button
          aria-label="Cancel"
          class="w-[250px] app-button  mt-1"
          @click="$emit('close')"
        >
          Cancel
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { router, routeNames } from '@/router'

const props = defineProps<{
  place?: IPlace
  create: boolean
  edit: boolean
}>()

const emits = defineEmits(['close'])

const isRulseActive = computed(() => {
  if (!props.place) {
    return formRules
  }
})

const formRef = useElFormRef()

const propertyTypes = [
  {
    value: 'house',
    label: 'House'
  },
  {
    value: 'apartment',
    label: 'Apartment'
  },
  {
    value: 'guesthouse',
    label: 'Guesthouse'
  },
  {
    value: 'hotel',
    label: 'Hotel'
  }
]
const RoomTypes = [
  {
    value: 'Entire',
    label: 'Entire'
  },
  {
    value: 'Private',
    label: 'Private'
  },
  {
    value: 'Shared',
    label: 'Shared'
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
    value: 'Ski-in/Ski-out',
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

const form = useElFormModel<IPostPlace>({
  name: '',
  numberOfGuests: 0,
  bedrooms: 0,
  beds: 0,
  bathrooms: 0,
  propertyType: '',
  address: '',
  roomType: '',
  pricing: 0,
  photos: [
    {
      caption: '',
      pictureUrl: '',
      thumbnailUrl: ''
    },
    {
      caption: '',
      pictureUrl: '',
      thumbnailUrl: ''
    },
    {
      caption: '',
      pictureUrl: '',
      thumbnailUrl: ''
    },
    {
      caption: '',
      pictureUrl: '',
      thumbnailUrl: ''
    },
    {
      caption: '',
      pictureUrl: '',
      thumbnailUrl: ''
    }
  ],
  primaryHost: '',
  safety: [],
  features: [],
  amenities_location: [],
  essentials: []
})

const formRules = useElFormRules({
  name: [useRequiredRule()],
  numberOfGuests: [useRequiredRule()],
  bedrooms: [useRequiredRule()],
  beds: [useRequiredRule()],
  bathrooms: [useRequiredRule()],
  propertyType: [useRequiredRule()],
  address: [useRequiredRule()],
  roomType: [useRequiredRule()],
  location: [useRequiredRule()],
  pricing: [useRequiredRule()],
  photos: [useRequiredRule()],
  primaryHost: [useRequiredRule()],
  safety: [useRequiredRule()],
  features: [useRequiredRule()],
  amenities_location: [useRequiredRule()],
  essentials: [useRequiredRule()]
})

function submit () {
  if (!props.place) {
    formRef.value?.validate((isValid) => {
      if (isValid) {
        placeItemService.postPlace(form)
          .then(() => {
            ElNotification({
              title: 'Success',
              message: 'Successfyly generated new place',
              type: 'success'
            })
          }).catch((e) => {
            ElNotification({
              title: 'Error',
              message: e.error_description || 'Something went wrong.',
              type: 'error'
            })
          })
          .then(() => {
            emits('close')
          })
      }
    }
    )
  }
  if (props.place) {
    placeItemService.patchPlace(props.place.id, form)
      .then(() => {
        if (props.place) {
          ElNotification({
            title: 'Success',
            message: 'Successfully edited place',
            type: 'success'
          })
          router.push({ name: routeNames.place, params: { id: props.place.id } })
        }
      }).catch((e) => {
        ElNotification({
          title: 'Error',
          message: e.error_description || 'Something went wrong.',
          type: 'error'
        })
      })
      .then(() => {
        emits('close')
      })
  }
}

onMounted(() => {
  if (props.place) {
    form.name = props.place.name
    form.numberOfGuests = props.place.numberOfGuests
    form.bedrooms = props.place.bedrooms
    form.beds = props.place.beds
    form.bathrooms = props.place.bathrooms
    form.propertyType = props.place.propertyType
    form.address = props.place.address
    form.roomType = props.place.roomType
    form.primaryHost = props.place.primaryHost
    form.pricing = props.place.pricing
    form.photos[0].pictureUrl = props.place.photos[0].pictureUrl
    form.photos[1].pictureUrl = props.place.photos[1].pictureUrl
    form.photos[2].pictureUrl = props.place.photos[2].pictureUrl
    form.photos[3].pictureUrl = props.place.photos[3].pictureUrl
    form.photos[4].pictureUrl = props.place.photos[4].pictureUrl
    form.essentials = props.place.essentials
    form.features = props.place.features
    form.safety = props.place.safety
    form.amenities_location = props.place.amenities_location
  }
})
</script>

<style lang='scss'>
.form-item{
 @apply flex flex-wrap border-b-[1px] border-black mb-2 pb-2
}
</style>
