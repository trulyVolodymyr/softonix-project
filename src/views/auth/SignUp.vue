<template>
  <div
    v-loading="loading"
  >
    <div
      class="rounded-lg shadow-2xl"
    >
      <h3
        class="mb-5 text-center text-[20px] py-5 border-b-[1px]"
      >
        Registration
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
            type="email"
            placeholder="Email"
            class="app-input"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            type="password"
            placeholder="Password"
            class="app-input"
          />
        </el-form-item>

        <el-form-item prop="passwordRepeat">
          <el-input
            v-model="formModel.passwordRepeat"
            type="password"
            placeholder="Repeat Password"
            class="app-input"
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
        Alredy have an account?
        <span>
          <a
            href="/auth/login"
            class="underline"
          >
            Log in</a>
        </span>
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const { register } = useAuthStore()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: '',
  passwordRepeat: ''
})
const loading = ref(false)

const isPasswordRepeats = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== formModel.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)],
  passwordRepeat: [useRequiredRule(), { validator: isPasswordRepeats, trigger: 'change' }]
})

function submit () {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      loading.value = true

      register(formModel)
        .then(() => router.push({ name: $routeNames.login }))
        .finally(() => (loading.value = false))
    }
  }
  )
}
</script>
