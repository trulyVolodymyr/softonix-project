<template>
  <div
    class="min-w-[300px] tablet:min-w-[413px] h-[max-content] flex justify-center mr-10 shadow-2xl"
  >
    <div class="w-[280px]">
      <p class="mb-9 pt-[30px] text-2xl">
        <span class="font-bold">$ {{ place?.pricing.toLocaleString() }}</span> night
      </p>

      <div class="flex items-center mb-7">
        <IconCalendar class="mr-2" />
        <el-date-picker
          v-model="dates"
          type="daterange"
          range-separator="To"
          start-placeholder="Check-in date"
          end-placeholder="Check-out date"
          :disabled-date="disabledDates"
          clear-icon="text-xs"
        />
      </div>

      <div class="flex items-center mb-7">
        <IconGuests class="mr-2" />
        <el-dropdown
          trigger="click"
          :hide-on-click="false"
          class="w-full"
        >
          <el-button
            aria-label="Chose guests"
            class="rounded-none h-[30px] w-[110px] hover:bg-white hover:border-black
            focus::bg-white active:bg-white"
          >
            {{ numberOfGuest }}
          </el-button>

          <template #dropdown>
            <el-dropdown-menu class="place-item-dropdown">
              <el-dropdown-item>
                <PlaceItemNumberOfGuests
                  :place="place"
                  :guest="guests"
                  @guests-change="((val:IGuests)=>guests = val)"
                />
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div v-if="!numberOfDays" class="mb-7">
        <div class="flex justify-between mb-2">
          <p class="text-sm">$ {{ place?.pricing.toLocaleString() }} x 0 nigths </p>
          <p class="text-sm">0 $</p>
        </div>

        <div class="flex justify-between">
          <p class="text-sm">Service fee</p>
          <p class="text-sm">0 $</p>
        </div>

        <el-button
          aria-label="Check out" class="app-button w-full mt-4" disabled @click="postOrder"
        >
          Check out
        </el-button>
        <p class="mt-1 text-xs text-gray-400 text-center">You will NOT be charged for reservation</p>
      </div>

      <div v-if="numberOfDays" class="mb-7">
        <div class="flex justify-between mb-2">
          <p class="text-sm">$ {{ place?.pricing.toLocaleString() }} x {{ numberOfDays }} nigths </p>
          <p class="text-sm">$ {{ totalSum?.toLocaleString() }}</p>
        </div>

        <div class="flex justify-between">
          <p class="text-sm">Service fee</p>
          <p class="text-sm">${{ serviceFee?.toLocaleString() }}</p>
        </div>

        <div class="text-right mt-5">
          <p class="text-xs">total</p>
          <p class="font-bold text-xl">$ {{ totalPlusFee }}</p>
        </div>

        <el-button aria-label="Check out" class="app-button w-full mt-4" @click="postOrder">Check out</el-button>
        <p class="mt-1 text-xs text-gray-400 text-center">You will NOT be charged for reservation</p>
      </div>
    </div>

    <el-dialog
      v-model="dialogUserIsAuth"
      append-to-body
      width="450px"
    >
      <span>You successfully ordered this place!</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button aria-label="Okay" class="app-button mr-2" @click="handleClose">Okay</el-button>

          <router-link :to="{name:$routeNames.orders}">
            <el-button aria-label="Orders" class="app-button">
              Go to orders
            </el-button>
          </router-link>

        </span>
      </template>
    </el-dialog>

    <el-dialog
      v-model="dialogUserIsNotAuth"
      append-to-body
      width="450px"
    >
      <p>You cant order place.</p>
      <p>Login to continue.</p>

      <template #footer>
        <span class="dialog-footer">
          <el-button aria-label="Back" class="app- mr-2 app-button" @click="handleClose">Back</el-button>

          <router-link :to="{name:$routeNames.login}">
            <el-button aria-label="Login" class="app-button">
              Go to login
            </el-button>
          </router-link>

        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>

const { userProfile } = useAuthStore()

const props = defineProps<{
  place: IPlace
  reservedDates?: Date[] | null
}>()

const dialogUserIsAuth = ref<boolean>(false)
const dialogUserIsNotAuth = ref<boolean>(false)
const dates = ref<any>(['', ''])
const guests = ref<IGuests>({
  adults: 1,
  children: 0,
  infants: 0
})

const numberOfDays = computed(() => {
  if (dates.value) {
    return (new Date(dates.value[1]).getTime() - new Date(dates.value[0]).getTime()) / 1000 / 60 / 60 / 24
  }
})

const numberOfGuest = computed(() => {
  const sum = ref(guests.value.adults + guests.value.children + guests.value.infants)
  if (sum.value === 1) {
    return `${sum.value} guest`
  } else {
    return `${sum.value} guests`
  }
})

const totalSum = computed(() => {
  if (numberOfDays.value && props.place) {
    return numberOfDays.value * props.place.pricing
  }
})

const totalPlusFee = computed(() => {
  if (serviceFee.value && totalSum.value) {
    return (totalSum.value + serviceFee.value).toLocaleString()
  }
})

const serviceFee = computed(() => {
  if (totalSum.value) {
    return Math.floor(totalSum.value * 0.15)
  }
})

const disabledDates = (time: Date) => {
  if (props.reservedDates) {
    const date1 = new Date(props.reservedDates[0]).getTime()
    const date2 = new Date(props.reservedDates[1]).getTime()

    return time.getTime() >= date1 && time.getTime() <= date2
  }
}

function postOrder () {
  if (userProfile && props.place) {
    const sum = guests.value.children + guests.value.adults + guests.value.infants
    const order = {
      user_id: userProfile.id,
      place_id: props.place.id,
      place_name: props.place.name,
      guests: sum,
      dates: dates.value,
      created_at: new Date(),
      price: totalSum.value
    }

    return placeItemService.postOrder(order)
      .then(() => {
        dialogUserIsAuth.value = true
      })
      .catch((e) => {
        ElNotification({
          title: 'Error',
          message: e.error_description || 'Something went wrong.',
          type: 'error'
        })
      })
  } else {
    dialogUserIsNotAuth.value = true
  }
}

function handleClose () {
  if (dialogUserIsAuth.value) {
    return (dialogUserIsAuth.value = false)
  }
  dialogUserIsNotAuth.value = false
}

</script>
