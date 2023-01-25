<template>
  <div v-if="place" v-loading="loading" class="p-6">
    <el-button v-if="!edit && !create" class="app-button mb-4">
      <router-link :to="{name:$routeNames.places}">Back to all places</router-link>
    </el-button>

    <div v-if="create">
      <PlaceItemEditOrCreate />
    </div>

    <div v-if="edit">
      <PlaceItemEditOrCreate :place="place" />
    </div>

    <div v-if="!edit && !create">
      <div class="flex justify-between">
        <div>
          <h3 class="text-xl font-bold mb-1">{{ place?.name }}</h3>

          <div class="flex space-x-5 mb-1">
            <p>{{ place?.address }}</p>

            <p v-if="place?.reviews">{{ place.reviews?.length }} reviews</p>

            <div class="flex items-center space-x-1">
              <IconStar v-if="place?.stars" /><p class="text-sm">{{ place?.stars }}</p>
            </div>
          </div>
          <p class="pb-4 mb-3"> {{ placeInfo }}</p>
        </div>
        <div v-if="userProfile?.is_admin">
          <template v-if="!edit && !create">
            <el-button class="app-button" @click="edit = true">Edit place</el-button>
            <el-button class="app-button" @click="create = true">Create place</el-button>
            <el-button class="app-button" @click="deliteDialog = true">Delete place</el-button>
          </template>
        </div>
      </div>
      <div class="flex">
        <div>
          <!-- SLIDER -->
          <el-carousel
            height="484px"
            :autoplay="false"
            trigger="click"
            :interval="5000" arrow="always"
            class="min-w-[550px] shadow-2xl"
          >
            <el-carousel-item v-for="item in place?.photos" :key="item.pictureUrl">
              <img class="object-cover  h-full shrink-0" :src="item.pictureUrl" :alt="item.caption">
            </el-carousel-item>
          </el-carousel>

          <!-- REVIEWS -->
          <div class="mt-4">
            <div
              v-for="item in place?.reviews"
              :key="item.author.id"
              class="w-[550px] mb-4 shadow-2xl p-2 h-[max-content]"
            >
              <div class="flex w-[550px] mb-2">
                <img
                  class="w-10 h-10 mr-8"
                  :src="item.author.pictureUrl"
                  :alt="item.author.firstName"
                >

                <div>
                  <p class=" text-sm font-bold">{{ item.author.firstName }}</p>

                  <p class=" text-sm font-bold">{{ formatDate(item.createdAt) }}</p>
                </div>
              </div>

              <p class="text-xs">{{ item.comments }}</p>
            </div>
          </div>
        </div>
        <!-- INFO AND ORDER -->
        <div class="ml-4 sticky top-1 h-max mb-4">
          <div class="mb-5 p-2">
            <h3 class="text-xl font-bold mb-1">What this place offers:</h3>

            <p class="font-bold text-sm mb-5">
              Essentials:
              <span v-for="item in place?.essentials" :key="item" class="mx-3 font-normal">{{ item }}</span>
            </p>

            <p class="font-bold text-sm  mb-5">
              Features:
              <span v-for="item in place?.features" :key="item" class="mx-3 font-normal">{{ item }}</span>
            </p>

            <p class="font-bold text-sm  mb-5">
              Location:
              <span v-for="item in place?.amenities_location" :key="item" class="mx-3 font-normal">{{ item }}</span>
            </p>

            <p class="font-bold text-sm">
              Safety:
              <span v-for="item in place?.safety" :key="item" class="mx-3 font-normal">{{ item }}</span>
            </p>
          </div>

          <div>
            <PlaceItemReserve :reservedDates="place?.reserved_dates" />
          </div>
        </div>
      </div>

      <!-- MAP -->
      <GMapMap
        v-if="place"
        :center="place?.location"
        :zoom="6"
        map-type-id="terrain"
        class="shadow-2xl w-full h-[296px]"
      >
        <GMapMarker :position="place?.location" />
      </GMapMap>
    </div>
  </div>

  <el-dialog
    v-model="deliteDialog"

    title="Attention"
    width="450px"
  >
    <p>Are you sure you want to delete this place?</p>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deliteDialog = false">No</el-button>
        <el-button type="primary" @click="deletePlace">
          Yes
        </el-button>
      </span>
    </template>
  </el-dialog>
  <div />
</template>

<script lang='ts' setup>
import { routeNames, router } from '@/router'

const route = useRoute()
const placeItemStore = usePlaceItemStore()
const authStore = useAuthStore()
const generalStore = useGeneralStore()

const { userProfile } = storeToRefs(authStore)
const { loading } = storeToRefs(generalStore)
const { place, create, edit } = storeToRefs(placeItemStore)

const deliteDialog = ref<boolean>(false)

const placeInfo = computed(() => {
  const text = []
  if (place.value) {
    if (place.value.numberOfGuests > 1) {
      text.push(`${place.value.numberOfGuests} guests /`)
    } else {
      text.push(`${place.value.numberOfGuests} guest /`)
    }

    if (place.value.bedrooms > 1) {
      text.push(` ${place.value.bedrooms} bedrooms /`)
    } else {
      text.push(` ${place.value.bedrooms} bedroom /`)
    }

    if (place.value.beds > 1) {
      text.push(` ${place.value.beds} beds /`)
    } else {
      text.push(` ${place.value.beds} bed /`)
    }

    if (place.value.bathrooms > 1) {
      text.push(` ${place.value.bathrooms} bathrooms`)
    } else {
      text.push(` ${place.value.bathrooms} bathroom`)
    }
  }

  return text.join('')
})

function formatDate (date: string) {
  const d = new Date(date)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  let month = '' + monthNames[(d.getMonth() + 1)]
  const year = d.getFullYear()

  if (month.length < 2) { month = '0' + month }

  return [month, year].join(' ')
}

async function getData () {
  const id = route.params.id as string
  await placeItemService.getPlace(id)
    .then((data) => {
      if (!data.length) {
        console.log(1)
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
    getData()
  }
})

loading.value = true
onMounted(() => {
  getData()
  create.value = false
  edit.value = false
})

</script>
<style lang='scss'>
.el-range-editor.el-input__wrapper{
  @apply w-full
}
</style>
