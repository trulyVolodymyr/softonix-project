<template>
  <div
    v-loading="loading"
  >
    <div
      class="shadow-2xl"
    >
      <h3
        class="mb-5 text-center text-5 py-5 border-b-[1px]"
      >
        Login
      </h3>

      <el-form
        ref="formRef"
        :rules="formRules"
        :model="formModel"
        class="w-[500px] space-y-6 px-5"
        @submit.prevent="submit"
      >
        <el-form-item prop="email">
          <el-input
            v-model="formModel.email"
            size="large"
            type="email"
            placeholder="Email"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            size="large"
            type="password"
            placeholder="Password"
          />
        </el-form-item>

        <el-button
          native-type="submit"
          class="w-full app-button"
        >
          Submit
        </el-button>
      </el-form>
      <h2
        class="mt-4 px-5 pb-5 text-sm"
      >
        Dont have an account?
        <span>
          <router-link
            :to="{name:$routeNames.signUp}"
            class="underline"
          >
            Register</router-link>
        </span>
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const authStore = useAuthStore()
const { error } = storeToRefs(authStore)
const { login } = useAuthStore()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: ''
})
const loading = ref(false)

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      loading.value = true

      login(formModel)
        .then(() => { if (!error.value) { router.push({ name: $routeNames.home }) } })
        .finally(() => (loading.value = false))
    }
  }
  )
}

watch(error, (currentValue) => {
  if (currentValue === true) {
    authService.errorModal()
  }
})
</script>
