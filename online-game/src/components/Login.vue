<template>
  <q-form data-test="submit-form" @submit.prevent="submitForm()">
    <q-input
      outlined
      dense
      class="q-mb-md"
      v-model="password"
      label="Password"
      type="password"
      data-test="password-input"
      lazy-rules
      :rules="[ passwordRule ]" />
    <q-btn
      color="primary"
      type="submit"
      class="full-width"
      no-caps
      icon="login"
      label="Login"/>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { requiredRule, emailRule, passwordRule } from '../validations'
import { Notify } from 'quasar'
import useAuth from '../use/useAuth'

export default defineComponent({
  setup () {
    const { loginWithPassword } = useAuth()

    const password = ref('')

    const errorPassword = ref('')

    function submitForm () {
      loginWithPassword(password.value).catch((error: Error) => {
        Notify.create({
          message: error.message,
          color: 'negative'
        })
      })
    }

    return {
      password,
      submitForm,
      emailRule,
      requiredRule,
      passwordRule,
      errorPassword
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
