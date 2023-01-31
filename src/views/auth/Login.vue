<template>
  <div v-loading="loading">
    <div class="tablet:shadow-2xl h-[369px]">
      <h3 class="mb-5 text-center text-5 py-5 border-b-[1px]">Login</h3>

      <el-form
        ref="formRef"
        :rules="formRules"
        :model="formModel"
        class="tablet:w-[500px] w-[310px] px-5"
        @submit.prevent="submit"
      >
        <el-form-item class="mb-6" prop="email">
          <el-input
            ref="firstInput"
            v-model="formModel.email"
            type="email"
            placeholder="Email"
          />
        </el-form-item>

        <el-form-item class="mb-10" prop="password">
          <el-input
            v-model="formModel.password"
            type="password"
            placeholder="Password"
          />
        </el-form-item>

        <el-button
          native-type="submit"
          class="w-full app-button mt-14"
          aria-label="Sumbit"
        >
          Submit
        </el-button>
      </el-form>

      <h2 class="mt-4 px-5 pb-5 text-sm">
        Dont have an account?
        <span>
          <router-link :to="{name:$routeNames.signUp}" class="underline">Register</router-link>
        </span>
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $routeNames } = useGlobalProperties()
const { login } = useAuthStore()
const router = useRouter()
const formRef = useElFormRef()
const formModel = useElFormModel({
  email: '',
  password: ''
})

const loading = ref(false)
const firstInput = ref<HTMLInputElement>()

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      loading.value = true

      login(formModel)
        .then(() => {
          ElNotification({
            title: 'Success',
            message: 'Successfully loged in',
            type: 'success'
          })
          router.push({ name: $routeNames.places })
        })
        .catch((e) => {
          ElNotification({
            title: 'Error',
            message: e.error_description || 'Something went wrong.',
            type: 'error'
          })
        })
        .finally(() => (loading.value = false))
    }
  }
  )
}

onMounted(() => {
  firstInput.value?.focus()
})
</script>
