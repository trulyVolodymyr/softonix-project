<template>
  <div v-if="place" v-loading="loading" class="p-6">
    <div v-if="userProfile?.is_admin" class="mb-4">
      <template v-if="!edit && !create">
        <el-button class="app-button" @click="edit = true">Edit place</el-button>
        <el-button class="app-button" @click="create = true">Create place</el-button>
        <el-button class="app-button" @click="deliteDialog = true">Delete place</el-button>
      </template>
    </div>

    <div v-if="create">
      <PlaceItemEditOrCreate />
    </div>

    <div v-if="edit">
      <PlaceItemEditOrCreate :place="place" />
    </div>

    <div v-if="!edit && !create">
      <h3 class="text-xl font-bold mb-3">{{ place?.name }}</h3>

      <div class="flex space-x-5 mb-3">
        <p>{{ place?.address }}</p>

        <p v-if="place?.reviews">{{ place.reviews?.length }} reviews</p>

        <div class="flex items-center space-x-1">
          <IconStar v-if="place?.stars" /><p class="text-sm">{{ place?.stars }}</p>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 mb-4 gird-imgs">
        <img
          v-for="item in place?.photos"
          :key="item.pictureUrl"
          class="first-of-type:col-span-2 first-of-type:row-span-2
       first-of-type:w-full first-of-type:h-full shadow-2xl h-full"
          :src="item.pictureUrl"
          :alt="item.caption"
        >
      </div>

      <p class="text-lg font-bold"> {{ place?.roomType }} hosted by {{ place?.primaryHost }}</p>
      <p class="pb-4 border-b-[1px] border-black mb-3"> {{ placeInfo }}</p>

      <div class="">
        <div class="flex justify-between">
          <div>
            <h3 class="text-xl font-bold mb-3">What this place offers</h3>

            <ul class="mb-3 p-2 shadow-2xl">
              <h4>Essentials</h4>
              <li v-for="item in place?.essentials" :key="item">
                <p class="font-medium mb-1 text-sm"> - {{ item }}</p>
              </li>
            </ul>

            <ul class="mb-3 p-2 shadow-2xl">
              <h4>Features</h4>
              <li v-for="item in place?.features" :key="item">
                <p class="font-medium mb-1 text-sm">- {{ item }}</p>
              </li>
            </ul>

            <ul class="mb-3 p-2 shadow-2xl">
              <h4>Location</h4>
              <li v-for="item in place?.amenities_location" :key="item">
                <p class="font-medium mb-1 text-sm">- {{ item }}</p>
              </li>
            </ul>

            <ul class="mb-3 p-2 shadow-2xl">
              <h4>Safety</h4>
              <li v-for="item in place?.safety" :key="item">
                <p class="font-medium mb-1 text-sm">- {{ item }}</p>
              </li>
            </ul>
          </div>

          <GMapMap
            v-if="place"
            :center="place?.location"
            :zoom="6"
            map-type-id="terrain"
            class="mt-10 ml-5 shadow-2xl w-full h-[296px]"
          >
            <GMapMarker :position="place?.location" />
          </GMapMap>
        </div>

        <div class="w-[451px] mb-5">
          <PlaceItemReserve :reservedDates="place?.reserved_dates" />
        </div>

        <div>
          <div
            v-for="item in place?.reviews"
            :key="item.author.id"
            class="w-full mb-4 shadow-2xl p-2 mr-5"
          >
            <div class="flex mb-2">
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
loading.value = true
onMounted(() => {
  getData()
  create.value = false
  edit.value = false
})

</script>
