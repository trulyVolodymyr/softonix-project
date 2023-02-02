<template>
  <div class="pb-6">
    <el-form
      ref="formRef"
      :model="form"
      label-width="130px"
      :rules="isRulseActive"
      label-position="top"
      @submit.prevent="submit"
    >
      <div class="form-item gap-5">
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

      <div class="form-item gap-5">
        <el-form-item label="Bedrooms" prop="bedrooms">
          <el-input v-model="form.bedrooms" class="form-input" />
        </el-form-item>

        <el-form-item label="Beds" prop="beds">
          <el-input v-model="form.beds" class="form-input" />
        </el-form-item>

        <el-form-item label="Bathrooms" prop="bathrooms">
          <el-input v-model="form.bathrooms" class="form-input" />
        </el-form-item>
      </div>

      <div class="form-item gap-5">
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
      </div>

      <div class="form-item gap-5">
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

      <div class="form-item gap-5">
        <el-form-item label="Guest" prop="numberOfGuests">
          <el-input v-model="form.numberOfGuests" :min="1" />
        </el-form-item>

        <el-form-item label="Price in $" prop="pricing">
          <el-input v-model="form.pricing" />
        </el-form-item>
      </div>

      <div class="form-item gap-5">
        <el-form-item
          v-for="(photo, index) in form.photos"
          :key="photo.pictureUrl"
          :label="`Photo ${index + 1} url`"
          prop="photo"
        >
          <el-input v-model="photo.pictureUrl" class="form-input" />
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
          @click="goBack"
        >
          Cancel
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { router, routeNames } from '@/router'
import { propertyTypes, RoomTypes, features, essentials, location, safety } from '../place-config'

const props = defineProps<{
  place?: IPlace
}>()

const isRulseActive = computed(() => {
  if (!props.place) {
    return formRules
  }
})

const formRef = useElFormRef()

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
  name: [useRequiredRule(), useMinLenRule(4)],
  numberOfGuests: [useRequiredRule(), useMinLenRule(1)],
  bedrooms: [useRequiredRule(), useMinLenRule(1)],
  beds: [useRequiredRule(), useMinLenRule(1)],
  bathrooms: [useRequiredRule(), useMinLenRule(1)],
  propertyType: [useRequiredRule()],
  address: [useRequiredRule()],
  roomType: [useRequiredRule()],
  location: [useRequiredRule()],
  pricing: [useRequiredRule(), useMinLenRule(1)],
  photo: [useRequiredRule()],
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
  }
}

function goBack () {
  if (props.place) {
    router.push({ name: routeNames.place, params: { id: props.place.id } })
  } else {
    router.push({ name: routeNames.places })
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
    props.place.photos.forEach((item, index) => {
      form.photos[index].pictureUrl = item.pictureUrl
    })
    form.essentials = props.place.essentials
    form.features = props.place.features
    form.safety = props.place.safety
    form.amenities_location = props.place.amenities_location
  }
})
</script>

<style lang='scss'>
.form-item{
 @apply flex flex-wrap border-b-[1px] border-black mb-2 pb-5
}
</style>
