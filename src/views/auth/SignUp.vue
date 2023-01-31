<template>
  <div v-loading="loading">
    <div class="tablet:shadow-2xl">
      <h3 class="mb-5 text-center text-[20px] py-5 border-b-[1px]">Registration</h3>

      <el-form
        ref="formRef"
        :rules="formRules"
        :model="formModel"
        class="tablet:w-[500px] w-[310px] px-5"
        @submit.prevent="submit"
      >
        <el-form-item class="mb-6" prop="email">
          <el-input
            v-model="formModel.email"
            type="email"
            placeholder="Email"
          />
        </el-form-item>

        <el-form-item class="mb-6" prop="password">
          <el-input
            v-model="formModel.password"
            type="password"
            placeholder="Password"
          />
        </el-form-item>

        <el-form-item class="mb-10" prop="passwordRepeat">
          <el-input
            v-model="formModel.passwordRepeat"
            type="password"
            placeholder="Confirm Password"
          />
        </el-form-item>

        <el-button native-type="submit" class="w-full app-button" aria-label="Submit">Submit</el-button>
      </el-form>

      <h2 class="mt-4 px-5 pb-5 text-sm">
        Alredy have an account?
        <span>
          <router-link :to="{name:$routeNames.login}" class="underline">Login</router-link>
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
        .then(() => {
          ElNotification({
            title: 'Success',
            message: 'Successfully registered',
            type: 'success'
          })
          router.push({ name: $routeNames.login })
        })
        .catch((e) => {
          ElNotification({
            title: 'Error!',
            message: e.error_description || 'Something went wrong.',
            type: 'error'
          })
        })
        .finally(() => (loading.value = false))
    }
  }
  )
}
</script>
